import { Component, Element, Prop, State, h } from "@stencil/core";

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
   * Navigation items
   */
  @Prop() nav_items: string[];

  @Element() host: HTMLDivElement;

  @State() children: Array<any> = [];

  componentWillLoad() {
    const children = Array.from(this.host.children);
    this.children = children
      .filter((child) => child.tagName.toLowerCase() === "li")
      .map((liChild) => liChild.outerHTML);
  }

  renderItemList = () => {
    const items = this.nav_items.map((item: string) => <li>{item}</li>);
    return <ul>{items}</ul>;
  };

  render() {
    const imageSrc = this.logo_url;
    return (
      <nav class="flex h-14 justify-center bg-slate-200/50 backdrop-blur-sm duration-500 md:h-12">
        <div class="flex w-full max-w-5xl items-center justify-between">
          <img class="nav-bar-item" src={imageSrc} />
          <ul>{this.children}</ul>
          <svg
            class="nav-bar-item group cursor-pointer md:hidden"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              class="fill-slate-900/80 group-hover:fill-slate-900"
              d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"
            />
          </svg>
        </div>
      </nav>
    );
  }
}
