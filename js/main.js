const form = document.getElementById('form');
let linhas = '';
const Cpfs = [];

const nome = document.getElementById('Nome')
const cpf = document.getElementById('Cpf')
const cargo = document.getElementById('cargo')
const tel = document.getElementById('tel')
const cep = document.getElementById('cep')

$(document).ready(function(){

    $('#tel').mask('(00) 00000-0000');
    $('#Cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
    
    $('#form').validate({
        rules: {
            Nome: {
                required: true
            },
            Cpf: {
                required: true
            },
            cargo: {
                required: true
            },
            tel: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            Nome: {
                required: '<img src="./erro.png" alt="Por favor, insira o seu nome">'
            },
            Cpf:{
                required: '<img src="./erro.png" alt="Por favor, insira o seu CPF">'
            },
            cargo:{
                required: '<img src="./erro.png" alt="Por favor, insira o seu cargo">'
            },
            tel:{
                required: '<img src="./erro.png" alt="Por favor, insira o seu Telefone">'
            },
            cep:{
                required: '<img src="./erro.png" alt="Por favor, insira o seu CEP">'
            }
        },

        submitHandler: function(form){
            adicionaLinha();
            atualizaTabela();
        },
        invalidHandler: function(e, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            if(camposIncorretos) {
                $(validator.errorList).each(function () {
                    $(this.element).addClass("erro");
                });
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
            
        },
    });

    function atualizaTabela() {
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
    });

    function adicionaLinha() {
        const nomeValua = nome.value;
        const cpfValua = cpf.value;
        const cargoValua = cargo.value;
        const telValua = tel.value;
        const cepValua = cep.value;

        if (Cpfs.includes(cpfValua)) {
            alert(`O cpf ${cpfValua} já foi inserido`);
        } 
        else {
            Cpfs.push(cpf);

            let linha = '<tr>';
            linha += `<td>${nomeValua}</td>`;
            linha += `<td>${cpfValua}</td>`;
            linha += `<td>${cargoValua}</td>`;
            linha += `<td>${telValua}</td>`;
            linha += `<td>${cepValua}</td>`;
            linha += '</tr>';

            linhas += linha;
        }

        document.getElementById('Nome').value = '';
        document.getElementById('Cpf').value = '';
        document.getElementById('cargo').value = '';
        document.getElementById('tel').value = '';
        document.getElementById('cep').value = '';
    }
});

