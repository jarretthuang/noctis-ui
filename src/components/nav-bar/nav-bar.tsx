import { Component, Element, Prop, State, h } from "@stencil/core";
import { MenuSVG } from "../utils/MenuSVG";
import { CloseSVG } from "../utils/CloseSVG";

@Component({
  tag: "nui-nav-bar",
  styleUrl: "nav-bar.css",
  shadow: false,
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
      (child) => child.tagName.toLowerCase() === "nui-nav-bar-item"
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
      return <nui-nav-bar-item to={to} name={name} />;
    });
    return <ul class="item-list">{items}</ul>;
  };

  private _expandedCssClass = () => {
    return this.isExpanded ? "expanded" : "";
  };

  private _renderMenuToggle = () => {
    if (this.isExpanded) {
      return (
        <CloseSVG
          onClick={() => (this.isExpanded = false)}
          cssClass="w-14 p-3 md:hidden"
          fillCssClass="fill-color"
        />
      );
    } else {
      return (
        <MenuSVG
          onClick={() => (this.isExpanded = true)}
          cssClass="w-14 p-3.5 md:hidden"
          fillCssClass="fill-color"
        />
      );
    }
  };

  render() {
    const { logo_url, logo_name } = this;
    return (
      <nav class={"nav-bar " + this._expandedCssClass()}>
        <div class="content-container">
          <img class="logo-image" src={logo_url} alt={logo_name} />
          <div class="curtain"></div>
          {this._renderItems()}
          {this._renderMenuToggle()}
        </div>
      </nav>
    );
  }
}
