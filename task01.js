/*2020.05.03 TechBoost jQuery 1 課題 */

/*1
promptで入力した値から
「正の数」「負の数」を判定してalertする処理を書いてください。
*/
let number = prompt('数値を入力してください');
if(number>0){
  alert('正の数');
}else if(number<0){
  alert('負の数');
/* 2
1.で数値以外が入力された場合には
「数値を入力してください」とalertする処理を追加してください。
*/
}else if(isNaN(number)){
  alert ('数値を入力してください');
}
//isNaN True:数値型でない



/*3
配列に'パンダ', 'ライオン', 'キリン'を定義し、
while文ですべて表示する処理を書いてください。
*/
var animal =['パンダ','ライオン','キリン'];

let i = 0;

/* 4
3.でwhile文より前にpromptでキー入力し、
その入力した内容が'ライオン'の場合に処理を中断するように変更してください。
*/

let animalName = prompt('動物の名前を入力してください');
if(animalName =="ライオン"){

  /* 5
  4.で中断したときの'ライオン'の添字もalertするように変更してください。
  */
  alert(animalName);

}else{


while(true){
  if(i >= animal.length){
    break;
  }
  alert(animal[i]);
  i++;
}

}




/* 6
オブジェクト変数の配列の形式で、動物と体重を表現してみましょう。
例としてパンダは80(Kg)、ライオンは200(Kg)、キリンは300(Kg)としましょう。
*/

let animalWeight = [
  {'name':'パンダ','weight':80},
  {'name':'ライオン','weight':200},
  {'name':'キリン','weight':300}
];
/* 7
6.でpromptで入力した動物名の体重をalertするように変更してください。
*/
for (let i=0;i<animalWeight.length;i++){
  alert(animalWeight[i].name+":"+animalWeight[i].weight);
}

/* 8
円の半径を入力するとその面積を返す関数をつくり、その結果をalertしましょう。
円周率は3.14とします。
*/
function area(num){
  return num * num * 3.14;
}

let rad = prompt('半径を入力してください');
alert(area(rad));
