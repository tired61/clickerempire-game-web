# Clicker Empire

A web-based clicker game where players earn money by clicking, invest in opportunities, and build businesses to generate passive income.

## Features

- **Click to Earn**: Click the button to generate money
- **Investments**: Purchase investment opportunities that generate daily returns
- **Businesses**: Start businesses that generate hourly income
- **Hourly Bonus**: Receive random bonuses every UTC hour
- **Persistent Save**: Game state is automatically saved to local storage
- **Mobile Ready**: Fully responsive design for web and mobile conversion

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The game will open at `http://localhost:5173`

### Build

```bash
npm run build
```

## Game Mechanics

### Money Page
- Click the "Generate Money" button to earn $1 per click
- View your current balance and total earnings
- Track your click count

### Investments
- Purchase investment opportunities with your money
- Each investment generates daily returns
- Different risk levels affect potential returns
- Refresh to see new investment opportunities

### Businesses
- Start businesses to generate hourly income
- Each business has a startup cost and hourly income rate
- View total hourly income from all businesses
- Businesses can be upgraded (future feature)

### Owner Profile
- View complete portfolio overview
- Track net worth (money + investments + businesses)
- See passive income statistics
- Monitor total clicks and investments

## Technology Stack

- **React 18**: UI framework
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Styling
- **JavaScript ES6+**: Core logic

## File Structure

```
src/
├── components/
│   ├── Header.jsx
│   └── Navigation.jsx
├── pages/
│   ├── MoneyPage.jsx
│   ├── InvestmentsPage.jsx
│   ├── BusinessesPage.jsx
│   └── OwnerPage.jsx
├── utils/
│   ├── gameState.js
│   └── generators.js
├── App.jsx
├── main.jsx
└── index.css
```

## Future Enhancements

- Business upgrades and leveling
- Investment portfolio management
- Leaderboards
- Achievements and badges
- Sound effects and animations
- Offline income calculation
- Cloud save support
- Mobile app version

## License

MIT
