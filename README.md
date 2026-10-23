# Raivatedu — Learning Platform

A frontend-only education marketing website built for the Meru Technosoft frontend internship assignment.

## Pages

- `/` — Home: hero and course search, categories, featured courses, learning steps, mentors, learner testimonials, FAQ, and CTA.
- `/courses` — Course catalogue with category filters, search, sorting, and empty state.
- `/courses/[slug]` — Course detail with syllabus accordions, instructor profile, reviews, and a validated demo enrolment form.

## Tech stack

- Next.js App Router
- JavaScript
- React
- CSS variables and responsive CSS
- `next/font` for typography
- `next/image` for the local hero illustration (no remote image configuration is needed)
- Lucide icons

## Run locally

Use Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

For a production build:

```bash
npm run build
npm start
```

## Design decisions

- **Palette:** indigo (`#4f46d9`) for trust and clarity, sunny yellow (`#ffd45a`) for energy, and soft off-white backgrounds to keep the learning experience friendly and readable.
- **Typography:** Geist through `next/font`.
- **Layout:** shared sticky navigation and footer, reusable course cards, and a single course data source for the catalogue and detail routes.
- **Accessibility:** semantic landmarks, labelled form controls, keyboard-visible focus styles, accessible mobile navigation state, native keyboard-usable `details` accordions, and reduced-motion support.
- **Functionality:** category filtering, course search, sorting, course-specific pages, and front-end form validation with a success message. No backend or payment processing is connected; this is explicitly a frontend demo.
- **Content:** course and learner information is illustrative demo content, not a claim about real Raivatedu offerings or outcomes.

## Before submission

1. Run the production build and fix all warnings/errors.
2. Test at 360px, 768px, 1024px, and 1440px widths.
3. Run Lighthouse on the deployed mobile site and save a screenshot.
4. Deploy to Vercel or Netlify and add the live URL here.
5. Push at least eight meaningful commits, not one final commit.
6. Record a short desktop/mobile walkthrough if time allows.

## Future improvements

Connect the catalogue to a content API, replace illustrative course information with verified brand content, add real authentication and payment only if requirements change, and add automated interaction tests.
