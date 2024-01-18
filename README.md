# Fundraising Website
### Live demo: https://fundraising-medito.netlify.app/
## Overview
Welcome to my submission of the fundraising web page for Medito. This project is a single-page web application built using React, shadcn/ui, and Tailwind CSS. The primary goal is to provide a versatile and visually appealing platform for fundraising initiatives, allowing for easy customization and adaptation to various campaigns.

### Important Note
This project was completed within a tight timeframe due to discovering the competition late. The entire web page was developed in a single evening, showcasing the project's flexibility and ease of customization even within a short time frame.

## Project details
### Technologies used
* **React**: The web page is built with React, providing a dynamic and efficient user interface.
* **shadcn/ui**: UI components,  aesthetic appeal and customization options. **Very customizable library**
* **Tailwind CSS**: Tailwind CSS for styling, ensuring a clean, modern, and highly customizable design

### API Integration
API integration could be easily incorporated. The codebase makes it easy to integrate with external APIs. Unfortunately, due to the limited timeframe, detailed API integration has not been implemented in this version.

## Documentation
### index.css
* Color palette is defined using CSS variables for easy customization. A tool for easy theme creation: [https://ui.shadcn.com/themes]
* Dark mode option is included
* The .content-grid class sets up a responsive grid system for the page content. It includes:
  - --padding-inline: Padding on the left and right of the content grid.
  - --content-max-width: Maximum width for the main content.
  - --breakout-max-width: Maximum width for breakout sections.
  - --breakout-size: Calculated size for breakout sections.
  - Grid columns are defined for a full-width start, breakout start, content start, content end, breakout end, and full-width end.
### Dark theme
* Dark theme is incorporated using [https://ui.shadcn.com/docs/dark-mode/vite]
### Data & further API integration
* Data is currently stored as dummy data inside [https://github.com/jradziejewski/react-fundraising/blob/main/src/utils/data.ts].
* It could be easily fetched from an external API, although there are few things to consider:
  - in the current state we should only fetch last 5 donators,
  - some hooks should be added that would handle converting `timestamps` to `howLongAgo`

## If I had more time...
* I initially wanted to create a Remix project, but decided to go for simpler approach using only React and dummy data
* I would use external API instead of dummy data
* I would provide util functions that would for example convert timestamps to `howLongAgo`
* ... and probably I should add some things here, but well - time's ticking...

## Summary
The main goal of this is to demonstrate  adaptability and customization capabilities for various fundraising goals. I focused mostly on a clean and modern design, laying the groundwork for potential future enhancements and integrations.

The goal was not to create actually properly functional fundraising webpage as unfortunately I couldn't fit in the time limit.
