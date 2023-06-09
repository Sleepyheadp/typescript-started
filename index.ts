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
// 4-1）使用interface关键字定义对象类型
interface Product1 {
    title: string;
    price: number;
    inStock?: boolean;
}
let product: Product1 = {
    title: "纯棉T恤",
    price: 99.8,
    // inStock: true,
};
// 4-2）使用interface关键字定义函数类型
interface Discount {
    (price: number): number;
}
let discount: Discount = function (price) {
    return price * 0.8;
}
// 4-3）使用interface关键字定义可索引类型
interface Post {
    [key: string]: string;
}
let post: Post = {
    title: "Hello TypeScript",
    content: "TypeScript is a typed superset of JavaScript.",
};
// 4-4）使用interface关键字定义类类型
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
// 4-5）使用interface关键字定义继承类型
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
// 4-6）使用interface关键字定义混合类型
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
// 4-7）使用interface关键字定义接口继承类
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
// 4-8）使用interface关键字定义接口继承多个接口
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
// 4-9）使用interface关键字定义接口继承多个类
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
// 4-10）使用interface关键字定义接口继承多个类和接口
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
// 5、typescript中的type关键字和interface关键字的区别
// - type关键字可以定义基本类型别名，interface关键字不可以
type Name0 = string;
let name: Name0 = "Tom";
// interface Name = string; // 报错
// - type关键字可以定义联合类型，interface关键字不可以
type Name1 = string | string[];
let name1: Name1 = "Tom";
name1 = ["Tom", "Jerry"];
// interface Name = string | string[]; // 报错
// - type关键字可以定义元组类型，interface关键字不可以
// > 通俗的讲元组类型就是一个长度和类型都固定的数组
type Name2 = [string, number];
let name2: Name2 = ["Tom", 25];
// > 必须按照定义的顺序赋值，第一个元素必须是string类型，第二个元素必须是number类型 
// interface Name = [string, number]; // 报错
// - type关键字可以定义任意类型，interface关键字不可以
type Name3 = any;
let name3: Name3 = "Tom";
name3 = 25;
name3 = ["Tom", "Jerry"];
// interface Name = any; // 报错
// - type关键字可以定义函数类型，interface关键字不可以
type Name4 = (name: string) => string;
let name4: Name4 = function (name) {
    return name4;
}
// interface Name = (name: string) => string; // 报错
// - type关键字可以定义类类型，interface关键字不可以
type Name = new (name: string) => string;
class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}
function createName(ctor: Name, name: string): Person {
    return new ctor(name);
}
let person = createName(Person, "Tom");
console.log(person.name);
// interface Name = new (name: string) => string; // 报错
// - type关键字可以定义交叉类型，interface关键字不可以
type Name6 = { name: string } & { age: number };
let name6: Name6 = { name: "Tom", age: 25 };
// interface Name = { name: string } & { age: number }; // 报错
// - type关键字可以定义类型别名，interface关键字不可以
type Name7 = string;
let name7: Name7 = "Tom";
// interface Name = string; // 报错

// 6、定义嵌套的对象类型
interface Product {
    title: string;
    price: number;
    inStock: boolean;
    category: Category;
}

interface Category {
    name: string;
}

let product: Product = {
    title: "纯棉T恤",
    price: 20,
    inStock: true,
    category: {
        name: "上衣",
    },
};
// 7、给数组变量添加类型
let nums: number[] = [1, 2, 3, 4, 5];
let nums: Array<number> = [1, 2, 3, 4, 5];
interface Product {
    title: string;
    price: number;
    inStock: boolean;
}
let products: Product[] = [
    {
        title: "纯棉T恤",
        price: 20,
        inStock: true,
    },
    {
        title: "牛仔裤",
        price: 88,
        inStock: true,
    },
];
// 8、设置多个类型
let numericValue: number | string = 15;
numericValue = "15";

let args: string | string[];
args = "value1";
args = ["value1", "value2", "value3"];

interface Product {
    title: string;
    price: number;
    inStock: boolean;
}

let product: string | Product;
product = {
    title: "牛仔裤",
    price: 88,
    inStock: true,
};
console.log(product);

// 9、类型别名与值限定
// > 给price设置别名，给size设置值限定
type PriceNine = number | string;
type SizeNine = "S" | "M" | "L" | "XL";

interface ProductNine {
    title: string;
    price: PriceNine;
    inStock: boolean;
    size: SizeNine;
}

