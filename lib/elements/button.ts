import { Element } from "../base/base.element";
import type { PromodElementType } from "promod/built/interface";

class Button extends Element {
  constructor(selector: string | PromodElementType, name: string) {
    super(selector, name);
  }

  async get() {
    await this.waitForDisplay();

    return await this.root.getText();
  }
}

export {Button}