import React from 'react';
import { Button } from './Button';

type FeedbackModalProps = {
    isOpen: boolean;
    type: 'correct' | 'incorrect';
    message: string;
    onNext: () => void;
};

export const FeedbackModal: React.FC<FeedbackModalProps> = ({
    isOpen,
    type,
    message,
    onNext
}) => {
    if (!isOpen) return null;

    const isCorrect = type === 'correct';

    return (
        <div className="absolute inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="w-full bg-white rounded-t-[32px] p-6 pb-10 shadow-2xl animate-pop-in mb-0 mx-2">
                <div className="flex flex-col items-center text-center space-y-4">

                    {/* Icon */}
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center ${isCorrect ? 'bg-success-green/10 text-success-green' : 'bg-warning-orange/10 text-warning-orange'}`}>
                        <span className="text-4xl">
                            {isCorrect ? '✓' : '👍'}
                        </span>
                    </div>

                    {/* Text */}
                    <div className="space-y-1">
                        <h2 className="text-2xl font-bold text-slate-900">
                            {isCorrect ? 'Great Call!' : 'Not Quite!'}
                        </h2>
                        <p className="text-lg font-medium text-slate-600 leading-tight">
                            {message}
                        </p>
                    </div>

                    {/* Action */}
                    <div className="w-full pt-4">
                        <Button onClick={onNext} variant="neutral" size="lg">
                            NEXT PITCH
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    );
};
