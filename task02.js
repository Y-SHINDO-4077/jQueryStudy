/*2020.05.04 jQuery 課題2 */

/* 1
<h2>を削除
*/

(function($,window){
$(function(){
   $('h2').remove();
 });
})(jQuery,window);

/* 2
#indexにtext()/html()を実行
*/

(function($,window){
$(function($,window){
  var title = $('#index').text();

  });
})(jQuery,window);

 (function($,window){
 $(function($,window){
   $('#index').html();
   });
 })(jQuery,window);


/* 3
appendメゾットを用いて、ul#indexの最後に
<li>メゾット</li>を追加
*/
(function($,window){
$(function($,window){
  $('ul').append("<li>メゾット</li>");
  });
})(jQuery,window);


/* 4
ul#indexの子要素の<li>それぞれの文字列をalert
*/
(function($,window){
$(function($,window){

  $('#index').find('li').each(
    function(){
      alert($(this).text());
    }
  );
  });
})(jQuery,window);

/* 5
各文字列の長さを末尾に追加
*/
(function($,window){
$(function($,window){

  $('#index').find('li').each(
    function(){
      $(this).append("["+$(this).text().length+"文字]")
    }
  );
  });
})(jQuery,window);
