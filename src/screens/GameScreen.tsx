import React from 'react';
import { Button } from '../components/Button';
import { ScoreBoard } from '../components/ScoreBoard';
import { StrikeZone } from '../components/StrikeZone';
import { FeedbackModal } from '../components/FeedbackModal';
import { CoachHint } from '../components/CoachHint';

type GameScreenProps = {
    strikes: number;
    balls: number;
    streak: number;
    difficulty: string;
    currentPitch: { x: number; y: number } | null;
    showPitch: boolean;
    onGuess: (guess: 'strike' | 'ball') => void;
    feedback: { type: 'correct' | 'incorrect'; message: string } | null;
    onNextPitch: () => void;
    showCoachHint: boolean;
};

export const GameScreen: React.FC<GameScreenProps> = ({
    strikes,
    balls,
    streak,
    difficulty,
    currentPitch,
    showPitch,
    onGuess,
    feedback,
    onNextPitch,
    showCoachHint
}) => {
    return (
        <div className="flex flex-col h-full bg-slate-100 relative overflow-hidden">
            {/* Dynamic Background based on difficulty (optional subtle shift) */}

            {/* Top Bar with Difficulty Chip */}
            <div className="absolute top-4 left-4 z-10">
                <div className="bg-slate-900/5 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200/50">
                    <span className="text-xs font-black uppercase text-slate-500 tracking-wider">{difficulty}</span>
                </div>
            </div>

            {/* Top Bar */}
            <ScoreBoard strikes={strikes} balls={balls} streak={streak} />

            {/* Main Game Area */}
            <div className="flex-1 flex items-center justify-center p-4">
                <StrikeZone pitchLocation={currentPitch} showPitch={showPitch} />
            </div>

            {/* Coach Hint Overlay */}
            <CoachHint message="Hint: That looked a bit high!" visible={showCoachHint && !feedback} />

            {/* Controls */}
            <div className="p-6 pb-8 space-y-4 relative z-10">
                {/* Buttons Row */}
                <div className="flex gap-4">
                    <Button
                        onClick={() => onGuess('ball')}
                        variant="ball"
                        className="flex-1"
                        disabled={!!feedback || !showPitch} // Disable if feedback showing or pitch not shown
                    >
                        BALL
                    </Button>
                    <Button
                        onClick={() => onGuess('strike')}
                        variant="strike"
                        className="flex-1"
                        disabled={!!feedback || !showPitch}
                    >
                        STRIKE
                    </Button>
                </div>
            </div>

            {/* Feedback Modal Overlay */}
            <FeedbackModal
                isOpen={!!feedback}
                type={feedback?.type || 'correct'} // Default to correct to avoid type error if null
                message={feedback?.message || ''}
                onNext={onNextPitch}
            />
        </div>
    );
};
