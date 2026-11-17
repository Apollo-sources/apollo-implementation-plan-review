# Apollo — Implementation Kickstart

## 1. GOAL
Build a polished, responsive Apollo AI-agency landing page prototype focused on strategy-call bookings, with a dark Geist-based visual system, glass-effect cards, accent-color CTAs, interactive demo content, and supporting contact page. This phase defines the implementation; no application code is included in this plan.

## 2. FILES
- `IMPLEMENTATION_KICKSTART.md` — This approved-scope implementation plan and proposed design tokens.
- `app/page.tsx` — Landing-page composition and metadata entry point.
- `app/contact/page.tsx` — Contact page for Marcus; no email-capture form.
- `app/globals.css` — Semantic design tokens, base styles, responsive utilities, and reduced-motion support.
- `app/layout.tsx` — Geist font setup, global metadata defaults, and shared page shell.
- `lib/content.ts` — Centralized prototype copy, FAQ entries, demo scripts, testimonials, and placeholder labels.
- `components/site-header.tsx` — Responsive header, tablet/mobile navigation, and accessible burger menu.
- `components/site-footer.tsx` — Footer navigation and smooth back-to-top control.
- `components/primary-cta.tsx` — Shared CTA that opens the strategy-call modal.
- `components/booking-modal.tsx` — Accessible modal containing prototype booking/contact details; no email capture.
- `components/agent-chat.tsx` — Reusable scripted agent conversation for hero and interactive demo.
- `components/reveal.tsx` — Shared, reduced-motion-aware reveal/scroll animation primitive.
- `components/sections/` — Short, focused components for logos, problem, services, process, demo, social proof, packages, FAQ, and final CTA.
- `public/images/` — Generated prototype imagery, with replaceable assets and meaningful alt text where informative.

Keep components cohesive and generally below roughly 600 lines; split earlier when a component has distinct responsibilities. Adjust paths to match the existing scaffold if its conventions differ.

## 3. COMPONENTS
- Reuse the existing project scaffold and installed UI primitives where possible; do not introduce a state-management library.
- Build shared `PrimaryCTA`, `SecondaryCTA`, `Reveal`, `AgentChat`, and booking-modal components.
- Use shadcn primitives for accessible accordion/tabs/dialog behavior if already available; otherwise add only the needed components using project conventions.
- Keep content/data separate from rendering so example copy, metrics, FAQs, testimonials, and scripts can be replaced without restructuring the sections.
- Use a responsive navigation component with an accessible menu button, expanded state, Escape handling, and focus behavior.

## 4. STEPS
1. Inspect the new project scaffold, existing dependencies, route structure, and styling conventions; retain compatible installed choices.
2. Establish the design tokens below in semantic CSS variables and connect Geist typography through the project’s supported font setup.
3. Build the shared layout, responsive header/footer, CTA modal, and animation primitives.
4. Implement the landing sections in the agreed order, using centralized example content and generated imagery rather than broken/empty image placeholders.
5. Implement the Contact page for Marcus, smooth in-page navigation/back-to-top, demo interactions, FAQ filtering/accordion, and mobile sticky CTA behavior.
6. Add SEO metadata, Open Graph defaults, semantic landmarks, accessible labels/alt text, and reduced-motion handling.
7. Validate desktop, tablet, and mobile layouts; inspect contrast and adjust text/token values if needed while retaining the dark theme and accent intent.
8. Start and present the app preview, then verify key navigation and modal behavior in the browser. Treat metrics, testimonials, integrations, and operational claims as illustrative prototype content.

## 5. DESIGN-SYSTEM CHECK

### Proposed tokens
| Token | Proposed value | Use |
|---|---|---|
| `--background` | `#0A0A0B` | Page background |
| `--surface` | `#121214` | Card base |
| `--surface-glass` | `rgba(18, 18, 20, 0.72)` | Glass card surface with backdrop blur and solid fallback |
| `--border` | `#1F1F23` | Dividers and card outlines |
| `--text-primary` | `#F5F5F2` | Headings and primary copy |
| `--text-muted` | `#A3A3AA` (initial proposal) | Secondary text; raise from original muted value if contrast checks require it |
| `--accent` | `#FF5A1F` | Primary CTA and intentionally selected accent details |
| `--font-sans` | Geist Sans | Headings and body |
| `--font-mono` | Geist Mono | Eyebrows, labels, stats, demo details |
| `--radius-card` | `12px` | Standard cards |
| `--radius-feature` | `24px` | Large feature/booking panel where specified |
| `--radius-pill` | `9999px` | CTA and chip shapes |
| `--content-width` | `1200px` | Centered content container |
| `--space-section` | `128px` desktop / `80px` mobile | Section rhythm |

Use the specified dark palette and one warm accent; do not introduce gradients, purple/blue, or decorative glow. Glass effects should remain subtle, preserve readable contrast, and have a non-transparent fallback. Use the accent across the interface as requested, while keeping it visually intentional and checking each use for contrast and hierarchy. Initial color values are hypotheses, not verified WCAG results; test text and interactive states against their actual surfaces and tune before treating them as final. Use only the two button treatments: primary filled CTA and secondary outlined CTA. Ordinary text links remain text links, not a third button style.

## 6. MOBILE
- Mobile-first layout with explicit small-phone, phone, tablet, and desktop behavior; use 768px as a key breakpoint, not the only breakpoint.
- Stack multi-column sections, preserve readable DOM/focus order, and avoid horizontal page overflow.
- Add a keyboard-accessible burger menu for narrow layouts; close it after navigation and support Escape.
- Use a bottom sticky primary CTA after the hero leaves view; hide it when the booking modal is open or the booking destination is visible, and respect safe-area insets.
- Keep FAQ filter chips and testimonial navigation operable without dragging; provide visible controls and keyboard support.
- Reflow the contact page, dialog, cards, chat, and footer for narrow screens; prevent sticky controls from covering content or focus targets.

## 7. RISKS
- Contrast is explicitly untested. In particular, the orange accent should not be assumed suitable for small text or every surface; verify contrast for text, focus indicators, borders, and states and adjust token values as necessary.
- Glass transparency/blur can reduce contrast and increase rendering cost; retain opaque fallbacks and avoid applying blur to large areas.
- Generated images are temporary prototype assets and may not match the final brand; optimize dimensions/formats and avoid layout shift.
- Example social proof, case studies, results, and claims can be mistaken for real endorsements. Mark them conspicuously as examples and keep them replaceable.
- The strategy-call modal needs a defined prototype interaction that does not imply a booking was completed or collect email addresses. Keep it clearly illustrative until a real booking flow is selected.
- Scroll-triggered animation and sticky elements can harm accessibility/usability; honor reduced motion and test keyboard/focus interactions.
- No exact contact details, Marcus’s role/contact method, or booking URL have been supplied; use clearly identified prototype copy rather than inventing real contact details.
- SEO metadata can be implemented, but canonical domain, final description, and social image may need replacement before launch.

## 8. QUESTIONS
No blocking questions for the prototype implementation. Use reasonable defaults and keep unresolved business details visibly marked as replaceable examples. Confirm Marcus’s real contact details, booking destination, and approved claims before launch; this plan does not invent them.
