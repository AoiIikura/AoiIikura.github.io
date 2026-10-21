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
  welcome();
  welcome2();


  //演習3
  function multiply(a, b){
    return a * b;
  }
  console.log(multiply(3, 4));
  console.log(multiply(3, 10));
//合計金額と人数を受け取り、一人当たりの金額を返す関数
  function splitBill(total, people){
      return Math.ceil(total / people);   //端数を切り上げる
  }
  console.log(splitBill(3000, 3));
  console.log(splitBill(5000, 6));
   

  //演習4
  function judgeAge(age){
    let result;
    if (age <= 0){
      result = "エラー";
    } else if (age < 18){
      result = "未成年";
    } else if (18 <= age && age < 65){
      result = "成人";
    } else {
      result = "高齢者";
    }
  console.log(`${age}歳は${result}です`);
  }

  judgeAge(-1)
  judgeAge(10)
  judgeAge(80)
  judgeAge(40)

  //発展
  function judgeYear(year){
      let result;
    if (year % 400 === 0){
      result = "366日";
    } else if (year % 100 ===0){
      result = "365日";
    } else if (year % 4 ===0){
      result = "366日";
    } else {
      result = "365日";
    } 

console.log(`${year}年は${result}です`);
  }

  judgeYear(1892)
  judgeYear(2008)
  judgeYear(1040)
  judgeYear(1005)
