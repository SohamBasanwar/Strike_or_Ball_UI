import React from 'react';

export const PackSelector: React.FC = () => {
    return (
        <div className="w-full max-w-xs bg-white rounded-xl p-3 shadow-sm border border-slate-200 flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-xl">
                    ⚾️
                </div>
                <div className="text-left">
                    <p className="text-xs font-bold text-slate-400 uppercase">Current Pack</p>
                    <p className="font-bold text-slate-900">Baseball: Strike Zone</p>
                </div>
            </div>
            <button className="text-slate-400 hover:text-blue-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
            </button>
        </div>
    );
};
