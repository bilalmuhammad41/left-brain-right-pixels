# Design System

Semantic tokens, typography, breakpoints, and interaction attributes. Source of truth for tokens: `src/app/globals.css`.

## Color tokens

### Accent aliases

| Token | Value | Usage |
|-------|-------|-------|
| `--yellow-color` | `#FCF55F` | Accent highlight |
| `--dark-color` | theme-dependent | Inverse accent alias |

### Dark theme (`:root`, `[data-theme="dark"]`)

| Token | Value |
|-------|-------|
| `--bg` | `#161616` |
| `--bg-elevated` | `#1e1e1e` |
| `--text` | `#ffffff` |
| `--text-muted` | `#8a8a8a` |
| `--text-dim` | `#5a5a5a` |
| `--border` | `rgba(255,255,255,0.12)` |
| `--accent` | `#ffffff` |
| `--overlay-scrim` | `rgba(0,0,0,0.62)` |
| `--curtain-shadow` | `0 -28px 80px rgba(0,0,0,0.55)` |
| `--mobile-menu-bg` | `#a0a1a3` |
| `--mobile-menu-text` | `#000000` |
| `--mobile-menu-border` | `rgba(0,0,0,0.15)` |

### Light theme (`[data-theme="light"]`)

| Token | Value |
|-------|-------|
| `--bg` | `#ebebeb` |
| `--bg-elevated` | `#ffffff` |
| `--text` | `#161616` |
| `--text-muted` | `#6b6b6b` |
| `--text-dim` | `#9a9a9a` |
| `--border` | `rgba(0,0,0,0.12)` |
| `--accent` | `#161616` |
| `--overlay-scrim` | `rgba(0,0,0,0.5)` |
| `--curtain-shadow` | `0 -28px 80px rgba(0,0,0,0.16)` |
| `--mobile-menu-bg` | `#ebebea` |
| `--mobile-menu-text` | `#161616` |
| `--mobile-menu-border` | `rgba(0,0,0,0.1)` |

## Layout tokens

| Token | Value |
|-------|-------|
| `--section-padding` | `clamp(1.25rem, 4vw, 3rem)` |
| `--max-width` | `1700px` |

## Typography

| Role | Font | Weight | Notes |
|------|------|--------|-------|
| Body | DM Sans | 400–900 | All weights in `public/fonts/DMSans/` |
| Section label | DM Sans | 600 | `.section-label`, uppercase, tracked |
| Section heading | DM Sans | 600 | `.section-heading`, clamp sizing |
| Page title | DM Sans | — | `.page-title` via `PageTitle` component |

No separate display font is active despite Gilroy files in `public/`.

## Breakpoints

From `tailwind.config.js`:

| Name | Min width | Typical use |
|------|-----------|-------------|
| `xs` | 375px | Small phones |
| `ss` | 620px | Large phones |
| `sm` | 768px | Tablet / cursor enable threshold |
| `md` | 1060px | Desktop nav |
| `lg` | 1200px | Wide desktop |
| `xl` | 1700px | Max content width |

## Interaction attributes (cursor system)

Declare behavior on HTML elements. Parsed by [Cuberto Mouse Follower](https://github.com/Cuberto/mouse-follower) via `src/lib/mouseFollower.js`.

| Attribute | Example | Effect |
|-----------|---------|--------|
| `data-cursor` | `"-exclusion"` | Cursor state(s) — CSS classes on `.mf-cursor` |
| `data-cursor-stick` | `""` | Cursor sticks to element center |
| `data-cursor-text` | `"View"` | Label shown in cursor |
| `data-cursor-img` | `"/img.png"` | Image preview in cursor |
| `data-cursor-video` | `"/clip.mp4"` | Video preview in cursor |

Custom states in `src/components/CustomCursor/CustomCursor.css`:

- `-exclusion` — mix-blend-mode exclusion (used on links)
- `-menu` / `-menu-mobile` — enlarged cursor for nav menu buttons

### Cursor CSS classes

Base styles from `mouse-follower/dist/mouse-follower.min.css`. Theme overrides in `src/components/CustomCursor/CustomCursor.css`:

- `.mf-cursor` — root cursor element
- `.mf-cursor-text`, `.mf-cursor-media` — inner structure
- State classes: `-pointer`, `-exclusion`, `-text`, `-hidden`, etc.

## Motion conventions

| Pattern | Standard |
|---------|----------|
| Page enter title | GSAP letter stagger via `PageTitle` + `transitions.js` |
| Page enter body | `.page-enter-fade` class, stagger 0.1s |
| Page transition | Curtain slide `power4.inOut`, 0.9s |
| Link hover | CSS transitions, `cubic-bezier(0.25, 1.08, 0.68, 0.98)` |
| Scroll | GSAP ScrollSmoother, smooth 1.2 |
| Reduced motion | Cursor disabled; respect `prefers-reduced-motion` |

## Component patterns

### Page view template

```jsx
<section className="section-container">
  <PageTitle title="Page Name" />
  <div className="page-enter-fade">
    {/* content */}
  </div>
</section>
```

### Internal link

```jsx
<TransitionLink href="/projects" className="link-arrow">
  View work
</TransitionLink>
```

### Sticky button

```jsx
<button data-cursor-stick data-cursor="-menu">
  Menu
</button>
```

## Assets

| Export | Path | File |
|--------|------|------|
| `lines` | `/lines.png` | Decorative |
| `close` | `/close.png` | Nav close icon |
| `arrow_down` | `/arrow-down-line.png` | UI arrow |
| `arrow_right_up` | `/arrow-right-up-line.png` | UI arrow |
| `profile_picture` | `/profile_picture.jpg` | Profile |

Source: `src/assets/index.js` (base-path aware via `withBasePath`)

## Related

- [styling.md](./styling.md) — CSS architecture
- [animation.md](./animation.md) — motion system
- [../components/component-index.md](../components/component-index.md)
