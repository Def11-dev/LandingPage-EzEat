# Design System Strategy: High-End Editorial

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Architectural Precision."** 

We are moving away from the "standard startup template" characterized by centered boxes and heavy borders. Instead, we treat the landing page as a high-end digital editorial. This system leverages intentional asymmetry, massive typographic contrast, and tonal depth to convey Ezeat’s corporate authority while maintaining a modern, tech-oriented pulse. 

By utilizing the signature Ezeat blue against a sophisticated hierarchy of neutral surfaces, we create an experience that feels "built" rather than "templated." We break the grid intentionally—using overlapping elements and varying section heights—to guide the eye through a narrative rather than a list of features.

---

## 2. Colors: Tonal Depth & Signature Polish

Our color strategy rejects the flat UI trend in favor of **Tonal Layering**. The Ezeat Blue is our beacon, used with clinical precision.

### The Palette
*   **Primary (`#002ca3`):** To be used for high-impact brand moments and key CTAs.
*   **Primary Container (`#1141d3`):** Use for "Soulful Gradients" in hero sections, transitioning from `primary` to `primary_container` at a 135-degree angle.
*   **Surface Hierarchy:**
    *   `surface` (`#fbf8ff`): The main canvas.
    *   `surface_container_low` (`#f3f2ff`): Subtle background shifts for secondary sections.
    *   `surface_container_highest` (`#e2e1ed`): High-contrast nesting for specific interactive modules.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to separate sections. Section boundaries must be defined solely through background color shifts. For example, a feature section using `surface_container_low` should sit directly against a `surface` hero. This creates a "seamless block" aesthetic found in premium editorial design.

### The "Glass & Gradient" Rule
Floating elements (like the Language Toggle or Navigation Bar) should utilize **Glassmorphism**. Apply `surface` at 70% opacity with a `24px` backdrop-blur. This ensures the tech-oriented nature of the brand feels integrated into the background.

---

## 3. Typography: The Editorial Voice

We use a dual-font system to balance corporate reliability with tech-forward accessibility.

*   **Display & Headlines (Manrope):** This is our "Editorial Voice." `display-lg` (3.5rem) should be used for hero statements with tight letter-spacing (-0.02em). Manrope’s geometric yet friendly curves provide the "Modern & Professional" feel requested.
*   **Body & Titles (Inter):** Our "Utility Voice." Inter provides maximum readability for technical details. Use `title-lg` (1.375rem) for section headers to maintain a clean, organized hierarchy.
*   **Contrast is Key:** Always pair a `display-md` headline with a significantly smaller `body-md` description to create a sophisticated, high-contrast visual rhythm.

---

## 4. Elevation & Depth: Tonal Layering

Traditional shadows are often a crutch for poor layout. In this system, depth is achieved through the **Layering Principle**.

*   **Stacking Tiers:** Place a `surface_container_lowest` (#ffffff) card on top of a `surface_container_low` (#f3f2ff) section. This creates a "soft lift" that feels architectural and intentional.
*   **Ambient Shadows:** If an element must float (e.g., a primary button), use a shadow with a blur of `32px`, an offset of `y: 8px`, and an opacity of `6%`. The shadow color must be a tint of `on_surface` (#1a1b24), never pure black.
*   **The "Ghost Border" Fallback:** For accessibility in form fields, use the `outline_variant` (#c4c5d7) at **15% opacity**. High-contrast borders are strictly forbidden.

---

## 5. Components: The Building Blocks

### Navigation Bar
*   **Structure:** A floating glass container (`surface` at 80% opacity + blur).
*   **Language Toggle:** Use `label-md` (Inter) for the text. The active state is a `surface_container_highest` pill background.
*   **Buttons:**
    *   **Primary:** Ezeat Blue (`primary`) background with `on_primary` (White) text. Use `roundedness-md` (0.375rem) for a corporate yet accessible feel.
    *   **Secondary:** No background. Use a `ghost-border` (15% opacity `outline`) and `primary` text.

### Cards & Feature Sections
*   **Constraint:** Forbid the use of divider lines.
*   **Separation:** Use `spacing-xl` (Vertical White Space) or subtle shifts between `surface` and `surface_container`. 
*   **Images:** All imagery (like the auto-payment machines from the reference) should have a `roundedness-lg` (0.5rem) and be placed in containers that slightly overlap section boundaries to break the grid.

### Input Fields
*   **State:** Use `surface_container_lowest` for the field background. 
*   **Interaction:** On focus, the "Ghost Border" transitions to a 1px `primary` border to signal intent without cluttering the initial view.

---

## 6. Do's and Don'ts

### Do:
*   **Embrace Asymmetry:** Place a large headline on the left and the supporting body text offset to the right.
*   **Use Tonal Shifts:** Rely on the difference between `#fbf8ff` and `#f3f2ff` to tell the user they have moved to a new section.
*   **Type Hierarchy:** Use `display-sm` for sub-headlines to maintain the "Editorial" feel.

### Don't:
*   **No Boxes in Boxes:** Avoid nesting a card inside a bordered container. Use the "Layering Principle" instead.
*   **No Pure Black:** Never use `#000000` for text or shadows. Always use the `on_surface` (#1a1b24) token for a softer, more premium look.
*   **No Default Grids:** Don't just stack three cards in a row. Try a 2+1 layout where one card is larger to highlight a "Featured Service."

### Accessibility Note:
While we use "Ghost Borders" and subtle shifts, ensure that all text against background colors maintains a contrast ratio of at least 4.5:1. Use `on_surface_variant` (#444655) for secondary text to ensure it remains legible against the light surface tints.