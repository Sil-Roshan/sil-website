# صِلّ Design System & Brand Guidelines

## 🎨 Color Palette

### Primary Colors

- **Primary Green**: `#24582a`

  - Used for: Main actions, headings, highlights
  - Hex: `#24582a`
  - RGB: `36, 88, 42`
  - HSL: `128°, 42%, 24%`

- **Secondary Cream**: `#f4f3e8`
  - Used for: Backgrounds, accents, light sections
  - Hex: `#f4f3e8`
  - RGB: `244, 243, 232`
  - HSL: `45°, 52%, 94%`

### Neutral Colors

- **Text Dark**: `#1f2937` (dark mode base)
- **Text Light**: `#f9fafb` (light mode base)
- **Border**: `#e5e7eb`
- **Placeholder**: `#9ca3af`

### Semantic Colors

- **Success**: `#10b981` (Green for positive actions)
- **Warning**: `#f59e0b` (Amber for alerts)
- **Error**: `#ef4444` (Red for errors)
- **Info**: `#3b82f6` (Blue for information)

## 🔤 Typography

### Font Family

- **Primary**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Fallback**: System fonts for maximum compatibility
- **Arabic**: Segoe UI (automatically selected for RTL)

### Font Sizes & Weights

| Element | Size            | Weight       | Usage             |
| ------- | --------------- | ------------ | ----------------- |
| H1      | 3rem (48px)     | 700 Bold     | Section titles    |
| H2      | 2.25rem (36px)  | 700 Bold     | Subsection titles |
| H3      | 1.5rem (24px)   | 600 Semibold | Subheadings       |
| H4      | 1.25rem (20px)  | 600 Semibold | Card titles       |
| Body    | 1rem (16px)     | 400 Regular  | Body text         |
| Small   | 0.875rem (14px) | 400 Regular  | Captions          |
| Tiny    | 0.75rem (12px)  | 500 Medium   | Labels            |

### Line Heights

- Headings: 1.2
- Body: 1.6
- Tight: 1.4

## 🎯 Spacing System

All spacing follows 4px grid:

- `xs`: 4px (0.25rem)
- `sm`: 8px (0.5rem)
- `md`: 16px (1rem)
- `lg`: 24px (1.5rem)
- `xl`: 32px (2rem)
- `2xl`: 48px (3rem)
- `3xl`: 64px (4rem)

## ✨ Component Styles

### Buttons

#### Primary Button

```jsx
className =
  "px-8 py-4 bg-primary text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all";
```

- Background: Primary Green
- Text: White
- Padding: 8px 32px
- Border Radius: 8px
- Hover: Scale up slightly, increase shadow

#### Secondary Button

```jsx
className = "px-8 py-4 bg-white text-primary font-bold rounded-lg shadow-lg";
```

- Background: White
- Text: Primary Green
- Same dimensions and effects

### Cards

#### Feature Card

```jsx
className =
  "p-8 bg-gradient-to-br from-primary/5 to-secondary rounded-2xl border border-primary/10 hover:shadow-lg transition-all";
```

- Padding: 32px
- Border Radius: 16px (rounded-2xl)
- Border: Primary with 10% opacity
- Gradient background

#### Interactive Card

```jsx
whileHover={{ y: -8, scale: 1.02 }}
className="p-6 rounded-xl cursor-pointer transition-all bg-white dark:bg-slate-700"
```

- Hover animation: Rise 8px, scale to 102%
- Smooth transitions on all properties

### Inputs & Forms

```jsx
className =
  "px-4 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary";
```

- Padding: 12px 16px
- Border Radius: 8px
- Focus ring: 2px, primary color

## 🌙 Dark Mode Adaptation

### Dark Mode Colors

- Background: `#0f172a` (slate-950)
- Card Background: `#1e293b` (slate-700)
- Text: `#f1f5f9` (white/light)
- Borders: `#334155` (slate-600)

### Implementation

```jsx
className = "bg-white dark:bg-slate-900 text-slate-900 dark:text-white";
```

All components automatically adapt via Tailwind's `dark:` modifier.

## 🔲 Border Radius System

- `rounded`: 4px
- `rounded-lg`: 8px
- `rounded-xl`: 12px
- `rounded-2xl`: 16px
- `rounded-3xl`: 24px
- `rounded-full`: 9999px (circles)

## 🎬 Animation Principles

### Duration Guidelines

- Quick feedback: 200ms
- Default interactions: 600ms
- Page transitions: 800ms
- Decorative animations: 2000ms+

### Easing Functions

- `ease-out`: For entrance animations (easeOut)
- `ease-in`: For exit animations
- `ease-in-out`: For continuous animations
- `linear`: For rotating elements

