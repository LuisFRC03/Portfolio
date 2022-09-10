// Dark/Light Mode Switch
let darklight = document.querySelector('.switch-button');
let body = document.querySelector('body');

darklight.onclick = function(){
    body.classList.toggle('dark');
}

// Função para inserir os números no display de cima
function insert(num) {
    var numero = document.getElementById('valor').innerHTML;
    document.getElementById('valor').innerHTML = numero + num;
}

// Função do botão clear/limpar display
function clean() {
    document.getElementById('valor').innerHTML = "";
}

// Função para deletar valores do display, um por vez
function del() {
    var valor = document.getElementById('valor').innerHTML;
    document.getElementById('valor').innerHTML = valor.substring(0, valor.length -1);
}

// Função para exibir o resultado final das operações
function resultado() {
    var valor = document.getElementById('valor').innerHTML;
    if(valor){
        document.getElementById('valor').innerHTML = eval(valor);
    }else {
        document.getElementById('valor').innerHTML = "Erro"
    }
}