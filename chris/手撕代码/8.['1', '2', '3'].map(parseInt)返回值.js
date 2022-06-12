// ['1', '2', '3'].map(parseInt)返回值


let res = ['1', '2', '3'].map(parseInt);
console.log(res);

parseInt('1', 0); // radix是0的情况见如下解释
parseInt('2', 1); // radix基数只能取到 2 - 36 之间,所以NaN
parseInt('3', 2); // radix=2 表示是二进制数,只能有0和1,解析的字符串是'3',所以是NaN