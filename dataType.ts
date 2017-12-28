let str:string = 'abc';

let arr 	:number[] 			= [1,2,3];
let arr2 	:Array<number> 		= [1,2,3];
let strs 	:string[] 			= ['a','b','c'];

// 布尔类型
let isDone  :boolean = true;

// 数字类型
let num     :number = 10;

// 元祖
let per		:[number, string];
per 		=[181, 'lucky'];
// per  		=['lucky', 18];

// 枚举
enum Season{Spring, Summer, Autumn, Winter};
let season:Season = Season.Spring;

enum Season1{Spring=1, Summer=2, Autumn=4, Winter=6};

let season2:string = Season1[1];

// 任意值
let a:number = 10;
let b:any = 4;
b = 'zifuchuan';

// 函数返回值
function test():void{
	console.log('test');
}

// 接口
interface Person{
	name:string;
	age:number;
}
function createPerson(per:Person){
	console.log(per.age)
}

let perNew = {
    name:"lily",
    age:18
}
createPerson(perNew);

// 可选属性
interface Animal{
    color?:string;
    size?:number;
}
function createAnimal(ani:Animal):{color:string;size:number}{
    var aniTemp = {
        color:'yellow',
        size:100
    };
    if(ani.color){
        aniTemp.color = ani.color;
    }

    if(ani.size){
        aniTemp.size = ani.size;
    }
    return aniTemp;
}
createAnimal({color:'red'});