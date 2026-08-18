# Decisions Document

This document outlines the key decisions made during the implementation of the Architex AI landing page for the Acdyon Technologies Frontend Challenge — Part 2.

## 1. Why this design?

The design of the Architex AI landing page was created to feel less like a generic SaaS marketing template and more like an early-stage, premium developer product. 

- **Product-First Approach:** Instead of using generic graphics or stock images, the hero section prominently features a functional mockup of the actual product workspace. This immediately communicates the product's value proposition within seconds.
- **Visual Language:** The design utilizes a deep dark theme (`#0a0a0c`) with a restrained indigo accent color (`#6366f1`). This high-contrast, minimalistic approach is standard for modern developer tools (like Vercel, Linear, or Raycast), signaling confidence and technical polish.
- **Typography & Spacing:** I used the system UI font stack (falling back to Inter if available) and strict CSS variables for spacing (`--space-1` to `--space-32`) to ensure absolute consistency and an organized, technical feel.
- **Meaningful Interactions:** The "Interactive Architecture" section was designed to directly address the challenge prompt ("Don't just draw boxes. Explain the decisions"). By allowing users to click nodes and see the underlying trade-offs, the landing page acts as a mini-demo of the product's educational philosophy.

## 2. One trade-off

I prioritized a highly polished, performant single-page experience and a custom, lightweight CSS design system over using heavy component libraries or building a fully functional authenticated application. 

Specifically, I initially built the project with React and Vite, but to maximize performance and demonstrate deep frontend fundamentals, I completely refactored the project into **pure, vanilla HTML, CSS, and JavaScript**. This guarantees a 0KB JavaScript bundle size overhead from frameworks, lightning-fast load times, and perfect SEO indexing, while still maintaining complex interactions (like the architecture visualization tooltips and the easter egg) through native DOM APIs.

## 3. AI usage

AI was used to accelerate the implementation of this project:
- **Scaffolding & Refactoring:** AI was used to quickly generate the initial file structure, CSS variables, and to assist in the heavy lifting of refactoring the React components back into raw HTML and vanilla JS.
- **Drafting Content:** I used AI to help brainstorm the copy and the structure of the "Product Preview" mockups based on the prompt's requirements.
- **Human Verification:** I personally reviewed and modified the generated code to ensure it met the exact specifications of the challenge. I manually verified the responsiveness across all breakpoints (320px, 390px, 768px, 1024px, 1440px), tested the interactive elements, and ensured that the design system was applied consistently. The final result is a clean, defensible codebase that I fully understand and can explain in an interview.
