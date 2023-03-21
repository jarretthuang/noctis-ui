import { Component, Element, Prop, State, h } from "@stencil/core";
import { NavBarItem } from "./inner/NavBarItem";

@Component({
  tag: "nav-bar",
  styleUrl: "nav-bar.css",
  shadow: true,
})
export class NavBar {
  /**
   * URL of the logo image
   */
  @Prop() logo_url: string;

  /**
   * Name of the logo
   * Used as a default placeholder if logo image is not available
   */
  @Prop() logo_name: string;

  /**
   * Element that represents the current component instance
   */
  @Element() host: HTMLElement;

  /**
   * Array that represents the nav bar items
   */
  @State() items: Element[];

  /**
   * True if nav bar is expanded
   */
  @State() isExpanded: boolean;

  componentWillLoad() {
    this.items = Array.from(this.host.children).filter(
      (child) => child.tagName.toLowerCase() === "nav-bar-item"
    );
    this.host.innerHTML = "";
    window.onresize = () => {
      this.isExpanded = false;
    };
  }

  private _renderItems = () => {
    const items = this.items.map((child: Element) => {
      const name = child.textContent;
      const to = child.getAttribute("to");
      return <NavBarItem to={to} name={name} />;
    });
    return (
      <ul class="invisible flex h-full w-0 md:visible md:w-auto">{items}</ul>
    );
  };

  private _expandedCssClass = () => {
    return this.isExpanded ? "expanded" : "";
  };

  private _renderMenuToggle = () => {
    if (this.isExpanded) {
      return (
        <svg
          class="close-menu group w-14 cursor-pointer p-3 md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          onClick={() => (this.isExpanded = false)}
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            class="svg-path"
            d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
          />
        </svg>
      );
    } else {
      return (
        <svg
          class="open-menu group w-14 cursor-pointer p-3.5 md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          onClick={() => (this.isExpanded = true)}
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            class="svg-path"
            d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"
          />
        </svg>
      );
    }
  };

  render() {
    const { logo_url, logo_name } = this;
    return (
      <nav class={"nav-bar " + this._expandedCssClass()}>
        <div class="flex h-full w-full max-w-5xl items-center justify-between">
          <img
            class="max-h-full object-contain p-3 md:p-2"
            src={logo_url}
            alt={logo_name}
          />
          <div class="curtain"></div>
          {this._renderItems()}
          {this._renderMenuToggle()}
        </div>
      </nav>
    );
  }
}
