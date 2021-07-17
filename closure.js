let m="everyone" ;
function cat(a){
  return function(b){
    return function(c){
      return a+b+c+m;
    }
  }
    
}

console.log("Output= ");
console.log(cat('h')('oll')('a '))


let r ;
function disp(){
    let msg = "wassup";
    r = msg;
    return function (){
        msg = msg+" "+"people";
        return msg;
    }
    
}
console.log(r);
console.log(disp()());
console.log(r);
