let criarTarefa = document.querySelector('#criar-tarefa');
criarTarefa.addEventListener('click', function() {
    /*  aí o que vc precisa que aconteça é que quando a pessoa digitar algo esse valor 
    seja colocado como corpo de texto e que o input fique limpo pra que receba um novo texto.  */
    let digitarTexto = document.getElementById('texto-tarefa');
    let valorDoInput = digitarTexto.value;
    let novaLi = document.createElement('li');
    novaLi.innerText = valorDoInput;
    let ListaMae = document.getElementById('lista-tarefas');
    ListaMae.appendChild(novaLi);
    digitarTexto.value = '';
})
let butom = document.addEventListener('click', function(event) {
    let lista = event.target;
    /*  https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList */
    /* criei um toggle , ou seja, uma variavel para o evento pintar com click a li e depois fui 
    no style e criei a cor que quero que pinte */
    lista.classList.toggle("pintar");
    let selected = document.getElementsByClassName("pintar")[0];
    selected.classList.remove("pintar");
    event.target.classList.add("pintar");
})

let duploclick = document.addEventListener('dblclick', function(event) {
    let lista1 = event.target;
    lista1.classlist.toogle("completed");
    let selected1 = document.getElementsByClassName('completed')[0];
    selected1.classList.remove('completed');
    event.target.classList.add('completed');

})
let apagaTudo = document.querySelector('#apaga-tudo');
apagaTudo.addEventListener('click', function() {
    let lista2 = document.querySelectorAll('li');
    for (let index = 0; index < lista2.length; index += 1) {
        lista2[index].remove()
    }
})