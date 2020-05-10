(function($,window){
  $(function(){
    $('#date_picker').flatpickr({"locale":"ja"}
    //{
    //showOn:"button",buttonText:"day",
  );
      //2020.05.07 教材
    //$('#date_picker').on('click').flatpickr({locale:"ja"});
    $('.input-button').on('click').flatpickr({"locale":"ja"});
  });
})(jQuery,window);
