/** @type { import('@storybook/react').Preview } */
import "../src/app/globals.css";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    // layout: "centered",
    viewport: {
      viewports: {
        // Define specific viewports with desired widths
        desktop: {
          name: "Desktop",
          styles: {
            width: "1440px", // Set the desired width for the desktop viewport
            height: "800px", // Set the desired height
          },
        },
        tablet: {
          name: "Tablet",
          styles: {
            width: "768px", // Set the desired width for the tablet viewport
            height: "1024px", // Set the desired height
          },
        },
        mobile: {
          name: "Mobile",
          styles: {
            width: "375px", // Set the desired width for the mobile viewport
            height: "667px", // Set the desired height
          },
        },
      },
      defaultViewport: "mobile",
    },
  },
};

export default preview;
