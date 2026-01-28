import React from 'react';

type ScoreBoardProps = {
    strikes: number; // 0-3
    balls: number; // 0-4
    streak: number;
};

export const ScoreBoard: React.FC<ScoreBoardProps> = ({ strikes, balls, streak }) => {
    return (
        <div className="w-full px-6 py-4 flex flex-col gap-3">
            {/* Top Row: Streak & Pause (Placeholder) */}
            <div className="flex justify-between items-center">
                <button className="text-slate-400 p-2 -ml-2 hover:bg-slate-200 rounded-full transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="6" y="4" width="4" height="16"></rect>
                        <rect x="14" y="4" width="4" height="16"></rect>
                    </svg>
                </button>

                {streak > 0 && (
                    <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full shadow-sm border border-slate-100 animate-pop-in">
                        <span className="text-lg">🔥</span>
                        <span className="font-bold text-slate-900">{streak}</span>
                    </div>
                )}
            </div>

            {/* Counters Row */}
            <div className="flex items-center justify-center gap-8">
                {/* Strikes */}
                <div className="flex flex-col items-center gap-1">
                    <span className="text-xs font-bold text-slate-400 tracking-wider">STRIKES</span>
                    <div className="flex gap-2">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={`strike-${i}`}
                                className={`w-4 h-4 rounded-full border-[3px] transition-all duration-300 ${i < strikes
                                        ? 'bg-primary-red border-primary-red shadow-[0_0_8px_rgba(239,68,68,0.5)] scale-110'
                                        : 'bg-transparent border-slate-300'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Balls */}
                <div className="flex flex-col items-center gap-1">
                    <span className="text-xs font-bold text-slate-400 tracking-wider">BALLS</span>
                    <div className="flex gap-2">
                        {[...Array(4)].map((_, i) => (
                            <div
                                key={`ball-${i}`}
                                className={`w-4 h-4 rounded-full border-[3px] transition-all duration-300 ${i < balls
                                        ? 'bg-primary-blue border-primary-blue shadow-[0_0_8px_rgba(59,130,246,0.5)] scale-110'
                                        : 'bg-transparent border-slate-300'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
