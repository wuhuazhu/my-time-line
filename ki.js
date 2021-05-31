// let foo='Hello,node';
// console.log(foo);
// console.log(document)
// console.log(window)

//没有bom和dom

//这里是node语言（node版的js）

let fs=require('fs');
fs.readFile('./package.json',function (error,data){
  console.log(data.toString())
 //默认输出存储的二进制数据，这里的二进制转换为十六进制
  //可以通过tostring转换
  //<Buffer 7b 0a 20 20 22 6e 61 6d 65 22 3a 20 22 64 65 6d 6f 32 22 2c 0a 20 20 22 76 65 72 73 69 6f 6e 22 3a 20 22 30 2e 31 2e 30 22 2c 0a 20 20 22 70 72 69 76 ... 3300 more bytes>
})
