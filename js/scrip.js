const button = document.querySelector('button');

button.addEventListener('click', (e) => {
    const campos = document.querySelectorAll("input[type='text'], input[type='email']") 

    for(let x = 0; x < campos.length; x++){
        if(campos[x].value == ''){
            alert("O campo " + campos[x].id + " está vazio!");
            return
        }
    }
    alert("Formulário enviado com sucesso")
    document.querySelector('form').submit() 
})
   