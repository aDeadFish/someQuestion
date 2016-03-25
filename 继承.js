Function.method('new',function(){
    var that = Object.beget(this.prototype);
    var other = this.apply(that,arguments);
    return (typeof other==='object'&&other)||that;
});

var Mammal = function(name){
    this.name=name;
};
Mammal.prototype.get_name = function(){
    return this.name;
};
Mammal.prototype.says = function(){
    return this.saying ||"";
};

var myMammal = new Mammal('Herb the Mammal');
var name = myMammal.get_name();

Function.method('inherits',function(Parent){
    this.prototype=new Parent();
    return this;
});
/*var Cat = function(name){
    this.name=name;
    this.saying='meow';
}.inherits(Mammal).method('purr',function(n){
        var i,s="";
        for(i=0;i<n;i+=1){
            if(s){
                s+='-';
            }
            s+='r';
        }
        return s;
    }).method('get_name',function(){
        return this.says()+" "+this.name+" "+this.says();
    });*/
var Cat = function(name){
    this.name=name;
    this.saying='meow';
};
Cat.prototype = new Mammal();
Cat.prototype.constructor =Cat;
Cat.prototype.purr=function(n){
    var i,s="";
    for(i=0;i<n;i+=1){
        if(s){
            s+='-';
        }
        s+='r';
    }
    return s;
};
Cat.prototype.get_name = function(){
    return this.says()+" "+this.name+" "+this.says();
};

var myCat = new Cat('Henrietta');
var says = myCat.says();
var purr=myCat.purr(5);
var name=myCat.get_name();


//函数化模式
var mammal = function(spec){
    var that={};
    that.get_name=function(){
        return spec.name;
    };
    that.says = function(){
        return spec.saying || '';
    };
    return that;
};

var cat = function(spec){
    spec.saying = spec.saying ||'meow';
    var that = mammal(spec);
    that.purr=function(n){
        var i,s='';
        for(i=0;i<n;o+=1){
            if(s){
                s+='-';
            }
            s+='r';
        }
        return s;
    };
    that.get_name=function(){
        return that.says()+' '+spec.name+' '+that.says();
    };
    return that;
};

var mymyCat=cat({name:'Henrietta'});


Object.method('superior',function(name){
    var that = this,
        method=that[name];
    return function(){
        return method.apply(that,arguments);
    };
});

var coolcat = function(spec){
    var that = cat(spec),
        super_get_name=that.superior('get_name');
    that.get_name=function(n){
        return 'like ' + super_get_name() +' baby';
    };
    return that;
};
var myCoolCat=coolcat({name:'Bix'});
var name=myCoolCat.get_name();//'like meow Bix meow baby‘