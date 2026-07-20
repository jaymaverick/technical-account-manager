import React, { useState, useEffect } from 'react';
import { ShieldAlert, MailWarning, LayoutDashboard, Search, HelpCircle, DollarSign } from 'lucide-react';
import mockData from '@site/static/data.json';

function App() {
    const [creators, setCreators] = useState(mockData);
    const [searchTerm, setSearchTerm] = useState('');

    // Aggregate metrics calculations
    const totalPortfolioGMV = creators.reduce((sum, c) => sum + c.weekly_gmv_usd, 0);
    const criticalAlertsCount = creators.filter(c => c.health_score < 60 || c.ssl_expiry_days < 7 || c.email_spam_rate > 0.1).length;
    const avgHealthScore = Math.round(creators.reduce((sum, c) => sum + c.health_score, 0) / creators.length);

    const filteredCreators = creators.filter(c =>
    c.creator_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-950 p-8 text-gray-100">
        <div className="mx-auto max-w-6xl space-y-8">

        {/* Brand Header */}
        <div className="flex justify-between items-start">
        <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Enterprise TAM Dashboard</h1>
        <p className="text-sm text-gray-400 mt-1">Creator Infrastructure, Checkout Health, and Deliverability Command Center.</p>
        </div>
        <span className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-3 py-1 rounded-md text-xs font-mono">
        Kajabi Core Engine
        </span>
        </div>

        {/* Executive Portfolio Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-gray-800 bg-gray-900 p-5">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Weekly Managed GMV</span>
        <div className="mt-2 text-2xl font-bold text-white">${totalPortfolioGMV.toLocaleString()}</div>
        </div>
        <div className="rounded-lg border border-gray-800 bg-gray-900 p-5">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Portfolio Health Average</span>
        <div className="mt-2 text-2xl font-bold text-blue-400">{avgHealthScore}%</div>
        </div>
        <div className="rounded-lg border border-gray-800 bg-gray-900 p-5 ring-1 ring-amber-500/30">
        <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Active Infrastructure Alerts</span>
        <div className="mt-2 text-2xl font-bold text-amber-500">{criticalAlertsCount}</div>
        </div>
        </div>

        {/* Infrastructure & Signal Feed */}
        <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
        <h2 className="text-base font-semibold text-white mb-4">Urgent Infrastructure Signals</h2>
        <div className="space-y-3">
        {creators.map(c => {
            const elements = [];

            if (c.checkout_error_rate > 0.01) {
                elements.push(
                    <div key={`${c.account_id}-checkout`} className="flex items-center justify-between rounded-md bg-red-950/20 p-4 border border-red-900/30">
                    <div className="flex items-center space-x-3">
                    <ShieldAlert className="h-5 w-5 text-red-500 shrink-0" />
                    <div>
                    <div className="font-semibold text-white">{c.creator_name}</div>
                    <div className="text-xs text-gray-400">Checkout errors peaked at {(c.checkout_error_rate * 100).toFixed(1)}%. Revenue drop detected (-{Math.round((1 - c.gmv_trend_7d) * 100)}% GMV velocity).</div>
                    </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-red-400 bg-red-900/30 px-2 py-1 rounded">Transaction Failure</span>
                    </div>
                );
            }

            if (c.email_spam_rate > 0.1) {
                elements.push(
                    <div key={`${c.account_id}-spam`} className="flex items-center justify-between rounded-md bg-amber-950/20 p-4 border border-amber-900/30">
                    <div className="flex items-center space-x-3">
                    <MailWarning className="h-5 w-5 text-amber-500 shrink-0" />
                    <div>
                    <div className="font-semibold text-white">{c.creator_name}</div>
                    <div className="text-xs text-gray-400">Marketing Broadcast Spam Complaint rate hit {c.email_spam_rate}%. Dedicated IP reputation drop risk.</div>
                    </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-amber-400 bg-amber-900/30 px-2 py-1 rounded">Email Risk</span>
                    </div>
                );
            }

            if (c.ssl_expiry_days <= 7) {
                elements.push(
                    <div key={`${c.account_id}-ssl`} className="flex items-center justify-between rounded-md bg-red-950/20 p-4 border border-red-900/30">
                    <div className="flex items-center space-x-3">
                    <ShieldAlert className="h-5 w-5 text-red-500 shrink-0" />
                    <div>
                    <div className="font-semibold text-white">{c.creator_name}</div>
                    <div className="text-xs text-gray-400">Custom gateway domain SSL certificate expires in {c.ssl_expiry_days} day(s). Auto-renewal failing.</div>
                    </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-red-400 bg-red-900/30 px-2 py-1 rounded">Domain Offline Risk</span>
                    </div>
                );
            }

            return elements;
        })}
        </div>
        </div>

        {/* Main Managed Accounts Ledger Table */}
        <div className="rounded-lg border border-gray-800 bg-gray-900 overflow-hidden">
        <div className="p-5 border-b border-gray-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-base font-semibold text-white">Managed Accounts Ledger</h2>
        <div className="relative">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
        <input
        type="text"
        placeholder="Search accounts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full sm:w-64 rounded-md border border-gray-800 bg-gray-950 py-2 pl-10 pr-4 text-sm text-gray-300 placeholder-gray-500 focus:border-blue-500 focus:outline-none"
        />
        </div>
        </div>
        <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-400">
        <thead className="bg-gray-950 text-xs uppercase tracking-wider text-gray-500 border-b border-gray-800">
        <tr>
        <th className="px-6 py-4">Creator / Business</th>
        <th className="px-6 py-4">Weekly GMV</th>
        <th className="px-6 py-4">Checkout Success</th>
        <th className="px-6 py-4">Video Health</th>
        <th className="px-6 py-4">Email Spam</th>
        <th className="px-6 py-4">Composite Health</th>
        </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
        {filteredCreators.map((c) => (
            <tr key={c.account_id} className="hover:bg-gray-850/30 transition-colors">
            <td className="px-6 py-4 font-medium text-white">{c.creator_name}</td>
            <td className="px-6 py-4">
            <div>${c.weekly_gmv_usd.toLocaleString()}</div>
            <div className={`text-xs mt-0.5 ${c.gmv_trend_7d >= 1.0 ? 'text-emerald-400' : 'text-red-400'}`}>
            {c.gmv_trend_7d >= 1.0 ? '+' : ''}{Math.round((c.gmv_trend_7d - 1) * 100)}% velocity
            </div>
            </td>
            <td className="px-6 py-4 font-mono">{(100 - c.checkout_error_rate * 100).toFixed(2)}%</td>
            <td className="px-6 py-4 font-mono">{(100 - c.video_failure_rate * 100).toFixed(2)}%</td>
            <td className={`px-6 py-4 font-mono ${c.email_spam_rate > 0.1 ? 'text-amber-400 font-bold' : ''}`}>
            {c.email_spam_rate}%
            </td>
            <td className="px-6 py-4">
            <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                c.health_score > 75 ? 'bg-emerald-500/10 text-emerald-400' :
                c.health_score > 50 ? 'bg-amber-500/10 text-amber-400' :
                'bg-red-500/10 text-red-400'
            }`}>
            {c.health_score}%
            </span>
            </td>
            </tr>
        ))}
        </tbody>
        </table>
        </div>
        </div>

        </div>
        </div>
    );
}

export default App;