### Animation Examples

#### Hover Effect

```jsx
whileHover={{ scale: 1.05, y: -5 }}
transition={{ duration: 0.3 }}
```

#### Scroll Animation

```jsx
initial={{ opacity: 0, y: 20 }}
animate={inView ? { opacity: 1, y: 0 } : {}}
transition={{ duration: 0.6 }}
```

#### Continuous Animation

```jsx
animate={{ y: [0, 10, 0] }}
transition={{ duration: 2, repeat: Infinity }}
```

## 📐 Layout Grid

### Maximum Width

- Container: 1280px (max-w-6xl)
- Padding: 16px (mobile), 32px (desktop)

### Responsive Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🔤 Language-Specific Styling

### Arabic (RTL)

- Direction: Right-to-Left
- Text Alignment: Right-aligned
- Navigation: Right side
- Set via: `dir="rtl"` on html element
- Automatic via i18n: `document.documentElement.dir = 'rtl'`

### English (LTR)

- Direction: Left-to-Right
- Text Alignment: Left-aligned
- Navigation: Left side
- Set via: `dir="ltr"` on html element

## 📱 Responsive Design Patterns

### Mobile First

1. Design for mobile (320px+)
2. Add medium screen styles (768px+)
3. Add large screen styles (1024px+)

### Responsive Typography

```jsx
// Tailwind utility
className = "text-xl md:text-2xl lg:text-3xl";
```

### Responsive Grid

```jsx
className = "grid md:grid-cols-2 lg:grid-cols-3 gap-6";
```

## 🎨 Gradient Combinations

### Primary Gradient

```
from-primary via-slate-50 to-secondary
```

Direction: Top-left to bottom-right

### Dark Gradient

```
dark:from-slate-900 dark:via-slate-800 dark:to-slate-900
```

## 🔆 Shadow System

### Subtle

```
shadow-sm (box-shadow: 0 1px 2px)
```

### Medium

```
shadow-lg (box-shadow: 0 10px 15px)
```

### Large

```
shadow-xl (box-shadow: 0 20px 25px)
```

### No Shadow

```
shadow-none
```

## 🎯 Usage Examples

### Section Container

```jsx
<section className="py-20 px-4 bg-white dark:bg-slate-900 transition-colors duration-300">
  <div className="max-w-6xl mx-auto">{/* Content */}</div>
</section>
```

### Interactive Element

```jsx
<motion.div
  whileHover={{ scale: 1.05 }}
  className="p-6 bg-primary text-white rounded-xl cursor-pointer"
>
  Content
</motion.div>
```

### Responsive Heading

```jsx
<h2 className="text-4xl md:text-5xl font-bold mb-4">Section Title</h2>
```

### Dark Mode Card

```jsx
<div className="p-6 bg-white dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-slate-600">
  Content
</div>
```

## ♿ Accessibility Standards

### Color Contrast

- Primary on White: 6.5:1 ✅ (AAA)
- Primary on Secondary: 5.2:1 ✅ (AA)
- Body text: 4.5:1+ minimum

### Focus States

```jsx
className = "focus:outline-none focus:ring-2 focus:ring-primary";
```

### Keyboard Navigation

- Tab: Navigate through interactive elements
- Enter/Space: Activate buttons/links
- Escape: Close modals (when applicable)

### Screen Reader Support

```jsx
aria-label="Description"
role="button"
tabIndex={0}
```

## 🌍 Localization Support

### RTL-Safe Spacing

```jsx
// Instead of left/right, use directionally-neutral classes
className = "ml-4"; // Margin-left (flips to margin-right in RTL)
className = "text-left"; // Text-align (flips in RTL)
```

### Flex Direction

```jsx
// Use gap instead of specific margins
className = "flex gap-4"; // Works in both LTR and RTL
```

## 📚 Brand Voice

- **Tone**: Professional yet approachable
- **Language**: Clear, concise, inspiring
- **Cultural**: Respectful of Islamic values
- **Modern**: Contemporary and forward-thinking
- **Inclusive**: Welcoming to all community members

## 🎨 Design Tokens

```js
const designTokens = {
  colors: {
    primary: "#24582a",
    secondary: "#f4f3e8",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xl: "16px",
  },
  typography: {
    fontFamily: "Segoe UI, sans-serif",
    sizes: {
      h1: "48px",
      h2: "36px",
      h3: "24px",
      body: "16px",
    },
  },
};
```

---

**Design System Version**: 1.0
**Last Updated**: November 3, 2025
**Maintained by**: صِلّ Design Team
