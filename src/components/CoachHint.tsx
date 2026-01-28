import React from 'react';

type CoachHintProps = {
    message: string;
    visible: boolean;
};

export const CoachHint: React.FC<CoachHintProps> = ({ message, visible }) => {
    if (!visible) return null;

    return (
        <div className="absolute bottom-[160px] left-0 right-0 flex justify-center z-20 pointer-events-none animate-pop-in">
            <div className="bg-purple-600 text-white px-6 py-3 rounded-2xl shadow-xl max-w-[90%] relative">
                <div className="flex items-center gap-3">
                    <span className="text-2xl">💡</span>
                    <span className="font-bold text-sm leading-tight text-white">{message}</span>
                </div>
                {/* Arrow */}
                <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-4 h-4 bg-purple-600 rotate-45" />
            </div>
        </div>
    );
};
