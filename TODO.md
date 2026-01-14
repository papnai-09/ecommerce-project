# Make All Pages Responsive

## Information Gathered
- Project uses Next.js with Tailwind CSS, which supports responsive design.
- Many components already use responsive grid classes (e.g., grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4).
- Headers use w-[93%] max-w-7xl, which is responsive.
- HeroCarousel has responsive height (h-[300px] md:h-[360px]).
- Auth pages (login, signup) use max-w-md with px-4, generally responsive.
- Admin dashboard uses responsive grids.

## Issues Identified
- Fixed widths for logos (w-28) in auth pages; may be too large on very small screens.
- Cart page uses fixed w-28 h-28 for product images; not responsive.
- Admin sidebar uses fixed w-64 (expanded) and w-20 (collapsed); not responsive on mobile.
- Some components may need better mobile padding or adjustments.

## Plan (Approved)
1. Update auth pages (login, signup, forgot-password, reset-password, verify-otp) to make logos responsive (w-24 sm:w-28).
2. Update cart page to make product images responsive (w-full h-auto max-w-28 max-h-28).
3. Update admin layout and sidebar to be responsive:
   - Change layout to flex-col on mobile, flex-row on md+.
   - Make sidebar w-full on mobile, w-64/w-20 on md+.
4. Ensure all pages have consistent mobile padding (px-4 already in many).
5. Test and adjust any other fixed widths if needed.

## Dependent Files
- frontend/app/login/page.tsx
- frontend/app/signup/page.tsx
- frontend/app/forgot-password/page.tsx
- frontend/app/reset-password/page.tsx
- frontend/app/verify-otp/page.tsx
- frontend/app/cart/page.tsx
- frontend/app/admin/layout.tsx
- frontend/app/admin/components/Sidebar.tsx

## Implementation Progress
- [x] Update auth pages logos
- [x] Update cart images
- [x] Update admin layout and sidebar

## Followup Steps
- Test on different screen sizes (mobile, tablet, desktop).
- Ensure no layout breaks.
- If needed, add media queries or adjust further.
