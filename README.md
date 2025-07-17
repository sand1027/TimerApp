Timer App

A modern, responsive web application for creating and managing timers, with support for categories, history tracking, and light/dark mode theming. Built with React and Tailwind CSS, the app provides a clean and intuitive user interface for productivity and time management.
Table of Contents

Features
Technologies Used
Project Structure
Installation
Running the App
Usage
File and Data Storage
Contributing
License

Features

Timer Management: Create, start, pause, and reset timers with customizable names, durations, and categories.
Category Support: Organize timers into categories with bulk actions (start, pause, reset) for all timers in a category.
History Tracking: View a history of completed timers with timestamps.
Light/Dark Mode: Toggle between light and dark themes for better accessibility and user experience.
Responsive Design: Fully responsive layout that works on desktops, tablets, and mobile devices.
Alerts and Modals: Receive notifications for timer completion and halfway alerts (optional).
Export Functionality: Export timer history for record-keeping.

Technologies Used
The Timer App is built using the following tools and technologies:

React (v18.x): JavaScript library for building the user interface.
Tailwind CSS (v3.x): Utility-first CSS framework for styling, with dark mode support.
React Router (v6.x): For client-side routing to navigate between the main dashboard and history page.
Lucide React: Icon library for expandable/collapsible category sections (ChevronUp/ChevronDown).
Heroicons: SVG icons for buttons and labels, enhancing the UI.
Vite: Build tool and development server for fast development and optimized builds.
Node.js (v18.x or higher): JavaScript runtime for running the development server and managing dependencies.
npm: Package manager for installing dependencies.
Custom Hooks: useTimer, useCategories, and useTheme for managing state and logic.
Utility Functions: getCategories and groupTimersByCategory for timer organization.

Project Structure
The project is organized as follows:
timer-app/
├── public/
│   ├── index.html          # Main HTML file with React root
│   └── favicon.ico         # App favicon
├── src/
│   ├── components/
│   │   ├── CategorySection.jsx  # Component for displaying timers grouped by category
│   │   ├── HistoryList.jsx      # Component for displaying timer history
│   │   ├── Modal.jsx            # Component for timer completion modal
│   │   ├── TimerForm.jsx        # Component for adding new timers
│   │   ├── TimerItem.jsx        # Component for individual timer display
│   │   ├── ThemeToggle.jsx      # Component for toggling light/dark mode
│   │   └── ui/
│   │       ├── button.jsx       # Reusable Button component
│   │       ├── input.jsx        # Reusable Input component
│   │       ├── select.jsx       # Reusable Select component
│   │       ├── label.jsx        # Reusable Label component
│   │       ├── dialog.jsx       # Reusable Dialog component
│   │       └── progress.jsx     # Reusable Progress bar component
│   ├── hooks/
│   │   ├── useTimer.js         # Hook for timer logic (start, pause, reset, etc.)
│   │   ├── useCategories.js    # Hook for managing categories
│   │   └── useTheme.js         # Hook for theme switching
│   ├── utils/
│   │   └── timerUtils.js       # Utility functions for timer categorization
│   ├── App.jsx                 # Main app component with routing
│   ├── Home.jsx                # Main dashboard component
│   └── index.css               # Global CSS with Tailwind directives
├── package.json                # Project dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
├── vite.config.js              # Vite configuration
└── README.md                   # Project documentation

File and Data Storage

Timers: Managed in memory via the useTimer hook. Stored in the timers state as an array of objects with properties: id, name, duration, category, halfwayAlert, remaining, and status.
Categories: Managed via the useCategories hook, stored in the categories state as an array of strings.
History: Stored in the history state (via useTimer hook) as an array of completed timer objects with name and completionTime.
Theme: Managed via the useTheme hook, stored in the theme state as "light" or "dark". Persisted using local storage or similar mechanism (implementation depends on useTheme).
No Persistent Storage: The app currently stores data in memory (React state). For persistent storage, consider integrating with local storage or a backend API.

Installation
Follow these steps to set up the Timer App locally:
Prerequisites

Node.js: Version 18.x or higher. Install from nodejs.org.
npm: Comes with Node.js, but ensure it's updated (npm install -g npm).
Git: For cloning the repository. Install from git-scm.com.

Steps

Clone the Repository:
git clone https://github.com/your-username/timer-app.git
cd timer-app


Install Dependencies:
npm install

This installs all required packages, including:

react, react-dom
react-router-dom
tailwindcss, postcss, autoprefixer
lucide-react
vite


Set Up Tailwind CSS:Ensure tailwind.config.js is configured with:
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}

And src/index.css includes:
@tailwind base;
@tailwind components;
@tailwind utilities;


Verify Vite Configuration:Ensure vite.config.js is set up for React:
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});



Running the App

Start the Development Server:
npm run dev

This starts the Vite development server, typically at http://localhost:5173.

Build for Production:
npm run build

The production build is output to the dist/ folder.

Preview the Production Build:
npm run preview



Usage

Access the App:Open http://localhost:5173 in your browser after starting the development server.

Add a Timer:

On the left side of the dashboard, use the "Add New Timer" form.
Enter a timer name, duration (in seconds), select a category, and optionally enable a halfway alert.
Click "Add Timer" to create the timer.


Manage Categories:

On the right side, use the "Add New Category" form to create a new category.
Use the "Filter by Category" dropdown to view timers for a specific category or all categories.


Control Timers:

Each timer displays in its category section with "Start," "Pause," and "Reset" buttons.
Use bulk actions ("Start All," "Pause All," "Reset All") in each category section.


View History:

Click "View History" to see completed timers with timestamps.
Export history using the "Export History" button (implementation depends on onExport).


Toggle Theme:

Use the theme toggle button in the top-right corner to switch between light and dark modes.



File and Data Storage Details

State Management:

useTimer: Manages timers (timers, alerts, modal states) and provides functions like addTimer, startTimer, pauseTimer, etc.
useCategories: Manages the list of categories and provides addCategory.
useTheme: Manages the theme state and provides toggleTheme.


Temporary Storage:

All data (timers, categories, history) is stored in memory during the session.
Reloading the page resets the state unless persisted (e.g., via local storage or a backend).


Future Persistence:

To persist data, consider adding local storage in the useTimer and useCategories hooks:localStorage.setItem('timers', JSON.stringify(timers));
localStorage.setItem('categories', JSON.stringify(categories));


For a backend, integrate with an API (e.g., via fetch or axios) to store data in a database.



Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make changes and commit (git commit -m "Add your feature").
Push to your branch (git push origin feature/your-feature).
Open a pull request with a detailed description of your changes.

Please ensure code follows the project's ESLint and Prettier configurations (if set up).
License
This project is licensed under the MIT License. See the LICENSE file for details.
