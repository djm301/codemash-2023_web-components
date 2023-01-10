import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { styles } from './my-switch.styles';
import {styleMap} from 'lit/directives/style-map.js'


/**
 * Switches allow the user to toggle an option on or off.
 * 
 * @tag my-switch
 * @event switch-change - emitted whenever the switch is toggled
 * @cssprop [--size=1rem] 
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

  /** indicates if switch is disabled */
  @property({type:Boolean}) disabled:boolean = false;

  @property({attribute: 'label-position'}) labelPosition: 'top' | 'start' | 'end' | 'bottom' = 'top';


/** add a method to toggle switch..now lets add an event listener */
  public toggle(){
    if(this.disabled){
      return;
    }
    this.checked = !this.checked;
    this.emitChange();
  }
/**create a custom event don't name it the same as standard html event names if you can namespace them */
private emitChange() {
  this.dispatchEvent(new CustomEvent('switch-change', {
    detail: {
      checked: this.checked
    },
    bubbles: true
  }))
}
 

  private positionMapper(){
    return {
      top: 'column',
      start: 'row',
      end: 'row-reverse',
      bottom: 'column-reverse'
    }[this.labelPosition] || 'column'
  }
  // role = switch is for accessibility
  render() {
    return html`
      <div class="base" style="${styleMap({
        display: 'flex',
        flexDirection: this.positionMapper()
      })}">
      </div>
      <label id="switch-label"> ${this.label} </label>
      <button role="switch"  class="control"  @click=${this.toggle} labelledby="switch-label" aria-checked="${this.checked}" ?disabled="${this.disabled}"></button>
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
