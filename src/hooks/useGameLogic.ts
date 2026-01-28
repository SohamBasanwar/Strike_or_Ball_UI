import { useState, useCallback } from 'react';

export type GameState = 'onboarding' | 'playing' | 'feedback' | 'result' | 'summary';
export type Difficulty = 'easy' | 'medium' | 'hard';
export type PitchResult = 'strike' | 'ball';
export type FeedbackType = 'correct' | 'incorrect';

type Pitch = {
    x: number; // 0-100%
    y: number; // 0-100%
    isStrike: boolean;
};

export const useGameLogic = () => {
    const [gameState, setGameState] = useState < GameState > ('onboarding');
    const [difficulty, setDifficulty] = useState < Difficulty > ('medium');

    const [strikes, setStrikes] = useState(0);
    const [balls, setBalls] = useState(0);
    const [streak, setStreak] = useState(0);
    const [totalPitches, setTotalPitches] = useState(0);
    const [correctGuesses, setCorrectGuesses] = useState(0);
    const [bestStreak, setBestStreak] = useState(0);

    const [currentPitch, setCurrentPitch] = useState < Pitch | null > (null);
    const [showPitch, setShowPitch] = useState(false);
    const [feedback, setFeedback] = useState < { type: FeedbackType, message: string } | null > (null);
    const [result, setResult] = useState < 'out' | 'walk' | null > (null);

    // Constants for Strike Zone (assuming 15-85% is the box for now roughly, detailed logic below)
    // Our StrikeZone Grid is 3x3. The center is the only true "Strike" usually being the zone? 
    // Wait, standard baseball: anything over the plate (width) and between knees/chest (height).
    // In our visual, the StrikeZone component draws a box. 
    // Let's assume the box IS the strike zone. 
    // If the dot center is within the box, it's a strike.
    // Visual Box in component is a div.
    // Game logic: 
    // X: 0-100. Zone is roughly 15-85.
    // Y: 0-100. Zone is roughly 15-85.
    // Actually, let's keep it simple. 
    // Pitch generation:
    // Randomly start inside or outside based on some ratio.

    const [consecutiveWrong, setConsecutiveWrong] = useState(0);
    const [heatmap, setHeatmap] = useState < { [key: string]: number } > ({
        tl: 0, tr: 0, bl: 0, br: 0, out: 0
    });

    // Derived state for coach
    const showCoachHint = consecutiveWrong >= 2;

    const generatePitch = useCallback(() => {
        // ... (Existing generation logic, maybe tweaked for difficulty later)
        // For now, keep random logic but we can tune it based on 'difficulty' state if we want.
        // Implementation of 'Rookie' vs 'Pro' could affect how close to the line we get.

        // 50/50 Chance roughly
        const isStrike = Math.random() > 0.5;
        let x, y;

        // Difficulty tuning:
        // Easy: Stay away from edges.
        // Hard: Hug the edges.
        const margin = difficulty === 'easy' ? 10 : (difficulty === 'hard' ? 2 : 5); // variance from border

        if (isStrike) {
            // Strike Zone is 15-85. Center is 50,50. 
            // Safe zone inside: 20-80 usually.
            const min = 15 + margin;
            const max = 85 - margin;
            x = min + Math.random() * (max - min);
            y = min + Math.random() * (max - min);
        } else {
            // Outside
            // If Hard, we want "Borderline" balls.
            // If Easy, we want "Wild" balls.
            const side = Math.floor(Math.random() * 4);
            const wildness = difficulty === 'easy' ? 20 : 5; // How far out

            switch (side) {
                case 0: // Top
                    x = Math.random() * 100; y = 15 - Math.random() * wildness; break;
                case 1: // Bottom
                    x = Math.random() * 100; y = 85 + Math.random() * wildness; break;
                case 2: // Left
                    x = 15 - Math.random() * wildness; y = Math.random() * 100; break;
                case 3: // Right
                    x = 85 + Math.random() * wildness; y = Math.random() * 100; break;
                default: x = 0; y = 0;
            }
        }

        // Logic Re-check
        const isActuallyStrike = (x > 15 && x < 85) && (y > 15 && y < 85);

        setCurrentPitch({ x, y, isStrike: isActuallyStrike });
        setShowPitch(false);
        setTimeout(() => setShowPitch(true), 100);
    }, [difficulty]);

    const updateHeatmap = (pitch: Pitch) => {
        // Determine quadrant
        let region = 'out';
        if (pitch.isStrike) {
            const isTop = pitch.y < 50;
            const isLeft = pitch.x < 50;
            if (isTop && isLeft) region = 'tl';
            else if (isTop && !isLeft) region = 'tr';
            else if (!isTop && isLeft) region = 'bl';
            else region = 'br';
        }

        setHeatmap(prev => ({
            ...prev,
            [region]: prev[region] + 1
        }));
    };

    const startGame = (diff: Difficulty) => {
        setDifficulty(diff);
        setStrikes(0);
        setBalls(0);
        setStreak(0);
        setTotalPitches(0);
        setCorrectGuesses(0);
        setBestStreak(0);
        setResult(null);
        setGameState('playing');
        generatePitch();
    };

    const handleGuess = (guess: PitchResult) => {
        if (!currentPitch) return;

        setTotalPitches(p => p + 1);
        const correct = (guess === 'strike' && currentPitch.isStrike) ||
            (guess === 'ball' && !currentPitch.isStrike);

        if (correct) {
            setCorrectGuesses(prev => prev + 1);
            setConsecutiveWrong(0); // Reset coach trigger

            // Streak Logic
            setStreak(s => {
                const newStreak = s + 1;
                if (newStreak > bestStreak) setBestStreak(newStreak);

                // Adaptive Difficulty: Level up every 5 streaks if not already max
                if (newStreak % 5 === 0) {
                    if (difficulty === 'easy') setDifficulty('medium');
                    else if (difficulty === 'medium') setDifficulty('hard');
                }
                return newStreak;
            });

            setFeedback({ type: 'correct', message: 'Nice eye!' });
        } else {
            setStreak(0);
            setConsecutiveWrong(prev => prev + 1);

            // Track mistakes for heatmap
            updateHeatmap(currentPitch);

            setFeedback({
                type: 'incorrect',
                message: currentPitch.isStrike ? 'That was in the zone.' : 'That was outside.'
            });
        }

        setGameState('feedback');
    };

    // ... (rest of logic)

    // Ensure to update return signature


    const nextPitch = () => {
        // Process counters based on the ACTUAL pitch (baseball rules)
        // If it was a Strike, add Strike. If Ball, add Ball.
        // REGARDLESS of whether user guessed right?
        // User task: "Strike or Ball?" -> Teach logic.
        // Spec: "Teach: 3 strikes = OUT, 4 balls = WALK".
        // Usually in these learning games, if you get it WRONG, we assume we penalize or something.
        // But strictly, if the pitch WAS a strike, the counter increments strike.
        // Let's stick to: The Counter reflects the REALITY of the pitch, effectively simulating an umpire calling it.
        // If you guess WRONG, you just get negative feedback, but the game proceeds as if the pitch happened.

        if (currentPitch?.isStrike) {
            const newStrikes = strikes + 1;
            setStrikes(newStrikes);
            if (newStrikes >= 3) {
                setResult('out');
                setGameState('result');
                return;
            }
        } else {
            const newBalls = balls + 1;
            setBalls(newBalls);
            if (newBalls >= 4) {
                setResult('walk');
                setGameState('result');
                return;
            }
        }

        // Continue
        setFeedback(null);
        setGameState('playing');
        generatePitch();
    };

    const finishGame = () => {
        setGameState('summary');
    }

    const restartGame = () => {
        setGameState('onboarding');
    };

    return {
        gameState,
        difficulty,
        strikes,
        balls,
        streak,
        bestStreak,
        stats: { total: totalPitches, accuracy: totalPitches > 0 ? Math.round((correctGuesses / totalPitches) * 100) : 0 },
        currentPitch,
        showPitch,
        feedback,
        result,
        heatmap,
        showCoachHint,
        startGame,
        handleGuess,
        nextPitch,
        finishGame,
        restartGame
    };
};
