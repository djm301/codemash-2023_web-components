import { html } from "lit";
import "./index";

/**added switch-change to handles */
export default {
  title: "Components/Switch",
  component: "my-switch",
  argTypes: {
    label:{
      control: {type: "text"},
    },
    labelPosition: {
        control: 'radio',
        options: ['top','start','end','auto']
    }
  },
  
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
  return html` 
    <style>
      my-switch{
        --size: ${args['--size']}
      }
      </style>
    <my-switch label="${args.label}" ?checked="${args.checked}" ?disabled="${args.disabled}" label-position="${args.labelPosition}"></my-switch> `;
};

// bind template to example
export const Default: any = DefaultTemplate.bind({});
Default.args = {
  label: 'Don Miller',
  labelPosition: 'top',
  '--size': '1rem'

};

const ExternalInteractionTemplate = ()=>{
  return html `
  <button class="toggle-button"> Toggle</button>
  <br>
  <br>
  <my-switch label="Toggle example"></my-switch>
  <script> 
    const button = document.querySelector('button');
    const mySwitch - document.querySelector('my-switch');
    button.addEventListener('click', () => mySwitch.toggle()); /* make sure nobody makes my component private*/
    </script>
  `;
}

export const ExternalInteractionTemplate: any = ExternalInteractionTemplate;
ExternalInteractionTemplate.args={};

