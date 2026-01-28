import React from 'react';
import { Button } from '../components/Button';

type ResultScreenProps = {
    result: 'out' | 'walk';
    onContinue: () => void;
};

export const ResultScreen: React.FC<ResultScreenProps> = ({ result, onContinue }) => {
    const isOut = result === 'out';

    return (
        <div className={`flex flex-col h-full p-6 animate-in fade-in duration-500 ${isOut ? 'bg-primary-red' : 'bg-primary-blue'}`}>
            <div className="flex-1 flex flex-col items-center justify-center space-y-6 text-center">

                <div className="text-9xl animate-pop-in filter drop-shadow-md">
                    {isOut ? '👊' : '👉'}
                </div>

                <h1 className="text-6xl font-black text-white tracking-tighter uppercase drop-shadow-sm">
                    {isOut ? "YOU'RE OUT!" : "WALK!"}
                </h1>

                <p className="text-white/80 text-xl font-bold">
                    {isOut ? "Three strikes. Take a seat." : "Ball four. Take your base."}
                </p>

            </div>

            <div className="mt-auto">
                <Button onClick={onContinue} variant="neutral" className="border-none shadow-xl">
                    CONTINUE
                </Button>
            </div>
        </div>
    );
};