let productNine: ProductNine = {
    title: "牛仔裤",
    price: "￥98",
    inStock: true,
    size: "XL",
};

// 10、给函数参数添加类型
function addTen(a: number, b: number) {
    console.log(a + b);
}

addTen(1, 2);

function cmd(args: string | string[]) {
    // if (typeof args === "string") {
    //   console.log(args);
    // } else {
    //   console.log(args.join(" "));
    // }
}

interface ProductTen {
    title: string;
    price: number;
    inStock: boolean;
}

function printProductTitle(p: ProductTen) {
    console.log(p.title);
}
printProductTitle({ title: 'typescript', price: 10, inStock: true });

// 11、给函数返回值添加类型
function addEleven(a: number, b: number): number {
    return a + b;
}

const result = addEleven(1, 2);
console.log(result);
console.log(typeof result);

// 12、箭头函数的类型
const addTwelve = (a: number, b: number): number => a + b;
addTwelve(1, 2);
// map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
[1, 2, 3].map((x) => x * x);

// 13、函数作为参数值、变量值或对象方法时的类型
// > 定义了一个箭头函数类型的变量
// > 只是规定了函数是箭头函数和参数的类型（具体箭头函数的逻辑操作需要在调用时进行编辑）
type RequestCallback13 = (result: string) => void;

function request13(callback: RequestCallback13) {
    callback("sucess");
}
// 实参传递一个箭头函数作为参数
request13((result) => console.log(result));

interface Product13 {
    getPrice: () => number;
}
// 14、函数调用签名Call signature（定义额外属性的类型）
interface RequestCallback {
    (result: string): void;
    code: string;
}

function request(callback: RequestCallback) {
    callback("success");
    callback.code;
}

const callback: RequestCallback = (result) => console.log(result);
callback.code = "200";

request(callback);

// 15、any类型(任意类型)
let a: any = 10;
a = "10";
a = true;

function add(a: any, b: any) {
    return a + b;
}

add(1, 2);
add("22", true);

// 16、类型强制转换
let strOne: any = "hello";

let strTwo = str as string;

let strThree = <string>str;

// 17、泛型的使用
// 17-1）给函数添加泛型
function join<T>(arr1: T[], arr2: T[]): T[] {
    return [...arr1, ...arr2];
}

const res = join<string>(["1", "2", "3"], ["4", "5", "6"]);
res.map((x) => x.toUpperCase());

// 17-2）给对象类型添加泛型
interface Value<T> {
    value: T;
    description: string;
}

let stringValue: Value<string> = {
    value: "hello",
    description: "这是字符串类型的数据",
};

let numberValue: Value<number> = {
    value: 10,
    description: "这是数字类型的数据",
};
// 17-3）定义多个泛型参数
let map: Map<string, number> = new Map();
map.set("1", 1);
// map.set(2, 2);

function printType<T, K>(t: T, k: K) {
    console.log(typeof t, typeof k);
}

printType<string, number>("abc", 123);

// 17-4）泛型约束
interface Product {
    title: string;
    price: number;
    inStock: boolean;
}

interface TShirt extends Product {
    size: "S" | "M" | "L" | "XL";
}

function displayTitle<T extends Product>(t: T) {
    console.log(t.title);
}

let product: Product = {
    title: "牛仔裤",
    price: 80,
    inStock: true,
};

displayTitle<Product>(product);
// displayTitle<string>("abc");

let tshirt: TShirt = {
    title: "纯棉 T 恤",
    price: 66,
    inStock: true,
    size: "L",
};

displayTitle<TShirt>(tshirt);
// 18、interface类型继承
interface Product {
    title: string;
    price: number;
    inStock: boolean;
}

interface TShirt extends Product {
    size: "S" | "M" | "L" | "XL";
}

const tShirt: TShirt = {
    title: "纯棉 T 恤",
    price: 39,
    inStock: true,
    size: "L",
};
// 19、type定义的类型继承
type Product = {
    title: string;
    price: number;
    inStock: boolean;
};

type TShirt = Product & {
    size: "S" | "M" | "L" | "XL";
};

const tShirt: TShirt = {
    title: "纯棉 T 恤",
    price: 39,
    inStock: true,
    size: "L",
};
// 20、tsconfig文件简介
let productName: string = null;

interface Product {
    title: string;
    price: number;
    inStock: boolean;
}

function printProductPrice(p: Product) {
    console.log(p.price.toString());
}

printProductPrice(null);

function add(a, b) {
    return a + b;
}