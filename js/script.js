$(document).ready(function() {
  const counter_button = document.querySelectorAll(".counter-button");
  let number = 0;
  const counter_text = $(".counter");

  counter_button.forEach(function(button){
    button.addEventListener("click",function(){
      if(button.classList.contains("lower-count")){
        number --;
        $(".counter").html(number);
      } else if(button.classList.contains("add-count")){
        number ++;
        $(".counter").html(number);
      }

      if(number < 0){
        counter_text.css("color","red");
      } else if(number > 0){
        counter_text.css("color","green");
      } else {
        counter_text.css("color","black")
      }
    })
  })




});
