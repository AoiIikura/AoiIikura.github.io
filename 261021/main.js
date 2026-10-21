//演習1
let name = "いいくらあおい";
let num = 5123;
console.log(name);
console.log(num);


num = 3214;
console.log(num);

console.log(typeof "123");
console.log(typeof 123);

let x;
console.log(x);

//演習2
function welcome(name, word){
  console.log(name + "さん、ようこそ");
}
  welcome("かまだ");
  welcome("くみこ");
  welcome("のぐち");
//引数を2つにする
function welcome2(name, favorite){
  console.log(name + "さんの好きなものは"+ favorite + "です");
}
  welcome2("かまだ","りんご");
  welcome2("くみこ","チョコレート");
  welcome2("のぐち","オレンジ");
//引数を渡さず呼び出す
function greet(name, word){
  console.log(word +"、" + name + "さん");
}
greet();