# Quick Reference Guide - صِلّ Website

## 🚀 Essential Commands

### Development

```bash
npm run dev              # Start dev server (port 5173)
npm run build            # Build for production
npm run preview          # Preview production build
npm run lint             # Run ESLint
```

### Package Management

```bash
npm install              # Install dependencies
npm update              # Update packages
npm audit fix           # Fix security vulnerabilities
```

## 📍 File Locations

### Components

- Navigation: `src/components/Navigation.jsx`
- Hero: `src/components/sections/Hero.jsx`
- Concept: `src/components/sections/Concept.jsx`
- Features: `src/components/sections/Features.jsx`
- Community: `src/components/sections/Community.jsx`
- Coming Soon: `src/components/sections/ComingSoon.jsx`
- Footer: `src/components/sections/Footer.jsx`

### Configuration

- Tailwind Config: `tailwind.config.js`
- Vite Config: `vite.config.js`
- TypeScript Config: `tsconfig.json`
- i18n Config: `src/i18n/config.js`

### Translations

- English: `src/locales/en.json`
- Arabic: `src/locales/ar.json`

### Styles

- Global CSS: `src/App.css`, `src/index.css`

## 🎨 Common Customizations

### Change Primary Color

```js
// tailwind.config.js
colors: {
  primary: '#24582a',  // Change this hex code
}
```

### Add Translation

```json
// src/locales/en.json
{
  "yourKey": "Your text"
}
```

### Update Navigation Link

```jsx
// src/components/Navigation.jsx
{ label: 'New Link', id: 'new-section' }
```

### Modify Animation Duration

```jsx
// Any component
transition={{ duration: 0.6 }}  // Change 0.6 to desired duration
```

## 🌍 Deployment URLs

### Development

- Local: `http://localhost:5173`
- Network: Run with `npm run dev -- --host`

### Production

- Vercel: `vercel.app`
- Netlify: `netlify.app`
- Custom domain: Your domain

## 📱 Browser Dev Tools

### Dark Mode Toggle

- Press F12 → Application → Local Storage
- Change `darkMode` value

### Check Translations

- Console → `i18n.language`
- Change language: `i18n.changeLanguage('ar')`

## 🔧 Environment Variables

Create `.env.local`:

```env
VITE_API_URL=http://localhost:3000
VITE_NEWSLETTER_API=your-api-key
```

## 🐛 Common Issues

### Issue: Styles not loading

**Solution**:

```bash
npm run dev
# Force refresh browser (Ctrl+Shift+R)
```

### Issue: Arabic text not RTL

**Solution**:

```bash
# Clear cache and reload
# Check language setting in browser console
```

### Issue: Animations not smooth

**Solution**:

```bash
# Enable GPU acceleration in browser settings
# Check if `prefers-reduced-motion` is set
```

### Issue: Build fails

**Solution**:

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📊 Performance Checks

### Check Bundle Size

```bash
npm run build
# Check dist/ folder size
```

### Optimize Images

- Use WebP format
- Compress with TinyPNG or similar
- Place in `src/assets/`

### Monitor Performance

- Chrome DevTools → Lighthouse
- Check Core Web Vitals

## 🔐 Security

### Keep Dependencies Updated

```bash
npm outdated              # Check for updates
npm update               # Update packages
npm audit fix            # Fix vulnerabilities
```

### Before Deployment

- [ ] Remove console.log statements
- [ ] Check API keys not exposed
- [ ] Enable HTTPS
- [ ] Set security headers

## 🎯 Git Commands

```bash
git status               # Check changes
git add .               # Stage all changes
git commit -m "message" # Commit with message
git push               # Push to repository
```

## 📚 Documentation Files

- `README.md` - Project overview
- `SETUP_GUIDE.md` - Detailed setup instructions
- `PROJECT_SUMMARY.md` - Complete feature list
- `QUICK_REFERENCE.md` - This file

## 🌟 API Endpoints (When Needed)

### Newsletter Signup

- Endpoint: `/api/newsletter`
- Method: `POST`
- Body: `{ email: "user@example.com" }`

### App Downloads

- Update URLs in `ComingSoon.jsx`
- iOS: `https://apps.apple.com/...`
- Android: `https://play.google.com/store/apps/...`

## 📞 Contact & Support

- Email: hello@sil-app.com
- Website: www.sil-app.com (when deployed)

## ✅ Pre-Launch Checklist

- [ ] Run `npm run build` successfully
- [ ] All pages responsive on mobile
- [ ] Dark mode works correctly
- [ ] Arabic and English both display correctly
- [ ] All links working
- [ ] No console errors
- [ ] Performance acceptable
- [ ] Accessibility standards met

## 🎓 Learning Resources

- React: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Framer Motion: https://framer.com/motion
- Vite: https://vitejs.dev
- i18next: https://www.i18next.com

---

**Last Updated**: November 3, 2025
**Project**: صِلّ Website
**Status**: Production Ready ✅
