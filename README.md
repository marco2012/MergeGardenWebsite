# Merge Garden Website

A beautiful, responsive website for the Merge Garden mobile game, built with React and Tailwind CSS.

## Features

-   🎮 **Game Showcase**: Beautiful screenshots and gameplay video
-   📱 **Mobile-First Design**: Responsive design that works on all devices
-   ⚡ **Smooth Animations**: Custom CSS animations and transitions
-   🎨 **Modern UI**: Dark theme with green accent colors
-   📄 **Privacy Policy**: Complete privacy policy page
-   🔗 **App Store Links**: Direct links to download the game

## Tech Stack

-   **React 19**: Modern React with hooks
-   **React Router**: Client-side routing
-   **Tailwind CSS**: Utility-first CSS framework
-   **Custom Animations**: CSS keyframes and transitions

## Getting Started

### Prerequisites

-   Node.js (v14 or higher)
-   npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd merge-garden-website
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

-   `npm start` - Runs the app in development mode
-   `npm run build` - Builds the app for production
-   `npm test` - Launches the test runner
-   `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── Home.js          # Main landing page
│   └── Privacy.js       # Privacy policy page
├── App.js               # Main app component with routing
├── index.js             # App entry point
└── index.css            # Global styles with Tailwind
```

## Customization

### Colors

The website uses a custom color palette defined in `tailwind.config.js`:

-   Background: `#0a0a0a` (dark)
-   Foreground: `#ededed` (light text)
-   Primary: `#2d5a2d` (green)
-   Secondary: `#34c759` (bright green)
-   Accent: `#ff9500` (orange)

### Animations

Custom animations are defined in the Tailwind config:

-   `fade-in-up`: Fade in from bottom
-   `fade-in-left`: Fade in from left
-   `fade-in-right`: Fade in from right
-   `float`: Gentle floating animation
-   `pulse-glow`: Glowing pulse effect

## Deployment

The website can be deployed to any static hosting service:

1. Build the project:

```bash
npm run build
```

2. Deploy the `build` folder to your hosting service.

## Contact

For questions about the Merge Garden game, contact: pingponggamesstudio@gmail.com
