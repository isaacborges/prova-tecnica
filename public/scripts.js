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

document
    .querySelector('input#nao')
    .addEventListener("click", function(){
        document
            .querySelector('section.check')
            .classList.toggle('hide')
    })
    
document.addEventListener("DOMContentLoaded", function() {
    var elements = document.getElementsByTagName("INPUT");
    for (var i = 0; i < elements.length; i++) {
        elements[i].oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("Inválido! Preencher no seguinte formato: 61999999999");
            }
        };
        elements[i].oninput = function(e) {
            e.target.setCustomValidity("");
        };
    }
})
    
const formValidation = () => { 
        if (document.querySelector('input#name').value === '') {
            alert('Preencha o campo com o seu nome e sobrenome');
            document.querySelector('input#name').focus();
            return false;
        }

        if (document.querySelector('#input#sim').checked === false && document.querySelector('#input#nao').checked === false) {
            alert('Informe se você possui alguma rede social!');
            return false;
        }

        if (document.querySelector('#input#sim').checked === true) {
            if (document.querySelector('input#facebook').checked === false && document.querySelector('input#linkedin').checked === false && document.querySelector('input#instagram').checked === false) {
                alert('Informe quais redes sociais que possui');
                return false;
            }
        }
}