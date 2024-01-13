let input = document.querySelector(".inputbox");
let btn = document.querySelector(".btn");
let result = document.querySelector(".result");
let reset_btn = document.querySelector(".reset_btn");



btn.addEventListener("click" , function(){

    let num = input.value;
    
    let number = num % 2;


      if ( number == 0 ){
          
        result.innerHTML = "Your Number is Even Number: " + input.value ;
        
      }

      else{

        result.innerHTML = "Your Number is Odd Number: " + input.value ;

      }
})

reset_btn.addEventListener("click" , function(){

   input.value = location.reload();
})