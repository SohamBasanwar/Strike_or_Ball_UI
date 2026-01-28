# ⚾ Strike or Ball? - Mini Game

> A mobile-first interactive mini-game designed to teach kids (8-13) the rules of the Baseball Strike Zone.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-19-61DAFB.svg?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF.svg?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38B2AC.svg?logo=tailwindcss&logoColor=white)

## 🎮 Overview

"Strike or Ball?" is an engaging educational game where players act as the umpire. The goal is simple: Watch the pitch and correctly call it a **STRIKE** or a **BALL**. The game uses adaptive difficulty and visual feedback to help players master the strike zone concept.

## ✨ Key Features

*   **Core Umpire Loop**: Realistic 3-Strikes (OUT) and 4-Balls (WALK) logic.
*   **Adaptive Difficulty**:
    *   **Rookie**: Slower pitches, larger zone.
    *   **Pro**: Standard zone.
    *   **All-Star**: Unlocks automatically after a 5-streak. Tighter margins & faster gameplay.
*   **Rule Packs 📜**: Switch between different rule sets (e.g., Baseball, Softball, Kickball) to keep the game fresh and versatile.
*   **Coach Mode 💡**: Intelligent hints appear when a player struggles (2 consecutive errors), offering visual corrections.
*   **Heatmap Analytics 📊**: Post-game summary shows a spatial grid of where the player missed calls, aimed at self-correction.
*   **Accessibility First**: High-contrast support, large touch targets (48px+), and color-blind friendly design (Shape + Color coding).
*   **PWA Ready**: Includes web manifest for installation on mobile devices.

## 🚀 Getting Started

### Prerequisites
*   Node.js (v18 or higher recommended)
*   npm

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/SohamBasanwar/Strike_or_Ball_UI.git
    cd Strike_or_Ball_UI
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
src/
├── components/      # UI Building blocks
│   ├── Button.tsx       # Tactile game buttons
│   ├── StrikeZone.tsx   # Visual zone + Pitch rendering
│   ├── ScoreBoard.tsx   # Live score and stats display
│   ├── PackSelector.tsx # Rule pack selection carousel
│   ├── FeedbackModal.tsx# Visual feedback for calls
│   ├── Heatmap.tsx      # Analytics grid
│   └── CoachHint.tsx    # Intelligent tooltip
├── screens/         # Full-page views
│   ├── OnboardingScreen # Difficulty & Pack select
│   ├── GameScreen       # Main gameplay loop
│   ├── ResultScreen.tsx # Instant call result feedback
│   └── SummaryScreen    # Post-game stats
├── hooks/           # Logic
│   └── useGameLogic.ts  # Core engine (State machine, Generative pitch logic)
└── assets/          # Static files
```

## 🎨 Design System

The UI is built with a custom **Kids-First** design system using Tailwind CSS:
*   **Typography**: 'Outfit' (Google Fonts) - Geometric, friendly, and legible.
*   **Colors**: High-saturation Primary Red/Blue for clear feedback, paired with Slate-900 for text.
*   **Anim**: Custom `pop-in` and `ping-once` animations for juicy game feel.

## 🛠️ Tech Stack

*   **Framework**: React 19 + TypeScript
*   **Build Tool**: Vite
*   **Styling**: Tailwind CSS v3
*   **Icons**: SVG Icons (Lucide/Heroicons style)

---
*Soham Basanwar - 2026* 
