// Day1 :

// 1.手写算法
// https://leetcode-cn.com/problems/add-to-array-form-of-integer/

let num = [1,2,8,0], k = 9034

var addToArrayForm = function(num, k) {
    let pos = num.length - 1;
    let rest = k;
    let n = rest % 10;
    rest = parseInt(rest / 10, 10);
    let i = 0;
    while(n > 0 || i > 0 || rest>0){
        if(pos<0){
            num.unshift(0);
            pos = 0;
        }
        num[pos] = num[pos] + i + n;
        if(num[pos] >= 10){
            i = parseInt(num[pos] / 10);
            num[pos] = num[pos] % 10;
        }else{
          i = 0;
        }
        n = rest % 10;
        rest = parseInt(rest / 10);
        pos--;
    }
    return num;
};

console.log(addToArrayForm(num, k));

// 2.编程题
//1.手写函数柯里化
function curry(func) {
  //此处补全
  let arr = [];
  const f = function(){
    arr = arr.concat(...arguments)
    if(arr.length === func.length){
        const res = func.apply(null, arr)
        arr = []
        return res;
    }
    return f;
  }
  return f;
}
// function curry(func) {
//     return function curried(...args) {
//       if (args.length >= func.length) {
//         return func.apply(this, args);
//       } else {
//         return function (...args2) {
//           return curried.apply(this, args.concat(args2));
//         };
//       }
//     };
//     //此处补全
//   }
function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3)); // 6, still callable normally
console.log(curriedSum(1)(2, 3)); // 6, currying of 1st arg
console.log(curriedSum(1)(2)(3)); // 6, full currying
