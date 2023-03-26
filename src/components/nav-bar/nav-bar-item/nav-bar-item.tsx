import { Component, Prop, h } from "@stencil/core";
@Component({
  tag: "nui-nav-bar-item",
  styleUrl: "nav-bar-item.css",
  shadow: false,
})
export class Modal {
  /**
   * Link to the redirected location
   */
  @Prop() to: string;

  /**
   * Name of the nav bar item
   */
  @Prop() name: string;

  render() {
    const { to, name } = this;
    return (
      <li class="nav-bar-item">
        <a href={to} rel="noopener noreferrer">
          <div>{name}</div>
        </a>
      </li>
    );
  }
}
