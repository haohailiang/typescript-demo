// 类
class Person{
	// 成员
	// 属性
	name : string;
	// 构造函数
    constructor(nameNew : string){
        this.name = nameNew;
    }
	// 方法
    info() {
        return this.name;
    }
}

let person = new Person('xiaoming');

// 继承 封装 多态
// 子类继承父类
class Animal{
	// 可见度
	public name : string;
	private age : number;
	protected sex : string;
}

class Cat extends Animal{

}
