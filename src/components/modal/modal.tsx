import { Component, Prop, h } from "@stencil/core";
@Component({
  tag: "nui-modal",
  shadow: false,
})
export class Modal {
  /**
   * Header of the modal
   */
  @Prop() header: string;

  render() {
    return (
      <div class="nt-modal">
        <div class="modal-header">{this.header}</div>
      </div>
    );
  }
}
