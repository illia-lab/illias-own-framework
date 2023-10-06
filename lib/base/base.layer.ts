import { waitForCondition } from 'sat-utils';
import type { PromodElementType } from 'promod/built/interface';
import { $ } from '../engine';

class BaseLayer {
  root: PromodElementType;
  id: string;
  constructor(selector: string | PromodElementType, name: string) {
    this.root = typeof selector === 'string' ? $(selector) : selector;
    this.id = name;
  }

  /**
   * method waitForPresent check that element is presented in web page
   */

  async waitForPresent() {
    const that = this;
    await waitForCondition(
      async function () {
        return await that.root.isPresent();
      },
      {
        timeout: 5000,
        message: function () {
          return `this root ${that.constructor.name} ${that.id} should be presented in DOM`;
        },
      },
    );
  }

  /**
   * method waitForDisplay check that element is displayed in web page
   */

  async waitForDisplay() {
    const that = this;
    await waitForCondition(
      async function () {
        return await that.root.isDisplayed();
      },
      {
        timeout: 5000,
        message: function () {
          return `this root ${that.constructor.name} ${that.id} should be displayed in DOM`;
        },
      },
    );
  }
}

export { BaseLayer };
