# صِلّ Website

A modern, interactive React website for the "صِلّ" neighborhood app. Built with React, Tailwind CSS, and Framer Motion for smooth animations.

## Features

- 🎨 Modern, responsive design
- 🌙 Dark mode support
- 🌍 Multi-language (Arabic/English) with RTL support
- ✨ Smooth animations with Framer Motion
- 📱 Mobile-first approach
- 🎯 Interactive components
- ⚡ Fast performance with Vite

## Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **i18next** - Internationalization
- **Intersection Observer** - Scroll animations

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx
│   └── sections/
│       ├── Hero.jsx
│       ├── Concept.jsx
│       ├── Features.jsx
│       ├── Community.jsx
│       ├── ComingSoon.jsx
│       └── Footer.jsx
├── locales/
│   ├── en.json
│   └── ar.json
├── i18n/
│   └── config.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Features Sections

### Hero Section

- Eye-catching introduction with animations
- App name and slogan
- Call-to-action button
- Animated background elements

### Concept Section

- Explanation of the app's purpose
- Problem and solution comparison
- Key features visualization

### Features Section

- Interactive feature cards
- 6 core features with icons
- Featured detail view
- Statistics display

### Community Section

- Hierarchy visualization
- System features
- Islamic values emphasis

### Coming Soon Section

- App Store and Play Store buttons
- Email newsletter signup
- Countdown statistics

### Footer

- Company information
- Quick links
- Social media links
- Back-to-top button

## Customization

### Colors

Edit `tailwind.config.js` to change the primary and secondary colors:

```js
colors: {
  primary: '#24582a',
  secondary: '#f4f3e8',
}
```

### Translations

Add or modify translations in:

- `src/locales/en.json` - English translations
- `src/locales/ar.json` - Arabic translations

### Language & Theme

The website automatically:

- Detects system dark mode preference
- Supports RTL for Arabic
- Persists user preferences in localStorage

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Performance

- Optimized bundle size
- Lazy loading for sections
- Smooth scroll behavior
- Hardware-accelerated animations

## License

© 2025 صِلّ. All rights reserved.
