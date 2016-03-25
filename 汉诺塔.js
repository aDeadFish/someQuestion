var hanoi =function(disc,src,aux,dst){
    if(disc>0){
        hanoi(disc-1,src,dst,aux);
        hanoi(disc-1,aux,src,dst);
    }
}
hanoi(3,'src','aux','dst');