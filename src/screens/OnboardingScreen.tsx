import React, { useState } from 'react';
import { Button } from '../components/Button';
import type { Difficulty } from '../hooks/useGameLogic';
import { PackSelector } from '../components/PackSelector';

type OnboardingScreenProps = {
    onStart: (difficulty: Difficulty) => void;
};

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onStart }) => {
    const [selectedDiff, setSelectedDiff] = useState<Difficulty>('medium');

    return (
        <div className="flex flex-col h-full bg-slate-100 p-6">
            <div className="flex-1 flex flex-col items-center justify-center space-y-8">
                <div className="space-y-2 text-center">
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight">
                        STRIKE<br />OR BALL?
                    </h1>
                    <p className="text-slate-600 font-medium">Learn the zone. Calls the shots.</p>
                </div>

                <PackSelector />

                {/* Illustration Placeholder */}
                <div className="w-48 h-48 bg-white rounded-full shadow-card flex items-center justify-center text-6xl border-4 border-slate-200">
                    ⚾️
                </div>

                <div className="w-full max-w-xs space-y-4">
                    <p className="text-center font-bold text-slate-400 uppercase tracking-widest text-sm">Select Difficulty</p>
                    <div className="flex bg-white p-1 rounded-xl shadow-sm border border-slate-200">
                        {(['easy', 'medium', 'hard'] as Difficulty[]).map((diff) => (
                            <button
                                key={diff}
                                onClick={() => setSelectedDiff(diff)}
                                className={`flex-1 py-3 rounded-lg font-bold text-sm capitalize transition-all ${selectedDiff === diff
                                    ? 'bg-slate-900 text-white shadow-md'
                                    : 'text-slate-500 hover:bg-slate-50'
                                    }`}
                            >
                                {diff}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-auto pt-8">
                <Button onClick={() => onStart(selectedDiff)} variant="strike">
                    PLAY BALL!
                </Button>
            </div>
        </div>
    );
};
