# Skip-Page-UI
# Project Overview
This React application allows users to select from different business skip options displayed as cards. Each card shows an image, a title, a hire period, and a price. The skips are sorted by price and displayed in a responsive 3-column grid layout.

# Features Implemented
Dynamic Skip Cards: Cards render dynamically from an array of skip data including title, price, and hire period.

Price Sorting: Skip cards are sorted from lowest to highest price before rendering.

Responsive Grid: Cards are displayed in a 3-column grid with appropriate spacing and sizing.

Selection Handling: Clicking a card selects it visually and enables the Continue button.

Animated Card Entrance: Cards animate into view with different entrance effects based on their position in the grid:

Left column cards slide in from the left.

Middle column cards slide in from top on the first row, and from bottom on the second row.

Right column cards slide in from the right.

Animation Timing: Animations are staggered with delays for a smooth, sequential appearance, each animation lasting 2.6 seconds.

Clean UI/UX: Professional card design with hover effects and clear call-to-action buttons.

# Code Structure
src/App.js: Main component rendering the grid of skip cards, managing selection state, sorting data, and applying animation classes.

src/components/SkipCard.jsx: Reusable card component displaying individual skip details and image.

src/App.css: Styling for layout, cards, animations, buttons, and overall UI.
