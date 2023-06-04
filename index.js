var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1、给变量添加基本类型
// string number boolean
var str = 'hello TypeScript';
var num = 123;
var boolean = true;
console.log(str, num, boolean);
// 2、给对象添加基本类型
var product = {
    title: "纯棉T恤",
    price: 99.8,
    inStock: true
};
var product1 = {
    title: "纯棉T恤",
    price: 99.8,
    inStock: true
};
var product2 = {
    title: "牛仔裤",
    price: 66,
    inStock: false
};
var product3 = {
    title: "纯棉T恤",
    price: 99.8
};
// 3、type annotation 类型注释
// ts会自动推断变量的类型，但是我们也可以自己注释变量的类型
var str = 'hello world';
var num = 456;
var boolean = false;
var product = {
    title: "纯棉T恤",
    price: 99.8
};
var discount = function (price) {
    return price * 0.8;
};
var post = {
    title: "Hello TypeScript",
    content: "TypeScript is a typed superset of JavaScript."
};
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    Cat.prototype.eat = function (food) {
        console.log(this.name + " likes eating " + food);
    };
    return Cat;
}());
var cat = new Cat("Tom");
cat.eat("fish");
var Tiger = /** @class */ (function () {
    function Tiger(name) {
        this.name = name;
    }
    Tiger.prototype.eat = function (food) {
        console.log(this.name + " likes eating " + food);
    };
    Tiger.prototype.run = function (speed) {
        console.log(this.name + " runs at " + speed + " km/h");
    };
    return Tiger;
}());
var tiger = new Tiger("Tom");
tiger.eat("fish");
tiger.run(60);
function getCounter() {
    var counter = function () {
        counter.count++;
    };
    counter.count = 0;
    return counter;
}
var counter = getCounter();
counter();
console.log(counter.count);
counter();
console.log(counter.count);
counter();
console.log(counter.count);
// 4-7）使用interface关键字定义接口继承类
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function (food) {
        console.log(this.name + " likes eating " + food);
    };
    return Animal;
}());
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger(name) {
        return _super.call(this, name) || this;
    }
    Tiger.prototype.run = function (speed) {
        console.log(this.name + " runs at " + speed + " km/h");
    };
    return Tiger;
}(Animal));
var tiger = new Tiger("Tom");
tiger.eat("fish");
tiger.run(60);
var Lion = /** @class */ (function () {
    function Lion(name) {
        this.name = name;
    }
    Lion.prototype.eat = function (food) {
        console.log(this.name + " likes eating " + food);
    };
    Lion.prototype.run = function (speed) {
        console.log(this.name + " runs at " + speed + " km/h");
    };
    Lion.prototype.sleep = function (hours) {
        console.log(this.name + " sleeps " + hours + " hours");
    };
    return Lion;
}());
var lion = new Lion("Tom");
lion.eat("meat");
lion.run(60);
lion.sleep(8);
// 4-9）使用interface关键字定义接口继承多个类
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function (food) {
        console.log(this.name + " likes eating " + food);
    };
    return Animal;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.run = function (speed) {
        console.log("Cat runs at " + speed + " km/h");
    };
    return Cat;
}());
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion(name) {
        return _super.call(this, name) || this;
    }
    Lion.prototype.eat = function (food) {
        console.log(this.name + " likes eating " + food);
    };
    Lion.prototype.run = function (speed) {
        console.log(this.name + " runs at " + speed + " km/h");
    };
    Lion.prototype.sleep = function (hours) {
        console.log(this.name + " sleeps " + hours + " hours");
    };
    return Lion;
}(Animal));
var lion = new Lion("Tom");
lion.eat("meat");
lion.run(60);
lion.sleep(8);
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.run = function (speed) {
        console.log("Cat runs at " + speed + " km/h");
    };
    return Cat;
}());
var Lion = /** @class */ (function () {
    function Lion(name) {
        this.name = name;
    }
    Lion.prototype.eat = function (food) {
        console.log(this.name + " likes eating " + food);
    };
    Lion.prototype.run = function (speed) {
        console.log(this.name + " runs at " + speed + " km/h");
    };
    Lion.prototype.sleep = function (hours) {
        console.log(this.name + " sleeps " + hours + " hours");
    };
    return Lion;
}());
var lion = new Lion("Tom");
lion.eat("meat");
lion.run(60);
lion.sleep(8);
var name = "Tom";
var name1 = "Tom";
name1 = ["Tom", "Jerry"];
var name2 = ["Tom", 25];
var name3 = "Tom";
name3 = 25;
name3 = ["Tom", "Jerry"];
var name4 = function (name) {
    return name4;
};
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
function createName(ctor, name) {
    return new ctor(name);
}
var person = createName(Person, "Tom");
console.log(person.name);
var name6 = { name: "Tom", age: 25 };
var name7 = "Tom";
// interface Name = string; // 报错
// 6、
