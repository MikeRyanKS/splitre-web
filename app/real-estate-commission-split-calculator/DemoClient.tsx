"use client";

import { useEffect, useMemo, useState } from "react";
import { calculateDeal } from "@/lib/calculator";
import type { RuleNode } from "@/types/commission-plan";
import { getStoredLead, requestDemoDeal, type DemoLeadResult } from "@/lib/demoLead";
import ReceiptCard from "./ReceiptCard";
import LeadGateModal from "./LeadGateModal";
import LimitReachedModal from "./LimitReachedModal";

function fmt(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

type PendingAction = "download" | "email" | null;

export default function DemoClient() {
  // Deal details — cosmetic fields that personalize the PDF but don't affect math.
  const [address, setAddress] = useState("");
  const [agentName, setAgentName] = useState("");
  const [brokerageName, setBrokerageName] = useState("");
  const [closingDate, setClosingDate] = useState(todayISO());

  // Numbers that drive the calculation.
  const [salePrice, setSalePrice] = useState(415000);
  const [commissionPct, setCommissionPct] = useState(2.75);
  const [agentPct, setAgentPct] = useState(70);
  const [capLimit, setCapLimit] = useState(18000);
  const [capUsed, setCapUsed] = useState(0);
  const [eoFee, setEoFee] = useState(150);
  const [txnFee, setTxnFee] = useState(395);
  const [franchisePct, setFranchisePct] = useState(0);

  const [showAdjustments, setShowAdjustments] = useState(false);
  const [referralPct, setReferralPct] = useState(0);
  const [bonusAmount, setBonusAmount] = useState(0);

  // Lead-gate state.
  const [pendingAction, setPendingAction] = useState<PendingAction>(null);
  const [showLimitModal, setShowLimitModal] = useState(false);
  const [remaining, setRemaining] = useState<number | null>(null);
  const [checkingReturning, setCheckingReturning] = useState(false);
  const [emailSentTo, setEmailSentTo] = useState<string | null>(null);

  useEffect(() => {
    const stored = getStoredLead();
    if (stored) setRemaining(stored.remaining);
  }, []);

  const gci = Math.max(0, (salePrice * commissionPct) / 100);

  const rules: RuleNode[] = useMemo(() => {
    const list: RuleNode[] = [
      { type: "split", id: "split", agent_pct: agentPct, broker_pct: 100 - agentPct },
    ];
    if (franchisePct > 0) list.push({ type: "percentage_deduction", id: "franchise", label: "Franchise Royalty Fee", pct: franchisePct, stage: 1 });
    if (capLimit > 0) list.push({ type: "cap", id: "cap", limit: capLimit });
    if (eoFee > 0) list.push({ type: "flat_deduction", id: "eo", label: "E&O Insurance Fee", amount: eoFee, stage: 3 });
    if (txnFee > 0) list.push({ type: "flat_deduction", id: "txn", label: "Transaction / Compliance Fee", amount: txnFee, stage: 3 });
    return list;
  }, [agentPct, franchisePct, capLimit, eoFee, txnFee]);

  const breakdown = useMemo(
    () =>
      calculateDeal(
        gci,
        rules,
        { cumulative_broker_cut: capUsed, cap_limit: capLimit },
        {
          referral_pct: referralPct || undefined,
          bonus_amount: bonusAmount || undefined,
        }
      ),
    [gci, rules, capUsed, capLimit, referralPct, bonusAmount]
  );

  const dateLabel = closingDate
    ? new Date(closingDate + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
    : new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  const dealPayload = {
    brokerage_name: brokerageName || "Your Brokerage",
    address: address || "123 Main St",
    agent_name: agentName || "Agent Name",
    closing_date: dateLabel,
    line_items: breakdown.line_items.map((i) => ({ label: i.label, amount: i.amount })),
    agent_net: breakdown.agent_net,
    broker_cut: breakdown.broker_cut,
  };

  function resolveAction(result: DemoLeadResult, action: "download" | "email") {
    if (!result.ok) return; // error already shown inline by the modal
    if (result.limited) {
      setPendingAction(null);
      setShowLimitModal(true);
      setRemaining(0);
      return;
    }
    setRemaining(result.remaining);
    setPendingAction(null);
    if (action === "download") {
      const parts = [address, agentName].filter(Boolean);
      if (parts.length > 0) {
        document.title = `${parts.join(" - ")} (Demo)`.replace(/[/\\:*?"<>|]/g, "-");
      }
      window.print();
    } else {
      setEmailSentTo(null); // reset then set on next tick so the banner re-triggers if clicked twice
      setTimeout(() => setEmailSentTo("sent"), 0);
    }
  }

  async function handleReceiptAction(action: "download" | "email") {
    const stored = getStoredLead();
    if (!stored) {
      setPendingAction(action);
      return;
    }
    setCheckingReturning(true);
    const result = await requestDemoDeal(action, stored.email, stored.firstName, dealPayload);
    setCheckingReturning(false);
    resolveAction(result, action);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-indigo-500 rounded-full" />
          No signup · No credit card · Runs entirely in your browser
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Real Estate Commission Split Calculator</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Calculate exactly what your agent and brokerage each take home — 70/30 and 80/20 splits, franchise royalty and referral fees, and annual cap tracking, handled automatically. Plug in a real deal and get the same math and PDF you'd get inside SplitRE.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8 print:block">
        {/* Form */}
        <div className="lg:col-span-2 print:hidden">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-5">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Deal details</p>
              <div className="space-y-3">
                <Field label="Property address">
                  <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="123 Main St" className={inputClass} />
                </Field>
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Agent name">
                    <input type="text" value={agentName} onChange={(e) => setAgentName(e.target.value)} placeholder="Jamie Rivera" className={inputClass} />
                  </Field>
                  <Field label="Closing date">
                    <input type="date" value={closingDate} onChange={(e) => setClosingDate(e.target.value)} className={inputClass} />
                  </Field>
                </div>
                <Field label="Your brokerage name (optional)">
                  <input type="text" value={brokerageName} onChange={(e) => setBrokerageName(e.target.value)} placeholder="Your Brokerage" className={inputClass} />
                </Field>
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Sale price">
                    <MoneyInput value={salePrice} onChange={setSalePrice} />
                  </Field>
                  <Field label="Commission %">
                    <PctInput value={commissionPct} onChange={setCommissionPct} step={0.05} />
                  </Field>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Commission plan</p>
              <div className="space-y-3">
                <Field label={`Agent split — ${agentPct}% / ${100 - agentPct}% broker`}>
                  <input
                    type="range"
                    min={40}
                    max={100}
                    value={agentPct}
                    onChange={(e) => setAgentPct(Number(e.target.value))}
                    className="w-full accent-indigo-600"
                  />
                </Field>
                <Field label="Franchise royalty fee % (optional — e.g. Keller Williams, RE/MAX)">
                  <PctInput value={franchisePct} onChange={setFranchisePct} step={0.5} />
                </Field>
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Annual cap limit">
                    <MoneyInput value={capLimit} onChange={setCapLimit} />
                  </Field>
                  <Field label="Already collected (YTD)">
                    <MoneyInput value={capUsed} onChange={setCapUsed} />
                  </Field>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Field label="E&O fee">
                    <MoneyInput value={eoFee} onChange={setEoFee} />
                  </Field>
                  <Field label="Transaction fee">
                    <MoneyInput value={txnFee} onChange={setTxnFee} />
                  </Field>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setShowAdjustments((v) => !v)}
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-700"
              >
                {showAdjustments ? "− Hide" : "+ Add"} one-off adjustments
              </button>
              {showAdjustments && (
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <Field label="Outside referral fee %">
                    <PctInput value={referralPct} onChange={setReferralPct} step={1} />
                  </Field>
                  <Field label="Bonus commission $">
                    <MoneyInput value={bonusAmount} onChange={setBonusAmount} />
                  </Field>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Live preview + receipt */}
        <div className="lg:col-span-3">
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-5 mb-6 print:hidden">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Gross commission</span>
              <span className="font-bold text-gray-900">{fmt(gci)}</span>
            </div>
            {capLimit > 0 && (
              <div className="bg-amber-50 border border-amber-100 rounded-lg px-3 py-2.5 mt-3">
                <div className="text-xs font-semibold text-amber-700">
                  Cap progress: {fmt(Math.min(breakdown.new_cumulative_broker_cut, capLimit))} / {fmt(capLimit)}
                </div>
                <div className="mt-1.5 bg-amber-200 rounded-full h-1.5 w-full">
                  <div
                    className="bg-amber-500 h-1.5 rounded-full transition-all"
                    style={{ width: `${Math.min(100, (breakdown.new_cumulative_broker_cut / capLimit) * 100)}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          <ReceiptCard
            brokerageName={brokerageName}
            address={address}
            agentName={agentName}
            dateLabel={dateLabel}
            lineItems={breakdown.line_items}
            agentNet={breakdown.agent_net}
            brokerCut={breakdown.broker_cut}
            remaining={remaining}
            onDownloadClick={() => handleReceiptAction("download")}
            onEmailClick={() => handleReceiptAction("email")}
          />

          {checkingReturning && <p className="text-center text-xs text-gray-400 mt-2 print:hidden">Checking…</p>}

          {emailSentTo && (
            <p className="text-center text-sm text-emerald-600 font-medium mt-3 print:hidden">
              Sent! Check your inbox for this deal's breakdown.
            </p>
          )}
        </div>
      </div>

      {pendingAction && (
        <LeadGateModal
          action={pendingAction}
          deal={dealPayload}
          onClose={() => setPendingAction(null)}
          onResolved={(result) => resolveAction(result, pendingAction)}
        />
      )}

      {showLimitModal && <LimitReachedModal onClose={() => setShowLimitModal(false)} />}
    </div>
  );
}

const inputClass = "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-gray-600 mb-1">{label}</span>
      {children}
    </label>
  );
}

function MoneyInput({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
      <input
        type="number"
        min={0}
        value={value}
        onChange={(e) => onChange(Math.max(0, Number(e.target.value) || 0))}
        className={`${inputClass} pl-6`}
      />
    </div>
  );
}

function PctInput({ value, onChange, step }: { value: number; onChange: (n: number) => void; step: number }) {
  return (
    <div className="relative">
      <input
        type="number"
        min={0}
        max={100}
        step={step}
        value={value}
        onChange={(e) => onChange(Math.max(0, Number(e.target.value) || 0))}
        className={`${inputClass} pr-7`}
      />
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
    </div>
  );
}
