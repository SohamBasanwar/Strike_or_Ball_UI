import React from 'react';
import { Button } from '../components/Button';

import { Heatmap } from '../components/Heatmap';

type SummaryScreenProps = {
    stats: { accuracy: number; total: number };
    bestStreak: number;
    heatmap: { [key: string]: number };
    onPlayAgain: () => void;
};

export const SummaryScreen: React.FC<SummaryScreenProps> = ({ stats, bestStreak, heatmap, onPlayAgain }) => {
    return (
        <div className="flex flex-col h-full bg-slate-100 p-6 overflow-y-auto">
            <div className="flex-1 flex flex-col items-center space-y-6 w-full pt-4">
                <h1 className="text-3xl font-black text-slate-900">GAME OVER</h1>

                <div className="w-full bg-white rounded-3xl p-6 shadow-card space-y-6">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                        <span className="text-slate-500 font-bold">Accuracy</span>
                        <span className="text-2xl font-black text-slate-900">{stats.accuracy}%</span>
                    </div>

                    <Heatmap data={heatmap} />

                    <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                        <span className="text-slate-500 font-bold">Best Streak</span>
                        <span className="text-2xl font-black text-focus-yellow">{bestStreak} 🔥</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-slate-500 font-bold">Total Pitches</span>
                        <span className="text-2xl font-black text-slate-900">{stats.total}</span>
                    </div>
                </div>
            </div>

            <div className="mt-auto space-y-4">
                <Button onClick={onPlayAgain} variant="strike">
                    PLAY AGAIN
                </Button>
            </div>
        </div>
    );
};
