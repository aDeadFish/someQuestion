Array.dim=function(dimension,initial){
    var a=[],i;
    for(i=0;i<dimension;i++){
        a[i]=initial;
    }
    return a;
}

var myArray = Array.dim(10,0);//创建一个包含10个0的数组

Array.matrix = function(m,n,initial){
    var a, i, j,mat=[];
    for(i=0;i<m;i+=1){
        a=[];
        for(j=0;j<n;j+=1){
            a[j]=0;
        }
        mat[i]=a;
    }
    return mat;
};

var myMatrix = Array.matrix(4,4,0);//创建一个二维数组，4行4列值为0

Array.identity=function(n){
    var i,mat=Array.matrix(n,n,0);
    for(i=0;i<m;i+=1){
        mat[i][i]=1;
    }
    return mat;
};

var myIdentity=Array.identity(4);