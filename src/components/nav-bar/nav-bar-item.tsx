import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "nav-bar-item",
})
export class NavBarItem {
  /**
   * Name of the nav bar item
   */
  @Prop() name: string;

  /**
   * Redirect target of the nav bar item
   */
  @Prop() target: string;

  render() {
    return (
      <li class="flex h-full w-full cursor-pointer text-lg uppercase hover:bg-slate-500/80 hover:text-slate-50">
        <a
          class="flex h-full w-full select-none items-center px-8"
          href={this.target}
        >
          <div>{this.name}</div>
        </a>
      </li>
    );
  }
}
