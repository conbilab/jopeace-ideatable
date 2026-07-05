# 조피스 아이디어테이블 Design System

## 1. Atmosphere & Identity

편안하지만 가볍지 않은 대전 기반 사업 대화 모임이다. 종이 위에 아이디어를 올려놓고 서로 질문하는 느낌을 살리며, 첫인상은 "따뜻한 실무형 테이블"이어야 한다. 시그니처는 얇은 선, 종이 같은 배경, 딥 그린 CTA, 앰버 포인트가 함께 만드는 조용한 집중감이다.

## 2. Color

### Palette

| Role | Token | Light | Dark | Usage |
|------|-------|-------|------|-------|
| Surface/primary | --color-ivory | #F8F5EF | #1F1F1F | Page background |
| Surface/secondary | --color-white | #FFFFFF | #262626 | Cards, form fields |
| Surface/soft | --color-soft | #F1EBDD | #2A2926 | Alternating bands |
| Text/primary | --color-charcoal | #1F1F1F | #F8F5EF | Headlines, body |
| Text/secondary | --color-gray | #6B6B6B | #C9C1B4 | Supporting copy |
| Text/inverse | --color-inverse | #FFFFFF | #1F1F1F | CTA labels |
| Border/default | --color-border | #E7DFD2 | #4A433B | Cards, dividers |
| Accent/primary | --color-green | #2F5D50 | #76B59E | Primary CTA, links |
| Accent/hover | --color-green-dark | #24483E | #9AD0BD | CTA hover |
| Accent/warm | --color-amber | #F2B84B | #F2B84B | Highlights, badges |
| Status/error | --color-error | #A13D32 | #FFB4A8 | Form validation |

### Rules

- Green is reserved for conversion and interactive emphasis.
- Amber is used as a small highlight, never as a second CTA color.
- White cards sit on ivory or soft bands with a beige border.
- No raw color outside these tokens.

## 3. Typography

### Scale

| Level | Size | Weight | Line Height | Tracking | Usage |
|-------|------|--------|-------------|----------|-------|
| Display | 2rem mobile, 2.6rem desktop | 800 | 1.05 | 0 | Hero headline |
| H1 | 2rem mobile, 3rem desktop | 800 | 1.12 | 0 | Major sections |
| H2 | 1.5rem mobile, 2rem desktop | 700 | 1.25 | 0 | Subsections |
| H3 | 1.25rem | 700 | 1.35 | 0 | Card titles |
| Body/lg | 1.125rem | 500 | 1.65 | 0 | Leads |
| Body | 1rem | 400 | 1.65 | 0 | Default text |
| Body/sm | .925rem | 400 | 1.55 | 0 | Secondary info |
| Caption | .8125rem | 700 | 1.4 | 0 | Badges, labels |

### Font Stack

- Primary: Pretendard, "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", system-ui, sans-serif.
- Mono: "SFMono-Regular", Consolas, monospace.

### Rules

- Body text stays at 16px or larger on mobile.
- No viewport-based font scaling. Use breakpoint changes only.
- Letter spacing is 0 across visible text.

## 4. Spacing & Layout

### Base Unit

All spacing derives from 4px.

| Token | Value | Usage |
|-------|-------|-------|
| --space-1 | 4px | Tight inline spacing |
| --space-2 | 8px | Compact gaps |
| --space-3 | 12px | Field padding |
| --space-4 | 16px | Standard block spacing |
| --space-5 | 20px | Comfortable inline spacing |
| --space-6 | 24px | Card padding |
| --space-8 | 32px | Group spacing |
| --space-10 | 40px | Section internals |
| --space-12 | 48px | Mobile section rhythm |
| --space-16 | 64px | Desktop section rhythm |
| --space-20 | 80px | Hero and major rhythm |

### Grid

- Max content width: 1180px.
- Column system: 12-column desktop, single column under 768px.
- Breakpoints: 640px, 768px, 1024px, 1280px.

### Rules

- Sections are full-width bands with constrained inner content.
- Cards are only used for repeated items, event information, testimonials, host profile, and form surfaces.
- No nested UI cards.

## 5. Components

### Header
- Structure: sticky header, text logo, desktop nav, primary CTA.
- Variants: desktop nav, mobile compact header.
- Spacing: --space-4 horizontal, --space-3 vertical.
- States: link hover, focus-visible, active CTA press.
- Accessibility: `nav` landmark and visible focus ring.
- Motion: 160ms color and transform transitions.

### Button
- Structure: `a` or `button` with text label.
- Variants: primary, secondary, text.
- Spacing: minimum height 52px, horizontal padding --space-6.
- States: default, hover, active, focus, disabled.
- Accessibility: AA contrast and visible focus.
- Motion: transform on active, background on hover.

### Event Info Panel
- Structure: heading plus definition-list rows.
- Variants: compact hero, full event section.
- Spacing: --space-6 padding, --space-3 row gap.
- States: static.
- Accessibility: semantic `dl`.
- Motion: none.

### Section Lead
- Structure: heading, optional paragraph, optional chips.
- Variants: centered and left-aligned.
- Spacing: --space-8 after copy.
- States: static.
- Accessibility: clear heading order.
- Motion: reveal via opacity and translate only.

### Review Card
- Structure: quote, keyword line, anonymous role.
- Variants: regular and highlighted.
- Spacing: --space-6 padding.
- States: hover lift on devices that support hover.
- Accessibility: readable contrast, no raw screenshot identity.
- Motion: 180ms transform and shadow.

### Form Field
- Structure: label, input/textarea/select, helper or error slot.
- Variants: text, tel, select, textarea, checkbox.
- Spacing: --space-2 label gap, --space-3 field padding.
- States: default, hover, focus, invalid, disabled.
- Accessibility: explicit label and `aria-describedby` when helper text exists.
- Motion: border and shadow transition.

## 6. Motion & Interaction

### Timing

| Type | Duration | Easing | Usage |
|------|----------|--------|-------|
| Micro | 140ms | ease-out | Button press |
| Standard | 220ms | ease-in-out | Hover and focus changes |
| Reveal | 480ms | cubic-bezier(0.16, 1, 0.3, 1) | Section entrance |

### Rules

- Animate only transform and opacity for entry motion.
- Respect `prefers-reduced-motion`.
- Motion exists to show interaction or reading order, not decoration.

## 7. Depth & Surface

### Strategy

Mixed: beige borders plus low-opacity warm shadows.

| Level | Value | Usage |
|-------|-------|-------|
| Border | 1px solid var(--color-border) | Cards, form fields, dividers |
| Soft shadow | 0 18px 46px rgba(47, 37, 22, .08) | Hero and key panels |
| Hover shadow | 0 18px 38px rgba(47, 37, 22, .11) | Interactive repeated cards |

Surfaces stay within an 8px radius for cards and form fields. Buttons may use a pill radius for touch comfort.
