# Whitepace Landing Page

Welcome to the **Whitepace** landing page! This project is a pixel-perfect, responsive, and beautifully animated SaaS landing page built with modern web technologies.

## 🚀 Live Demo Let's Go

Since this is a Vite-powered React project, you can easily run it locally by following the Quick Start guide below.

## 🛠️ Built With

*   [React.js](https://reactjs.org/) - The core frontend framework.
*   [Vite](https://vitejs.dev/) - A blazingly fast build tool and development server.
*   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development and styling.
*   [Framer Motion](https://www.framer.com/motion/) - For smooth, physics-based animations and scroll effects.
*   [Lucide React](https://lucide.dev/) - Beautiful and consistent iconography.

## ✨ Features

*   **Pixel-Perfect Design:** Faithfully recreated a premium SaaS landing page aesthetic with exact layout and spacing.
*   **Fully Responsive:** Carefully crafted to look excellent on desktops, tablets, and mobile devices.
*   **Smooth Animations:** Utilizes Framer Motion for scroll-triggered sections, floating visual elements, and hover micro-interactions.
*   **Real-world Assets:** Integrated with high-quality, professional photography sourced from Unsplash to give a live, production-ready feel.
*   **Smooth Scrolling Navigation:** Easy one-page navigation connecting the header links directly to corresponding sections.

## 📂 Project Structure

The project is structured logically for easy maintenance and scalability:

```text
whitepace-landing/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components (Hero, Pricing, Testimonials, etc.)
│   ├── App.jsx             # Main application layout and component assembly
│   ├── index.css           # Global stylesheet containing Tailwind directives & theme variables
│   └── main.jsx            # Entry point of the React application
├── .gitignore
├── index.html              # HTML template
├── package.json            # Project dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration and theme extensions
└── vite.config.js          # Vite configuration
```

## 🏁 Quick Start

To get this project running on your local machine, follow these steps:

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Mustafashafi/Landing_page-1-.git
    cd Landing_page-1-
    ```
    *(Note: If you downloaded this in a specific folder structure, make sure you enter the `whitepace-landing` folder where `package.json` resides).*

2.  **Install dependencies:**

    ```bash
    npm install
    ```

### Running the Development Server

Start the local Vite development server:

```bash
npm run dev
```

The application will be accessible in your browser at `http://localhost:3000` (or another port if 3000 is taken, Vite will let you know in the terminal).

### Building for Production

To create an optimized production build:

```bash
npm run build
```

This will generate a `dist` folder containing the compiled, minified, and production-ready assets.

You can preview the production build locally:

```bash
npm run preview
```

## 🎨 Design System

The core colors and typography for this project are configured in `tailwind.config.js`:

*   **Primary Backgrounds / Dark Theme Elements:** `#043873`
*   **Secondary/Accent Colors:** `#4F9CF9` (Blue), `#FFE492` (Yellow)
*   **Typography:** [Inter](https://fonts.google.com/specimen/Inter) font family is used globally for a clean, modern look.

## 📜 License

This project is open-source and available under the [MIT License](LICENSE). Feel free to use it, modify it, and learn from it!
