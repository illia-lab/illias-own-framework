import { browser, $, $$, getDriver } from '../lib';
import { waitForCondition } from 'sat-utils';

describe('dummy ui test suite', function () {
  it.only('dummy ui test case', async function () {
    const url = 'http://localhost:4000';
    await getDriver(browser);
    await browser.get(url);
    const username = $('[placeholder="User name"]');
		const password = $('[placeholder="Password"]');
		const login = $('.modal button')
    await waitForCondition(async function () {
      return (await username.isDisplayed()) && (await password.isDisplayed());
		});
		await username.sendKeys('admin')
		await password.sendKeys('admin')
		await login.click()

		await browser.sleep(2000)
  });
});
