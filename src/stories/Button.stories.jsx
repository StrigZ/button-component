// Button.stories.js|jsx

import React from "react";

import Button from "../Button";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
  parameters: { controls: { sort: "requiredFirst" } },
  argTypes: {
    variant: {
      options: ["default", "outline", "text"],
      control: "inline-radio",
    },
    size: {
      options: ["sm", "md", "lg"],
      control: "inline-radio",
    },
    color: {
      options: ["default", "primary", "secondary", "danger", "custom"],
      control: "inline-radio",
    },
    customColor: {
      control: "color",
      if: { arg: "color", eq: "custom" },
    },
    customBackgroundColor: {
      control: "color",
      if: { arg: "color", eq: "custom" },
    },
    disabled: {
      control: "boolean",
    },
    disableShadow: {
      control: "boolean",
    },
    startIcon: {
      options: ["close", "settings", "done", "file_download", "file_upload"],
      control: "radio",
    },
    endIcon: {
      options: ["close", "settings", "done", "file_download", "file_upload"],
      control: "radio",
    },
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

//👇 Each story then reuses that template

export const Default = Template.bind({});
Default.args = {
  label: "Default",
  disabled: false,
  disableShadow: false,
  variant: "default",
};
