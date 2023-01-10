import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { styles } from './my-switch.styles';


/**
 * Switches allow the user to toggle an option on or off.
 * 
 * @tag my-switch
 *
 */
@customElement('my-switch')
export class MySwitch extends LitElement {
  static styles = styles;

  /** this is used to describe the switch - djm */
  @property() label?: string;

  /** indicates if switch is on or off 
   * set default to false  @property name:type lit has built in translators eg type:Boolean so it won't make it a string*/
  @property({type:Boolean}) checked:boolean = false;

/** add a method to toggle switch..now lets add an event listener */
  public toggle(){
    this.checked = !this.checked;
  }
/**create a custom event don't name it the same as standard html event names if you can namespace them */
  private emitChange(){
    this.dispatchEvent(new CustomEvent('switch-change',{
      detail: {
        checked: this.checked
      },
      bubbles:true
    }
    ))
  }
  // role = switch is for accessibility
  render() {
    return html`
      <label id="switch-label"> ${this.label} </label>
      <button role="switch"  class="control"  @click=${this.toggle} labelledby="switch-label" aria-checked="${this.checked}"></button>
      <div class="track">
        <div class="switch">  </div>
        
      </div>
        `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-switch': MySwitch
  }
}
