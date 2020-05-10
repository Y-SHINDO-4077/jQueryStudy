(function($,window){
  $(function(){
    //2020.05.07 jQuery3 教材
    //$('#login').on('click',function(e){
      // var email = $('#email').val(),
      //     password = $('#password').val();
      // //alert(email);
      // //alert(password);
      // if(email==""){
      //   alert('メールアドレスを入力してください');
      // }else if(email.indexOf('@') < 0){
      //   //indexOf() 探したい文字列が存在した時は0から始めて何番目か 存在しないなら-1を返す
      //   alert('メールアドレスには必ず「@」が必要です');
      // }
      // if(password==""){
      //   alert('パスワードを入力してください');
      // }else if(password.length<6){
      //   alert('パスワードは6文字以上です');
      // }
      /*jQuery 課題2 関数呼び出し*/
      $('#login').on('click',checkEmail);
      $('#login').on('click',checkPass);
    });
  //});
})(jQuery,window);

/* jQuery 課題2 関数定義*/

// var email = $('#email').val(),
  //  password = $('#password').val();
function checkEmail(){
//alert(email);
//alert(password);
var email = $('#email').val();
  if(email==""){
    alert('メールアドレスを入力してください');
  }else if(email.indexOf('@') < 0){
  //indexOf() 探したい文字列が存在した時は0から始めて何番目か 存在しないなら-1を返す
    alert('メールアドレスには必ず「@」が必要です');
  }
};
function checkPass(){
  var password = $('#password').val();
if(password==""){
    alert('パスワードを入力してください');
  }else if(password.length<6){
    alert('パスワードは6文字以上です');
  }
};
