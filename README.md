# Timer App

A modern, responsive web application for creating and managing timers, with support for categories, history tracking, and light/dark mode theming. Built with React and Tailwind CSS, the app provides a clean and intuitive user interface for productivity and time management.

## Table of Contents

* [Features](#features)
* [Technologies Used](#technologies-used)
* [Project Structure](#project-structure)
* [Installation](#installation)
* [Running the App](#running-the-app)
* [Usage](#usage)
* [File and Data Storage](#file-and-data-storage)
* [Contributing](#contributing)
* [License](#license)

## Features

* **Timer Management**: Create, start, pause, and reset timers with customizable names, durations, and categories.
* **Category Support**: Organize timers into categories with bulk actions (start, pause, reset) for all timers in a category.
* **History Tracking**: View a history of completed timers with timestamps.
* **Light/Dark Mode**: Toggle between light and dark themes for better accessibility and user experience.
* **Responsive Design**: Fully responsive layout that works on desktops, tablets, and mobile devices.
* **Alerts and Modals**: Receive notifications for timer completion and halfway alerts (optional).
* **Export Functionality**: Export timer history for record-keeping.

## Technologies Used

* **React (v18.x)**: JavaScript library for building the user interface.
* **Tailwind CSS (v3.x)**: Utility-first CSS framework with dark mode support.
* **React Router (v6.x)**: Client-side routing for navigating between views.
* **Lucide React**: Icon library for expandable/collapsible sections.
* **Heroicons**: SVG icons for buttons and UI elements.
* **Vite**: Development server and build tool.
* **Node.js (v18.x or higher)**: JavaScript runtime.
* **npm**: Package manager.
* **Custom Hooks**: `useTimer`, `useCategories`, `useTheme`.
* **Utility Functions**: `getCategories`, `groupTimersByCategory`.

## Project Structure

```
timer-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── CategorySection.jsx
│   │   ├── HistoryList.jsx
│   │   ├── Modal.jsx
│   │   ├── TimerForm.jsx
│   │   ├── TimerItem.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── ui/
│   │       ├── button.jsx
│   │       ├── input.jsx
│   │       ├── select.jsx
│   │       ├── label.jsx
│   │       ├── dialog.jsx
│   │       └── progress.jsx
│   ├── hooks/
│   │   ├── useTimer.js
│   │   ├── useCategories.js
│   │   └── useTheme.js
│   ├── utils/
│   │   └── timerUtils.js
│   ├── App.jsx
│   ├── Home.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Installation

### Prerequisites

* Node.js v18.x or higher
* npm (latest)
* Git

### Steps

1. Clone the repository:

```bash
git clone https://github.com/your-username/timer-app.git
cd timer-app
```

2. Install dependencies:

```bash
npm install
```

3. Ensure Tailwind CSS is configured in `tailwind.config.js`:

```js
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. Add Tailwind directives to `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Verify Vite setup in `vite.config.js`:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});

```

6. Add `jsconfig.json`:

```js
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@/*": ["./*"]
    }
  }
}


```

## Running the App

### Start Development Server

```bash
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Usage

### Add a Timer

* Use the form to enter name, duration (seconds), category, and optional halfway alert.
* Click **Add Timer**.

### Manage Categories

* Add new categories via the form.
* Filter timers by category using the dropdown.

### Control Timers

* Start, pause, or reset timers individually.
* Use bulk actions per category.

### View History

* Click **View History** to view completed timers.
* Export timer history (if implemented).

### Toggle Theme

* Click the theme toggle button to switch light/dark modes.

## File and Data Storage

### State Management

* `useTimer`: Manages timers and provides all control functions.
* `useCategories`: Manages category list.
* `useTheme`: Toggles light/dark mode.

### Temporary Storage

* Data is stored in memory during session.
* Reloading the page resets state.

### Persistence (Future)

* To persist data:

```js
localStorage.setItem('timers', JSON.stringify(timers));
localStorage.setItem('categories', JSON.stringify(categories));
```

* Or integrate with a backend via API (e.g., `fetch`, `axios`).

## Contributing

1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit: `git commit -m "Add your feature"`
4. Push: `git push origin feature/your-feature`
5. Open a pull request with description

Ensure code matches ESLint/Prettier configuration (if set).


