const form = document.getElementById('form');// declaro o documento form

form.addEventListener('submit', function(e) { // no form doda vez que tiver um submit a função é ativada (e é a constante para evento)
    e.preventDefault(); //retira o esquema padrao do submit de resetar a pagina

    const valorA = document.getElementById('valorA');
    const valorB = document.getElementById('valorB');
    const mensagem_1 = `<b>${valorA.value}</b> é igual a <b>${valorB.value}</b>`;
    const mensagem_2 = `<b>${valorA.value}</b> maior que <b>${valorB.value}</b>`;
    const mensagem_3 = `<b>${valorA.value}</b> menor que <b>${valorB.value}</b>`;

    if (valorA.value === valorB.value) {
        document.querySelector('.mensagem_erro').style.display = 'none';
        document.querySelector('.mensagem').innerHTML = mensagem_1;
        document.querySelector('.mensagem').style.display = 'block';
    }
    else if (valorA.value > valorB.value){
        document.querySelector('.mensagem_erro').style.display = 'none';
        document.querySelector('.mensagem').innerHTML = mensagem_2;
        document.querySelector('.mensagem').style.display = 'block';
    }
    else{
        document.querySelector('.mensagem').style.display = 'none';
        document.querySelector('.mensagem_erro').innerHTML = mensagem_3;
        document.querySelector('.mensagem_erro').style.display = 'block';
    }
})