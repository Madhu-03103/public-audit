import {
  Box,
  ArrowRight,
  Search,
  Download,
  Shield,
  ExternalLink
} from 'lucide-react';

export function PublicAudit() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
            Public Audit Trail
            <span className="text-xs px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/50">
              Demo / Prototype Mode
            </span>
          </h2>
          <p className="text-slate-400">
            Immutable, transparent, blockchain-verified records
          </p>
        </div>

        <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/50">
          <Box className="w-10 h-10 text-cyan-400" />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard label="Total Transactions" value="45,673" color="teal" />
        <StatCard label="Total Distributed" value="₹12.5 Cr" color="cyan" />
        <StatCard label="Active Beneficiaries" value="12,547" color="green" />
        <StatCard label="Verified Vendors" value="1,234" color="teal" />
      </div>

      {/* Search & Filters */}
      <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm text-slate-400 mb-2">
              Search Transaction
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                placeholder="Transaction hash, wallet, beneficiary ID"
                className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-white focus:border-teal-500 focus:outline-none"
              />
            </div>
          </div>

          <select className="bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white">
            <option>All Categories</option>
            <option>Food</option>
            <option>Medicine</option>
            <option>Shelter</option>
          </select>

          <select className="bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>All Time</option>
          </select>
        </div>

        <div className="mt-4 flex gap-3">
          <button className="px-4 py-2 rounded-lg bg-teal-500 text-white flex items-center gap-2">
            <Search className="w-4 h-4" />
            Search
          </button>
          <button className="px-4 py-2 rounded-lg bg-slate-800 text-white flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>

        {/* Category Legend */}
        <div className="flex gap-4 mt-4 text-xs">
          <span className="text-green-400">● Food</span>
          <span className="text-cyan-400">● Medicine</span>
          <span className="text-yellow-400">● Shelter</span>
          <span className="text-teal-400">● Token Issuance</span>
        </div>
      </div>

      {/* Transactions */}
      <div className="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden">
        <div className="p-6 border-b border-slate-700">
          <h4 className="text-lg font-semibold flex items-center gap-2">
            <Shield className="w-5 h-5 text-teal-400" />
            Recent Transactions
          </h4>
        </div>

        <div className="divide-y divide-slate-700">
          <TransactionRow
            txHash="0x7a9f...7a6e"
            from="Donor Pool"
            to="BEN-KL-082547"
            amount="2500"
            category="Relief Token Issuance"
            timestamp="Dec 29, 2024 – 14:32"
            block="18,945,892"
          />
          <TransactionRow
            txHash="0x3c2e...5d4b"
            from="BEN-KL-082547"
            to="VEN-KL-00423"
            amount="250"
            category="Medicine"
            timestamp="Dec 29, 2024 – 12:15"
            block="18,945,847"
          />
        </div>
      </div>

      {/* Transparency Statement */}
      <div className="rounded-xl bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-green-500/10 border border-teal-500/30 p-8">
        <h4 className="text-2xl font-semibold mb-2">
          Immutable & Public by Design
        </h4>
        <p className="text-slate-300">
          Every transaction is permanently recorded on-chain, ensuring
          end-to-end transparency for donors, governments, and the public.
        </p>
      </div>
    </div>
  );
}

/* ---------- Components ---------- */

function StatCard({ label, value, color }: any) {
  const colors: any = {
    teal: 'border-teal-500/50 text-teal-400',
    cyan: 'border-cyan-500/50 text-cyan-400',
    green: 'border-green-500/50 text-green-400'
  };

  return (
    <div className={`bg-slate-900 border ${colors[color]} rounded-xl p-6`}>
      <p className="text-sm text-slate-400">{label}</p>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}

function TransactionRow({ txHash, from, to, amount, category, timestamp, block }: any) {
  const categoryColor = category.includes('Food')
    ? 'text-green-400'
    : category.includes('Medicine')
    ? 'text-cyan-400'
    : category.includes('Shelter')
    ? 'text-yellow-400'
    : 'text-teal-400';

  return (
    <div className="p-6 hover:bg-slate-800/50">
      <div className="flex justify-between mb-2">
        <div>
          <div className="text-xs text-slate-500">TX Hash</div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm text-teal-400">{txHash}</span>
            <span className="text-xs px-2 py-0.5 rounded bg-teal-500/20 text-teal-400">
              On-chain
            </span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </div>

          <div className="text-sm text-slate-400 mt-1">
            {from} <ArrowRight className="inline w-4 h-4 mx-1" /> {to}
          </div>
        </div>

        <div className="text-right">
          <p className="text-xl font-semibold">{amount} RSC</p>
          <span className={`text-xs ${categoryColor}`}>{category}</span>
        </div>
      </div>

      <div className="text-xs text-slate-500">
        {timestamp} · Block #{block}
      </div>
    </div>
  );
}
