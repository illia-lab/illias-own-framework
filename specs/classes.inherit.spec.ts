import { expect } from 'chai';

class Base {
  selector: string;
  name: string;
  constructor(selector: string, name: string) {
    this.selector = selector;
    this.name = name;
	}
	logMyInfo() {
		console.log(` class name:${this.constructor.name} | selector:${this.selector} | name:${this.name}`);
	}
}

class Element extends Base{
	constructor(selector:string, name: string) {
		super(selector,name)

	}
}

describe('Child class', () => {
	it('dummy coding', () => {
		const myBase = new Base('some selector', 'some name')
		myBase.logMyInfo()
		const myElement = new Element('div selector', 'div dummy name')
		myElement.logMyInfo()
	});
});
