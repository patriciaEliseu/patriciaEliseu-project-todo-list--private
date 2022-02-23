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