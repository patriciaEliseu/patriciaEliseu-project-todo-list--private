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
        lista.classList.toggle("pintar");
    })
    /* let lista = document.getElementsByTagName('li');

    novaLi.addEventListener(click, function(event) {
        event.style.backgroundColor = 'gray';

    lista.addEventListener('click', function() {
        padding.style.backgroundColor = 'gray';
    }) */
    /* 8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo
    **O que será verificado:**
    - Será verificado que, quando um elemento da lista é selecionado, o elemento selecionado
     previamente deixa de sê-lo. Isso é verificado através da presença ou não do estilo 
     `background-color: gray` no elemento. */
    /* let itemLista = document.querySelectorAll('li');
    for (let index = 0; index < itemLista.length; index += 1) {
        console.log(itemLista[index]);
    } */
    /*  let colours = document.getElementsByClassName('color')
    for (let index = 0; index < colours.length; index += 1) {
        /* console.log(colours[index]); */
    /*   colours[index].addEventListener('click', function(event) { */
    /* console.log(event.target); */
    /*   let selected = document.getElementsByClassName('selected')[0]; */
    /* console.log(selected); */
    /*  selected.classList.remove('selected');
            event.target.classList.add('selected');
        })
    } */