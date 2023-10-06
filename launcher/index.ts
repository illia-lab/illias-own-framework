import {browser, getDriver} from '../lib';


before(async function () {
  console.log('It is general mocha hook before');
 await getDriver(browser);
});

after(async function () {
  console.log('It is general mocha hook after');
  await browser.quitAll();
});
