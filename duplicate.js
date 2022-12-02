var nume=[10,52,45,44,44,58,56,52,11,74,11];
var uniqName=[];
for(var i=0;i<nume.length;i++){
    var element=nume[i];
    var index=uniqName.indexOf(element);
    if(index==-1){
        uniqName.push(element);
    }
}
console.log(uniqName);