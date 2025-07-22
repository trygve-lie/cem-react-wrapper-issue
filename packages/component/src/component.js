import { html, LitElement } from 'lit';

/**
 *
 * Test Box component
 *
 * @tag test-box
 *
 * @since 1.0.0
 *
 * @status beta - not ready for production
 *
 * @spec https://vend.com/...
 *
 * @attribute { string } custom - Some custom attribute on the box.
 * 
 */

class TestBox extends LitElement {
  static properties = {
    bespoke: { type: String, reflect: true, useDefault: true },
    custom: { type: String, reflect: true, useDefault: true },
  };

  constructor() {
    super();
    this.bespoke = 'bespoke-value';
    this.custom = 'custom-value';
  }

  render() {
    return html`
      <div custom="${this.custom}" bespoke="${this.bespoke}">
        I am a box: <slot></slot>
      </div>
    `;
  }
}

if (!customElements.get('test-box')) {
  customElements.define('test-box', TestBox);
}

export { TestBox };