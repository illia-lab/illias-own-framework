import { expect } from 'chai';

class Base {
  selector: string;
  name: string;
  constructor(selector: string, name: string) {
    this.selector = selector;
    this.name = name;
  }
  logMyInfo() {
    console.log(`constructor:${this.constructor.name}, selector:${this.selector},name:${this.name}`);
  }
}

class Element extends Base {
  constructor(selector: string, name: string) {
    super(selector, name);
  }

  get() {
    return `${`get method is executed by ${this.constructor.name}, selector:${this.selector},name:${this.name}`}`;
  }
  click() {
    return `${`click method is executed by ${this.constructor.name}, selector:${this.selector},name:${this.name}`}`;
  }
}

class Page extends Base {
  fieldName: Element;
  fieldPassword: Element;
  fieldEmail: Element;
  constructor(selector, name) {
    super(selector, name);
    this.fieldName = new Element('#name', 'User name');
    this.fieldPassword = new Element('#password', 'User password');
    this.fieldEmail = new Element('#email', 'User email');
  }

  get(requiredFieldsData: { fieldName?: null; fieldPassword?: null; fieldEmail?: null }): {
    fieldName?: string;
    fieldEmail?: string;
    fieldPassword?: string;
  } {
    const keys = Object.keys(requiredFieldsData);

    const data = {};

    for (const key of keys) {
      data[key] = this[key].get(); //this = new Page('','')
    }
    return data;
  }
  click(requiredFieldsData: { fieldName?: null; fieldPassword?: null; fieldEmail?: null }): {
    fieldName?: string;
    fieldEmail?: string;
    fieldPassword?: string;
  } {
    const keys = Object.keys(requiredFieldsData);

    const data = {};

    for (const key of keys) {
      data[key] = this[key].click();
    }
    return data;
  }
}

describe('Child properties interactions', () => {
  it('get class properties info based on required fields', () => {
    const pageFirst = new Page('#main_page', 'Main page');

    const result = pageFirst.get({ fieldEmail: null });
    const res = { fieldEmail: 'get method is executed by Element, selector:#email,name:User email' };
    expect(result).to.deep.equal(res);

    console.log(result);
  });

  it('click on class properties info based on required fields', () => {
    const pageFirst = new Page('#main_page', 'Main page');

    const result = pageFirst.click({ fieldEmail: null });
    const res = { fieldEmail: 'click method is executed by Element, selector:#email,name:User email' };
    expect(result).to.deep.equal(res);

    console.log(result);
  });
  it('assign obj props via variables', () => {
    const obj: { [key: string]: any } = {};
    const var1 = 'myField';
    obj.fn = 'myField';
    obj[var1] = 'fn';
    console.log(obj);
  });
  it('assign obj props via variables', () => {
    const obj = {
      first: 1,
      second: 'some str',
      third: {
        logMe: function () {
          console.log('!!!!!!!!!!!!!');
        },
      },
    };

    const propName1 = 'first';
    const propName2 = 'second';
    const propName3 = 'third';

    obj[propName3].logMe();
  });

  it('getting obj prop names and them one by one', () => {
    const obj = {
      first: 1,
      second: 'some str',
      third: [1, 2, 3],
    };
    const objPropNames = Object.keys(obj); //[ 'first', 'second', 'third' ]
    for (const key of objPropNames) {
      console.log(key);
    }
    console.log(objPropNames);
  });
  it('obj properties gets prop value', () => {
    const obj = {
      first: 1,
      second: 'some str',
    };

    const propName = 'first';

    console.log(obj['second']);
    console.log(obj[propName]);
  });
});
