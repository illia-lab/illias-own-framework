import { browser, getDriver } from '../lib';
import { Input, Button } from '../lib';

describe('dummy ui test suite', function () {
  it.only('dummy ui test case', async function () {
    const url = 'http://localhost:4000';

    const userData = { username: 'admin', password: 'admin ' };
    await browser.get(url);
    const username = new Input('[placeholder="User name"]', 'User name field');
    const password = new Input('[placeholder="Password"]', 'Password field');
    const login = new Button('.modal button', 'Login button');
    await username.sendKeys(userData.username);
    await password.sendKeys(userData.password);

    console.log(await username.get(), '<<<<<<< USERNAME TEXT');
    console.log(await password.get(), '<<<<<< PASSWORD TEXT');
    console.log(await login.get(), '<<<<< LOGIN TEXT');

    await login.click();

    await browser.sleep(2000);
  });
});
