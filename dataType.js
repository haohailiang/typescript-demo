var str = 'abc';
var arr = [1, 2, 3];
var arr2 = [1, 2, 3];
var strs = ['a', 'b', 'c'];
// 布尔类型
var isDone = true;
// 数字类型
var num = 10;
// 元祖
var per;
per = [181, 'lucky'];
// per  		=['lucky', 18];
// 枚举
var Season;
(function (Season) {
    Season[Season["Spring"] = 0] = "Spring";
    Season[Season["Summer"] = 1] = "Summer";
    Season[Season["Autumn"] = 2] = "Autumn";
    Season[Season["Winter"] = 3] = "Winter";
})(Season || (Season = {}));
;
var season = Season.Spring;
var Season1;
(function (Season1) {
    Season1[Season1["Spring"] = 1] = "Spring";
    Season1[Season1["Summer"] = 2] = "Summer";
    Season1[Season1["Autumn"] = 4] = "Autumn";
    Season1[Season1["Winter"] = 6] = "Winter";
})(Season1 || (Season1 = {}));
;
var season2 = Season1[1];
// 任意值
var a = 10;
var b = 4;
b = 'zifuchuan';
// 函数返回值
function test() {
    console.log('test');
}
function createPerson(per) {
    console.log(per.age);
}
var perNew = {
    name: "lily",
    age: 18
};
createPerson(perNew);
function createAnimal(ani) {
    var aniTemp = {
        color: 'yellow',
        size: 100
    };
    if (ani.color) {
        aniTemp.color = ani.color;
    }
    if (ani.size) {
        aniTemp.size = ani.size;
    }
    return aniTemp;
}
createAnimal({ color: 'red' });
