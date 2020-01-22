$(document).ready(function(){

    $("#formOne").submit(function(event){
      event.preventDefault();

      var array = [];

      var array2 = [];

      $("input:checkbox[name=stress]:checked").each(function(){
        var health = $(this).val();
        array.push(health);
      });

      $("input:checkbox[name=deal]:checked").each(function(){
        var health = $(this).val();
        array2.push(health);
      });

      // alert(array);

    if (array.length >= 2 && array2.length>=2){
      $("#okay").show();
      $("#negative").hide();
      $("#positive").hide();
    } else if (array.length >= 3){
      $("#negative").show();
      $("#positive").hide();
      $("#okay").hide();
    } else {
      $("#positive").show();
      $("#negative").hide();
      $("#okay").hide();
    }

    // if (array.length>=2) {
    //   if(array.length2 >=2){
    //     $("#okay").show();
    //   }
    // }
    // else if (array.length <=1) {
    //   if (array.length>=2 || array.length2 <=1) {
    //     $("#positive").show();
    //   }
    // }
    // else {
    //   ("#negative").show();
    // }
    });
  });