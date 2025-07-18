# Saudi U-19 Scout

A modern, AI-powered scouting prototype for discovering Saudi Arabia's next football stars. Built with React and Tailwind CSS, this app showcases player profiles, advanced search/filtering, and a beautiful, investor-ready UI.

## Features

- **Modern UI:** Green header with trophy/star icons, bold app name, subtitle, and compliance badge.
- **Hero Section:** Large headline and description introducing the platform.
- **Search & Filter:**
  - Player name search
  - Position dropdown
  - Age range slider
  - Minimum AI potential slider
- **Player Cards:**
  - Real and random Saudi footballer images
  - Club, position, age, goals, assists, height, weight, strengths, matches played
  - **Prominent AI Potential badge** (green, top-right)
  - "Watch Highlights" button
- **Responsive:** Looks great on desktop and mobile
- **No backend:** All data is static and demo-ready

## AI Functionality

### In This Demo

- **AI Potential Score:** Each player card displays an "AI Potential" score (out of 100) as a prominent badge. In this demo, these scores are hardcoded in the data to simulate what an AI model might predict.
- **Key Strengths:** Player strengths are also mocked, but demonstrate how AI could highlight a player's best attributes.

### In a Real Product

- **AI Potential Prediction:** A machine learning model would analyze player stats, match performance, and historical data to predict a player's future potential or value. The model could consider:
  - Goals, assists, physical stats, match ratings, and trends over time
  - Comparison to similar players at the same age
- **Automated Insights:** Natural Language Processing (NLP) could generate custom insights, such as "This player excels at dribbling and pace, making him a threat on the wing."
- **Video Analysis:** Computer vision models could analyze match footage to tag highlights, generate heatmaps, and rate technical skills.
- **Player Recommendations:** AI could suggest similar players based on playing style, stats, or video analysis.
- **Injury Risk & Fitness Prediction:** Predict injury risk or optimal training loads based on match data and physical stats.

### How It Would Work

- **Backend AI Service:** A backend service (Python, Node.js, etc.) would run ML models.
- **Data Pipeline:** Player stats, match data, and video are fed into the models.
- **API:** The frontend (this React app) would call an API to get AI-generated scores, insights, and recommendations.
- **Continuous Learning:** The models improve as more data is collected.

## Screenshots

![App Screenshot](Screenshot (1194).png)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Customization

- Edit `src/data/players.json` to update player data, images, and stats.
- Tweak styles in `src/components/` for further UI changes.

## Limitations

- No backend, database, or real AI (all AI features are mocked for demo)
- No video uploads (YouTube links only)
- Static demo for showcase only

---

**Built for investor demo purposes.**
