import { useGameLogic } from './hooks/useGameLogic';
import { OnboardingScreen } from './screens/OnboardingScreen';
import { GameScreen } from './screens/GameScreen';
import { ResultScreen } from './screens/ResultScreen';
import { SummaryScreen } from './screens/SummaryScreen';

function App() {
  const {
    gameState,
    strikes,
    balls,
    streak,
    bestStreak,
    stats,
    currentPitch,
    showPitch,
    feedback,
    result,
    heatmap,
    showCoachHint,
    difficulty,
    startGame,
    handleGuess,
    nextPitch,
    finishGame,
    restartGame
  } = useGameLogic();

  return (
    <div className="flex justify-center min-h-screen bg-slate-200 font-sans">
      <div className="w-full max-w-[390px] bg-slate-100 h-screen overflow-hidden relative shadow-2xl">

        {gameState === 'onboarding' && (
          <OnboardingScreen onStart={startGame} />
        )}

        {(gameState === 'playing' || gameState === 'feedback') && (
          <GameScreen
            strikes={strikes}
            balls={balls}
            streak={streak}
            difficulty={difficulty}
            currentPitch={currentPitch}
            showPitch={showPitch}
            onGuess={handleGuess}
            feedback={feedback}
            onNextPitch={nextPitch}
            showCoachHint={showCoachHint}
          />
        )}

        {gameState === 'result' && result && (
          <ResultScreen result={result} onContinue={finishGame} />
        )}


        {gameState === 'summary' && (
          <SummaryScreen stats={stats} bestStreak={bestStreak} heatmap={heatmap} onPlayAgain={restartGame} />
        )}

      </div>
    </div>
  );
}

export default App;
