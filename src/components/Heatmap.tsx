import React from 'react';

type HeatmapProps = {
    data: { [key: string]: number };
};

export const Heatmap: React.FC<HeatmapProps> = ({ data }) => {
    // Max value to normalize opacity
    const max = Math.max(...Object.values(data), 1);

    const getOpacity = (val: number) => Math.min((val / max) * 0.8 + 0.1, 0.9);

    return (
        <div className="flex flex-col items-center space-y-2">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Missed Call Heatmap</h3>
            <div className="relative w-48 h-60 bg-white border-4 border-slate-300 rounded-xl overflow-hidden shadow-inner">
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                    {['tl', 'tr', 'bl', 'br'].map(region => {
                        const intensity = data[region] || 0;
                        return (
                            <div
                                key={region}
                                className="relative flex items-center justify-center border border-slate-200 transition-all duration-500"
                                style={{
                                    backgroundColor: intensity > 0 ? `rgba(239, 68, 68, ${getOpacity(intensity)})` : 'transparent'
                                }}
                            >
                                {intensity > 0 && <span className="text-xs font-bold text-white shadow-sm drop-shadow-md">{intensity}</span>}
                            </div>
                        );
                    })}
                </div>

                {/* Central "+" grid line */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-400/30 -ml-[1px]" />
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-400/30 -mt-[1px]" />
                </div>
            </div>

            {data.out > 0 && (
                <div className="text-xs font-bold text-slate-400">
                    + {data.out} misses outside the zone
                </div>
            )}
        </div>
    );
};
