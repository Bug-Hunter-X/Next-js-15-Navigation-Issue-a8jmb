# Next.js 15 Navigation Issue

This repository demonstrates a navigation issue in a Next.js 15 application.  Clicking a link to navigate to another page does not work as expected.

## Issue Description

The application consists of two pages: `index.js` and `about.js`.  A link on `index.js` is supposed to navigate to `about.js`. However, clicking the link does not cause the navigation to occur. The `about` page does not render.

## Steps to Reproduce

1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `http://localhost:3000`.
5. Click the link to go to the About page.

## Expected Behavior

The application should navigate to the about page when the link is clicked.

## Actual Behavior

The application does not navigate to the about page.  The about page is not rendered.

## Troubleshooting

Check the Network tab of your browser's developer tools to see if there are any network errors preventing the about page from loading.  Also check the console for any JavaScript errors.  Make sure that the routing is configured correctly in your Next.js application.