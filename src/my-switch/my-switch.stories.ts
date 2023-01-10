import { html } from "lit";
import "./index";

/**added switch-change to handles */
export default {
  title: "Components/Switch",
  component: "my-switch",
  argTypes: {},
  parameters: {
    actions: {
      handles: ['switch-change'],
    },
  },
};

/*
bind the label to this
checked bound to true or false..you can add ? prefix which will evalute if true add this attribute
*/
const DefaultTemplate = (args: any) => {
  return html` <my-switch label="${args.label}" ?checked="${args.checked}"></my-switch> `;
};

// bind template to example
export const Default: any = DefaultTemplate.bind({});
Default.args = {
  label: 'Don Miller'

};

