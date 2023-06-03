// 1、给变量添加基本类型
// string number boolean
let str: string = 'hello TypeScript'
let num: number = 123
let boolean: boolean = true
console.log(str, num, boolean);

// 2、给对象添加基本类型
let product: {
    title: string;
    price: number;
    inStock: boolean;
} = {
    title: "纯棉T恤",
    price: 99.8,
    inStock: true,
};
// 2-1）使用type关键字定义可复用的对象类型
type Product = {
    title: string;
    price: number;
    inStock: boolean;
}
let product1: Product = {
    title: "纯棉T恤",
    price: 99.8,
    inStock: true,
};
let product2: Product = {
    title: "牛仔裤",
    price: 66,
    inStock: false,
};
// 2-2）可选的对象类型属性
// > 这里的instock属性是可选的，即可以有也可以没有
type Product2 = {
    title: string;
    price: number;
    inStock?: boolean;
}
let product3: Product2 = {
    title: "纯棉T恤",
    price: 99.8,
};
// 3、type annotation 类型注释
// ts会自动推断变量的类型，但是我们也可以自己注释变量的类型
let str = 'hello world'
let num = 456
let boolean = false

// 4、interface关键字（类似于type关键字的用法
// 4、使用interface关键字定义对象类型
interface Product {
    title: string;
    price: number;
    inStock?: boolean;
}
let product: Product = {
    title: "纯棉T恤",
    price: 99.8,
    inStock: true,
};
// 5、使用interface关键字定义函数类型
interface Discount {
    (price: number): number;
}
let discount: Discount = function (price) {
    return price * 0.8;
}
// 6、使用interface关键字定义可索引类型
interface Post {
    [key: string]: string;
}
let post: Post = {
    title: "Hello TypeScript",
    content: "TypeScript is a typed superset of JavaScript.",
};
// 7、使用interface关键字定义类类型
interface Animal {
    name: string;
    eat(food: string): void;
}
class Cat implements Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat(food: string) {
        console.log(`${this.name} likes eating ${food}`);
    }
}
let cat = new Cat("Tom");
cat.eat("fish");
// 8、使用interface关键字定义继承类型
interface Animal {
    name: string;
    eat(food: string): void;
}
interface Cat extends Animal {
    run(speed: number): void;
}
class Tiger implements Cat {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat(food: string) {
        console.log(`${this.name} likes eating ${food}`);
    }
    run(speed: number) {
        console.log(`${this.name} runs at ${speed} km/h`);
    }
}
let tiger = new Tiger("Tom");
tiger.eat("fish");
tiger.run(60);
// 9、使用interface关键字定义混合类型
interface Counter {
    (): void;
    count: number;
}
function getCounter(): Counter {
    let counter = function () {
        counter.count++;
    } as Counter;
    counter.count = 0;
    return counter;
}
let counter = getCounter();
counter();
console.log(counter.count);
counter();
console.log(counter.count);
counter();
console.log(counter.count);
// 10、使用interface关键字定义接口继承类
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat(food: string) {
        console.log(`${this.name} likes eating ${food}`);
    }
}
interface Cat extends Animal {
    run(speed: number): void;
}
class Tiger extends Animal implements Cat {
    constructor(name: string) {
        super(name);
    }
    run(speed: number) {
        console.log(`${this.name} runs at ${speed} km/h`);
    }
}
let tiger = new Tiger("Tom");
tiger.eat("fish");
tiger.run(60);
// 11、使用interface关键字定义接口继承多个接口
interface Animal {
    name: string;
    eat(food: string): void;
}
interface Cat {
    run(speed: number): void;
}
interface Tiger extends Animal, Cat {
    sleep(hours: number): void;
}
class Lion implements Tiger {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat(food: string) {
        console.log(`${this.name} likes eating ${food}`);
    }
    run(speed: number) {
        console.log(`${this.name} runs at ${speed} km/h`);
    }
    sleep(hours: number) {
        console.log(`${this.name} sleeps ${hours} hours`);
    }
}
let lion = new Lion("Tom");
lion.eat("meat");
lion.run(60);
lion.sleep(8);
// 12、使用interface关键字定义接口继承多个类
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat(food: string) {
        console.log(`${this.name} likes eating ${food}`);
    }
}
class Cat {
    run(speed: number) {
        console.log(`Cat runs at ${speed} km/h`);
    }
}
interface Tiger extends Animal, Cat {
    sleep(hours: number): void;
}
class Lion extends Animal implements Tiger {
    constructor(name: string) {
        super(name);
    }
    eat(food: string) {
        console.log(`${this.name} likes eating ${food}`);
    }
    run(speed: number) {
        console.log(`${this.name} runs at ${speed} km/h`);
    }
    sleep(hours: number) {
        console.log(`${this.name} sleeps ${hours} hours`);
    }
}
let lion = new Lion("Tom");
lion.eat("meat");
lion.run(60);
lion.sleep(8);
// 13、使用interface关键字定义接口继承多个类和接口
interface Animal {
    name: string;
    eat(food: string): void;
}
class Cat {
    run(speed: number) {
        console.log(`Cat runs at ${speed} km/h`);
    }
}
interface Tiger extends Animal, Cat {
    sleep(hours: number): void;
}
class Lion implements Tiger {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat(food: string) {
        console.log(`${this.name} likes eating ${food}`);
    }
    run(speed: number) {
        console.log(`${this.name} runs at ${speed} km/h`);
    }
    sleep(hours: number) {
        console.log(`${this.name} sleeps ${hours} hours`);
    }
}
let lion = new Lion("Tom");
lion.eat("meat");
lion.run(60);
lion.sleep(8);
// typescript中的type关键字和interface关键字的区别
// 1、type关键字可以定义基本类型别名，interface关键字不可以
type Name = string;
let name: Name = "Tom";
// interface Name = string; // 报错
// 2、type关键字可以定义联合类型，interface关键字不可以
type Name = string | string[];
let name: Name = "Tom";
name = ["Tom", "Jerry"];
// interface Name = string | string[]; // 报错
// 3、type关键字可以定义元组类型，interface关键字不可以
type Name = [string, number];
let name: Name = ["Tom", 25];
// interface Name = [string, number]; // 报错
// 4、type关键字可以定义任意类型，interface关键字不可以
type Name = any;
let name: Name = "Tom";
name = 25;
name = ["Tom", "Jerry"];
// interface Name = any; // 报错
// 5、type关键字可以定义函数类型，interface关键字不可以
type Name = (name: string) => string;
let name: Name = function (name) {
    return name;
}
// interface Name = (name: string) => string; // 报错
// 6、type关键字可以定义类类型，interface关键字不可以
type Name = new (name: string) => string;
function createName(ctor: Name, name: string) {
    return new ctor(name);
}
class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}
let person = createName(Person, "Tom");
console.log(person.name);
// interface Name = new (name: string) => string; // 报错
// 7、type关键字可以定义交叉类型，interface关键字不可以
type Name = { name: string } & { age: number };
let name: Name = { name: "Tom", age: 25 };
// interface Name = { name: string } & { age: number }; // 报错
// 8、type关键字可以定义类型别名，interface关键字不可以
type Name = string;
let name: Name = "Tom";
// interface Name = string; // 报错
