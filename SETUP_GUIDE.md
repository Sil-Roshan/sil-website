# صِلّ Website - Setup & Deployment Guide

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm installed
- VS Code (recommended)

### Installation & Development

1. **Navigate to the project folder:**

   ```bash
   cd c:\Users\abood\OneDrive\Desktop\Tasks-NTIS\sil-website
   ```

2. **Install dependencies (already done):**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   The website will automatically open at `http://localhost:5173`

4. **Build for production:**

   ```bash
   npm run build
   ```

   Output will be in the `dist/` folder

5. **Preview the production build:**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
sil-website/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx          # Header with theme/language toggles
│   │   └── sections/
│   │       ├── Hero.jsx            # Main landing section
│   │       ├── Concept.jsx         # App concept explanation
│   │       ├── Features.jsx        # Interactive features showcase
│   │       ├── Community.jsx       # Community hierarchy & values
│   │       ├── ComingSoon.jsx      # App store section
│   │       └── Footer.jsx          # Footer with links
│   ├── i18n/
│   │   └── config.js              # i18next configuration
│   ├── locales/
│   │   ├── en.json                # English translations
│   │   └── ar.json                # Arabic translations
│   ├── App.jsx                    # Main app component
│   ├── App.css                    # Global styles
│   ├── index.css                  # Tailwind CSS imports
│   └── main.jsx                   # React entry point
├── index.html                     # HTML template
├── vite.config.js                 # Vite configuration
├── tailwind.config.js             # Tailwind CSS configuration
├── postcss.config.js              # PostCSS configuration
├── tsconfig.json                  # TypeScript configuration
├── package.json                   # Project dependencies
└── README.md                      # Project documentation
```

## 🎨 Features Overview

### 1. **Responsive Design**

- Mobile-first approach
- Fully responsive on all screen sizes
- Smooth breakpoints with Tailwind CSS

### 2. **Dark Mode**

- Toggle between light and dark themes
- Automatically detects system preferences
- Persists user choice in localStorage
- Smooth transitions between themes

### 3. **Internationalization (i18n)**

- English and Arabic support
- RTL (Right-to-Left) support for Arabic
- Language toggle in navigation
- All strings in JSON files for easy translation

### 4. **Smooth Animations**

- Framer Motion for all animations
- Intersection Observer for scroll-triggered animations
- Smooth page transitions
- Interactive hover effects

### 5. **Modern Components**

- Navigation bar with sticky positioning
- Hero section with background animations
- Interactive feature cards
- Community hierarchy visualization
- Coming soon section with newsletter signup
- Footer with social links

## 🎯 Customization Guide

### Change Colors

Edit `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: '#24582a',    // Change primary color
      secondary: '#f4f3e8',  // Change secondary color
    },
  },
}
```

### Update Translations

**English** (`src/locales/en.json`):

```json
{
  "nav": {
    "home": "Home",
    "concept": "Concept"
  }
}
```

**Arabic** (`src/locales/ar.json`):

```json
{
  "nav": {
    "home": "الرئيسية",
    "concept": "الفكرة"
  }
}
```

### Modify Content

Each section is a separate component in `src/components/sections/`. Edit them directly to change content, colors, or functionality.

### Add New Section

1. Create a new file in `src/components/sections/NewSection.jsx`
2. Import it in `App.jsx`
3. Add it to the return statement
4. Add navigation link in `Navigation.jsx`
5. Add translations in both JSON files

## 🌐 Sections Explained

### Hero Section

- **File**: `src/components/sections/Hero.jsx`
- **Features**: Animated background, feature chips, scroll indicator
- **Customizable**: Title, slogan, description, CTA text

### Concept Section

- **File**: `src/components/sections/Concept.jsx`
- **Features**: Problem/solution comparison, feature cards
- **Customizable**: Section text, feature descriptions

### Features Section

- **File**: `src/components/sections/Features.jsx`
- **Features**: Interactive feature cards, selected feature detail, statistics
- **Customizable**: Feature titles, descriptions, icons, colors

### Community Section

- **File**: `src/components/sections/Community.jsx`
- **Features**: Hierarchy visualization, system features, value proposition
- **Customizable**: All text and descriptions

### Coming Soon Section

- **File**: `src/components/sections/ComingSoon.jsx`
- **Features**: App store buttons, newsletter signup, stats
- **Customizable**: Newsletter API integration, store links

### Footer

- **File**: `src/components/sections/Footer.jsx`
- **Features**: Company info, links, social media, back-to-top
- **Customizable**: Links, social media handles, contact info

## 🔧 Advanced Customization

### Add Google Analytics

In `src/main.jsx`, add:

```js
import ReactGA from "react-ga4";
ReactGA.initialize("GA_MEASUREMENT_ID");
```

### Add Form Submission

Update `ComingSoon.jsx` to submit newsletter data:

```js
const handleSubmit = async (email) => {
  // Send to your backend API
  const response = await fetch("/api/newsletter", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
};
```

### Customize Animation Speed

In any component using Framer Motion:

```js
animate={{ y: 0 }}
transition={{ duration: 0.6 }}  // Change this value
```

## 📱 Performance Tips

1. **Lazy Loading**: Components already use scroll-triggered animations
2. **Image Optimization**: Ensure images are optimized before deployment
3. **Code Splitting**: Vite automatically handles code splitting
4. **CSS Purging**: Tailwind CSS removes unused styles in production

## 🚢 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop dist/ folder to Netlify
```

### Deploy to GitHub Pages

```bash
npm run build
git add dist/
git commit -m "Deploy website"
git push
```

## 🐛 Troubleshooting

### Port Already in Use

```bash
npm run dev -- --port 3000
```

### CSS Not Loading

```bash
npm run dev
# If still not working, clear cache:
rm -rf node_modules
npm install
```

### Translations Not Updating

- Clear browser cache
- Check if JSON syntax is correct
- Restart dev server

## 📞 Support

For issues or questions:

1. Check the README.md
2. Review component comments
3. Check Framer Motion and Tailwind CSS documentation

## 📝 License

© 2025 صِلّ. All rights reserved.

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**
