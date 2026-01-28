import React from 'react';

type StrikeZoneProps = {
    pitchLocation?: { x: number; y: number } | null; // 0-100 coordinates
    showPitch: boolean;
    isCorrect?: boolean; // For visualizing feedback directly on zone if needed
};

export const StrikeZone: React.FC<StrikeZoneProps> = ({ pitchLocation, showPitch }) => {
    // Strike Zone is technically the area over home plate.
    // We represent it as a box. 
    // 0,0 is top-left, 100,100 is bottom-right.

    return (
        <div className="relative w-64 h-80 bg-white rounded-2xl shadow-card border-4 border-slate-200 overflow-hidden box-content mx-auto">
            {/* Grid Lines */}
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none">
                {/* Vertical Lines */}
                <div className="border-r-2 border-dashed border-slate-300/50 h-full col-start-1" />
                <div className="border-r-2 border-dashed border-slate-300/50 h-full col-start-2" />
                {/* Horizontal Lines */}
                <div className="border-b-2 border-dashed border-slate-300/50 w-full row-start-1 col-span-3" />
                <div className="border-b-2 border-dashed border-slate-300/50 w-full row-start-2 col-span-3" />
            </div>

            {/* Strike Zone Border Highlight (Inner) */}
            <div className="absolute inset-0 border-4 border-slate-300/30 rounded-lg pointer-events-none" />

            {/* Pitch Dot */}
            {showPitch && pitchLocation && (
                <div
                    className="absolute w-8 h-8 rounded-full bg-slate-900 border-4 border-white shadow-xl transition-all duration-300 ease-out animate-ping-once"
                    style={{
                        left: `${pitchLocation.x}%`,
                        top: `${pitchLocation.y}%`,
                        transform: 'translate(-50%, -50%)'
                    }}
                />
            )}
        </div>
    );
};
