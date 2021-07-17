function reverseArr(input)
{
    var ret = new Array;
    for(var i=input.length-1;i>=0;i--)
    {
        ret.push(input[i]);
    }
    return ret;
}
var a=[4,1,9,0]
var b=reverseArr(a);
console.log(b);
