Function.prototype.method=function(name,func){
    if(!this.prototype[name]){
        this.prototype[name]=func;
        return this;
    }
};

if(typeof Object.beget!=='function'){//非构造函数的继承
    Object.beget=function(o){
        var F= function(){};
        F.prototype=o;
        return new F();
    }
}


Number.method('integer',function(){
    return Math[this<0? 'ceiling':'floor'](this);
});
String.method('trim',function(){
    return this.replace(/^\s+|\s+$/g,"");
});

//辅助构造带记忆功能的函数
var memoizer = function(memo,fundamental){
    var shell = function(n){
        var result = memo[n];
        if(typeof result !=='number'){
            result = fundamental(shell,n);
            memo[n]=result;
        }
        return result;
    };
    return shell;
};

var fibonacci = memoizer([0,1],function(shell.n){
    return shell(n-1)+shell(n-2);
});