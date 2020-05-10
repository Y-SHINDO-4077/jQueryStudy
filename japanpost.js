(function($, window) {
  $(function() {
    // ここに処理を書きます
    $('#zip1').jpostal({
        click:'#btn_postcodeToadress',
        //postcode : [
        //    '#zip1',
        //    '#zip2'
        //], //ここまで3桁-4桁、以下7桁
        postcode :[
              '#postcode'
        ],
        address : {
            '#pref'  : '%3',
            '#city'  : '%4',
            '#street'  : '%5'
        }
    });
  });
})(jQuery, window);
