//构造函数
function Foo(){
    this.name="xxx";
    this.year=1992;
}
var f1=new Foo();
console.log(f1.name);//xxx
console.log(f1.year);//1992
//以上仅限new Foo()的情况，即Foo函数作为构造函数的情况。如果直接调用Foo函数，而不是new Foo()，情况就大不一样了。
function Foo1(){
    this.name="xxx";
    this.year=1992;
    console.log(this);//window
}
Foo1();


//2.作为对象的一个属性
var obj={
    x:10,
    fn:function(){
        console.log(this);//object
        console.log(this.x);//10
    }
};
obj.fn();
//如果fn函数不作为obj的一个属性被调用
var fn2=obj.fn;
fn2();//window  undefined

//3.函数用call或apply调用，this的值就取传入的对象的值
var obj1={
    x:10
};
var fn=function(){
    console.log(this);//object{x:10}
    console.log(this.x);//10
}
fn.call(obj1);

//4.全局&调用普通函数，this永远是window