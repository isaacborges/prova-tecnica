document
    .querySelector('header button')
    .addEventListener("click", function() {
        document
            .querySelector('.form')
            .classList.toggle('hide')
    })

document
    .querySelector('input#sim')
    .addEventListener("click", function(){
        document
            .querySelector('section.check.hide')
            .classList.toggle('hide')
    })

const formValidation = () => { 
        if (document.querySelector('input#name').value === '') {
            alert('Preencha o campo com o seu nome e sobrenome');
            document.querySelector('input#name').focus();
            return false;
        }

        if (document.querySelector('input#telefone').value === '') {
            alert('Preencha o campo com o seu número de telefone');
            document.querySelector('input#telefone').focus()
            return false;
        }
    }