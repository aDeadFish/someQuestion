//���캯��
function Foo(){
    this.name="xxx";
    this.year=1992;
}
var f1=new Foo();
console.log(f1.name);//xxx
console.log(f1.year);//1992
//���Ͻ���new Foo()���������Foo������Ϊ���캯������������ֱ�ӵ���Foo������������new Foo()������ʹ�һ���ˡ�
function Foo1(){
    this.name="xxx";
    this.year=1992;
    console.log(this);//window
}
Foo1();


//2.��Ϊ�����һ������
var obj={
    x:10,
    fn:function(){
        console.log(this);//object
        console.log(this.x);//10
    }
};
obj.fn();
//���fn��������Ϊobj��һ�����Ա�����
var fn2=obj.fn;
fn2();//window  undefined

//3.������call��apply���ã�this��ֵ��ȡ����Ķ����ֵ
var obj1={
    x:10
};
var fn=function(){
    console.log(this);//object{x:10}
    console.log(this.x);//10
}
fn.call(obj1);

//4.ȫ��&������ͨ������this��Զ��window