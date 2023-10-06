import {BaseLayer} from "./base.layer";
import type { PromodElementType } from "promod/built/interface";


class Element extends BaseLayer {
  constructor(selector: string | PromodElementType, name: string) {
    super(selector, name);
  }

  async sendKeys(value: string | number) {
    await this.waitForDisplay();
    await this.root.sendKeys(value);
  }

  async click() {
    await this.waitForDisplay();
    await this.root.click();
  }
}

export {Element}