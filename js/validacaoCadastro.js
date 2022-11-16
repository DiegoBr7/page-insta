window.addEventListener("load", function (){

  const removeErrors =  function () {
    hasErrors = false;
    const errorSpan = document.querySelectorAll("main form.form-auth span.error");
    errorSpan.forEach(span => span.remove());
  }
   const createError = function (input, mensagem){
    hasErrors = true;
    const errorSpan = document.createElement("span");
    errorSpan.classList.add('error');
    errorSpan.innerText = 'mensagem';
    input.insertAdjacentElement('afterend',errorSpan);
   }
  const form = document.querySelector("main form .form-auth");
  const inputList = document.querySelectorAll("main form.form-auth input");
  let hasErrors = false;
 

  form.addEventListener("submit",function(event){
    
    //validar campos obrigatórios
    
    event.preventDefault();
    let hasFormErrors = false ;
    removeErrors(hasFormErrors);

    inputList.forEach(input => {
        if(!input.value){
          hasErrors = true;
          createError(input,'campo obrigatorio')
        }
    });
    if(!hasErrors){
      this.submit();

    }
  });

  const validateEmail = function (value){
    const {value} = input ; 
     if (value.includes('@') && value.includes('.')){
      return
     }else{
      createError(input , 'o campo deve conter @ e o .')
     }
  };

  const validateLength = function(input , min , max){
    const {value} = input;

    if(value.length > min && value.length < max ){
      return
    }else{
      createError(input , `o campo deve ter entre ${min} e ${max} caracteres`);
    }
    
  }

  inputList.forEach(input =>{
    input.addEventListener('change', function(){
      switch(input.name){
      case 'email':
        validateLength(input, 10 , 180);
        validateEmail(input);
        break;

      case 'name':
        validateLength(input , 2 , 80);
      break;

      case 'surname':
        validateLength(input , 2 , 100);
      break;


      case 'password':
        validateLength(input , 8 , 100);
      break;

      case 'date':
        validateAge();
      break;

      default;
      break;

      }
    } )
  })
})