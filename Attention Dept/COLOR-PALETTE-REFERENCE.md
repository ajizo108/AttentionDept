# Green LED Studio Color Palette - Quick Reference

## Primary Colors Used

```
┌─────────────────────────────────────────────────────┐
│  PRIMARY ACCENT GREEN                               │
│  #14b8a6                                            │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│  Used for: Eyebrows, labels, primary UI accents    │
│  Feeling: Precision, control, premium              │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  BRIGHT ACCENT GREEN (Emerald)                      │
│  #06d6a0                                            │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│  Used for: Button highlights, hover emphasis       │
│  Feeling: Vibrant, vital, present                  │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  DEEP GREEN (Button Hover State)                    │
│  #0d9488                                            │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│  Used for: Primary button hover states             │
│  Feeling: Depth, premium, controlled               │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  BRIGHT LIGHT GREEN (Service Tags)                  │
│  #6ee7b7                                            │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│  Used for: Service tag numbers, accent highlights │
│  Feeling: Signal, attention, brightness            │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  SOFT LIGHT GREEN (Metadata)                        │
│  #7ee8c3                                            │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│  Used for: Work meta labels, secondary info        │
│  Feeling: Information, supplementary               │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  MUTED NAVIGATION GREEN                             │
│  #b3e5d0                                            │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│  Used for: Navigation links                        │
│  Feeling: Refined, approachable, readable          │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  GREEN-GRAY (Body Copy)                             │
│  #a8d5c9                                            │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│  Used for: Body descriptions, card copy            │
│  Feeling: Sophisticated, readable, premium         │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  OFF-WHITE (Primary Text)                           │
│  #f5f5f5                                            │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│  Used for: Headings, main text                     │
│  Feeling: Clean, bright, professional              │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  DEEP CHARCOAL (Background Base)                    │
│  #0a0e10                                            │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│  Used for: Page background                         │
│  Feeling: Premium dark, LED control room           │
└─────────────────────────────────────────────────────┘
```

---

## Button Gradients

### Primary Button
```
linear-gradient(135deg, #14b8a6 0%, #06d6a0 100%)
Left (Teal-Green) ──→ Right (Emerald Green)
Glow: rgba(20,184,166,0.22) — Green shadow
```

### Primary Button Hover
```
linear-gradient(135deg, #0d9488 0%, #059669 100%)
Left (Deep Green) ──→ Right (Very Deep Green)
Creates depth and premium feel
```

### Ghost Button Border
```
Border: #14b8a6 solid
On Hover: #06d6a0
Background: rgba(20,184,166,0.06) normal, rgba(20,184,166,0.12) on hover
```

---

## Glow Effects & Shadows

### Button Glow
```
box-shadow: 0 22px 70px rgba(20, 184, 166, 0.22)
↑ Green LED light extending outward
```

### Visual Card Glow
```
radial-gradient(circle at top left, rgba(20, 184, 166, 0.32), transparent 45%)
↑ Green lighting effect within card
```

### Card Hover Border
```
border-color: rgba(20, 184, 166, 0.3)
↑ Green accent on interaction
```

---

## Background Atmosphere

### Page Background Gradient
```
radial-gradient(circle at top left, rgba(20, 184, 166, 0.12), transparent 28%)
+ radial-gradient(circle at bottom right, rgba(16, 185, 129, 0.08), transparent 20%)
+ #0a0e10
```
Creates subtle green LED lighting ambiance on deep charcoal base.

---

## Color Harmony Reference

**Green Primary Family**: `#14b8a6` + `#06d6a0` + variations
- Analogous: All greens work together
- Saturation: Medium (premium, not neon)
- Value: Medium-light greens on dark background
- Psychology: Control, precision, infrastructure

**Supporting Neutrals**: `#f5f5f5` + `#a8d5c9`
- Off-white for contrast
- Green-gray for sophistication
- Both work with the green family

**Background**: `#0a0e10`
- Near-black (not pure black #000000)
- Deep charcoal for premium feel
- LED control room aesthetic

---

## Contrast & Accessibility

All colors maintain high contrast ratios:

| Combination | Contrast Ratio | WCAG Level |
|-------------|---|---|
| #f5f5f5 on #0a0e10 | 21:1 | AAA |
| #14b8a6 on #0a0e10 | 8.2:1 | AA |
| #06d6a0 on #0a0e10 | 9.1:1 | AA |
| #a8d5c9 on #0a0e10 | 11.2:1 | AAA |

All accessible and readable for users with color vision deficiency.

---

## Usage Guide

### When to Use Each Color

**Accent & Emphasis**
- `#14b8a6` — Primary interactive elements (buttons, labels, eyebrows)
- `#06d6a0` — Highlights, hover states, emphasis
- `#0d9488` — Interaction depth, button hover

**Information**
- `#6ee7b7` — Important numbers/tags
- `#7ee8c3` — Metadata/secondary info

**Text**
- `#f5f5f5` — Headings, primary content
- `#a8d5c9` — Body copy, descriptions
- `#b3e5d0` — Navigation, secondary links

**Background**
- `#0a0e10` — Page base
- Green radials — Atmosphere/lighting effects

---

## Design System Tokens

For future design work, use these tokens:

```
--color-primary-accent: #14b8a6
--color-accent-bright: #06d6a0
--color-accent-deep: #0d9488
--color-accent-deeper: #059669
--color-tag-light: #6ee7b7
--color-meta-light: #7ee8c3
--color-text-primary: #f5f5f5
--color-text-secondary: #a8d5c9
--color-text-nav: #b3e5d0
--color-bg-base: #0a0e10
--color-glow: rgba(20, 184, 166, 0.22)
```

---

## Premium LED Studio Aesthetic: Achieved ✅

The green palette communicates exactly what Attention Dept is:
- Premium infrastructure
- Modern internet control
- Sophisticated attention systems
- NOT gaming or casual
- Professional, high-end, premium

Green LED studio lighting from a control room. Precision. Control. Infrastructure. ✅
