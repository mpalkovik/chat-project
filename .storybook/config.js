import { configure, addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { viewports } from "./viewports";

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...viewports,
    },
  },
});

function loadStories() {
  require("../src/stories");
  // You can require as many stories as you need.
}

configure(loadStories, module);
