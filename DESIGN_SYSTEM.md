# Satwave Design System

## 🎨 Color Palette

### Primary - Brand Identity
**Brand Blue: `#22257a`**
- Use for: CTAs, active nav, section accents, icons, key highlights
- CSS Variable: `var(--color-brand-blue)`

### Secondary - Structure  
**Charcoal Navy: `#0f1226`**
- Use for: Nav bar background, footer, dark sections, hero overlays
- CSS Variable: `var(--color-charcoal-navy)`
- Why: Softer than pure black, keeps "space-tech" feel, looks expensive

### Tertiary - Breathing Room
**Cool Off-White: `#f5f7fb`**
- Use for: Page backgrounds, section alternation, cards
- CSS Variable: `var(--color-cool-off-white)`
- Why: Crisp, tech-clean, makes blue pop, keeps UI breathable

### Accent - Energy (Use Sparingly!)
**Electric Indigo: `#4f5dff`**
- Use for: Hover states, subtle glows, micro-interactions, key metrics
- CSS Variable: `var(--color-electric-indigo)`
- ⚠️ Rule: If everything is highlighted, nothing is. This is spice, not sauce.

### System Gray - Legibility
**Slate Gray: `#5f637a`**
- Use for: Body text, subtitles, dividers, helper text
- CSS Variable: `var(--color-slate-gray)`

---

## ✍️ Typography System

### Font Pairing: Roboto Mono + Inter

**Headings (H1-H6)**
- Font: `Roboto Mono`
- Letter Spacing: `0.04em`
- Use for: All headings, metrics, technical stats

**Body Text**
- Font: `Inter`
- Line Height: `1.7`
- Use for: Paragraphs, UI labels, general content

**Uppercase Labels**
- Letter Spacing: `0.12em`
- Use for: Navigation, buttons, section labels

**Metrics & Technical Stats**
- Font: `Roboto Mono`
- Weight: `500`
- Classes: `.metric`, `.stat`, `.technical`

---

## 🎯 Usage Guidelines

### What This Palette Says:
> "We build serious technology."

### Design Principles:
1. **Precise** - Clean lines, exact measurements
2. **Confident** - Bold but not flashy
3. **Expensive** - Premium feel without ostentation
4. **Technical** - Engineering credibility

### Color Application:

**Primary Blue (`#22257a`)**
```css
/* CTAs */
background-color: var(--color-brand-blue);

/* Active states */
border-color: var(--color-brand-blue);
```

**Charcoal Navy (`#0f1226`)**
```css
/* Backgrounds */
background-color: var(--color-charcoal-navy);

/* Text on light backgrounds */
color: var(--color-charcoal-navy);
```

**Cool Off-White (`#f5f7fb`)**
```css
/* Page backgrounds */
background-color: var(--color-cool-off-white);

/* Text on dark backgrounds */
color: var(--color-cool-off-white);
```

**Electric Indigo (`#4f5dff`)** - SPARINGLY
```css
/* Hover effects only */
.button:hover {
    background-color: var(--color-electric-indigo);
}
```

**Slate Gray (`#5f637a`)**
```css
/* Body text */
p {
    color: var(--color-slate-gray);
}
```

---

## 📐 Typography Scale

### Headings
```css
h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto Mono', monospace;
    letter-spacing: 0.04em;
}
```

### Body
```css
body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
}

p {
    line-height: 1.7;
    color: var(--color-slate-gray);
}
```

### Uppercase
```css
.uppercase {
    letter-spacing: 0.12em;
}
```

---

## 🚀 Implementation

All colors are defined in `/src/app/globals.css` using CSS variables:

```css
@theme {
    /* Core Colors */
    --color-brand-blue: #22257a;
    --color-charcoal-navy: #0f1226;
    --color-dark-secondary: #0A0C1F;
    --color-mid-secondary: #161952;
    --color-light-tertiary: #4B56D2;
    --color-dark-tertiary: #DDE1FF;
    --color-alternate-tertiary: #0144ae;
    --color-cool-off-white: #f5f7fb;
    --color-electric-indigo: #4f5dff;
    --color-slate-gray: #5f637a;

    /* Glass Card Backgrounds */
    --glass-card-bg: rgba(22, 25, 82, 0.5);  /* Outer cards */
    --glass-card-light-bg: rgba(34, 37, 122, 0.4);  /* Inner cards */
    --glass-card-border: rgba(75, 86, 210, 0.2);  /* Subtle borders */
    --glass-card-border-strong: rgba(75, 86, 210, 0.3);  /* Emphasis borders */
}
```

### Glass Card System

**Visual Hierarchy (Darkest → Lightest):**
```
Page Background (#0A0C1F)
  ↓
Outer Card (--glass-card-bg)
  ↓
Inner Card (--glass-card-light-bg)
```

**Usage:**
```css
/* Outer container cards */
.glass-card {
    background: var(--glass-card-bg);
    border: 1px solid var(--glass-card-border);
}

/* Inner content cards */
.glass-card-light {
    background: var(--glass-card-light-bg);
    border: 1px solid var(--glass-card-border-strong);
}
```

Use them anywhere in your components:
```tsx
<h1 style={{ color: 'var(--color-charcoal-navy)' }}>
    Heading
</h1>
```

---

## 🎨 Visual Hierarchy

**Level 1: Primary Actions**
- Brand Blue background
- White text
- Roboto Mono uppercase
- Letter spacing: 0.12em

**Level 2: Secondary Actions**
- Brand Blue border
- Brand Blue text
- Transparent background
- Hover: Brand Blue background

**Level 3: Tertiary/Text Links**
- Slate Gray text
- Electric Indigo on hover
- No background

---

## ✨ Premium Feel Checklist

- ✅ Roboto Mono for headings (engineering credibility)
- ✅ Inter for body (modern, readable)
- ✅ Letter spacing on uppercase (0.12em)
- ✅ Charcoal Navy instead of black (expensive)
- ✅ Cool Off-White instead of white (breathable)
- ✅ Electric Indigo used sparingly (energy, not chaos)
- ✅ Slate Gray for body text (legibility)

---

**Vibe Check:**
> High-end SaaS + Aerospace Engineering = Serious investors funded serious engineers.
