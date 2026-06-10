const prompt = require('prompt-sync')();
const db = require('./database');

// -------------------------------------------
// FUNÇÕES AUXILIARES
// -------------------------------------------

function pausar() {
    prompt('\nDigite ENTER para continuar...');
    console.clear();
}

function listarCompanhias() {
    const companhias = db.prepare('SELECT * FROM Companhia').all();

    if(companhias.length == 0) {
        console.log('\nNenhuma companhia cadastrada.');
    } else {
        console.log('\n==== COMPANHIAS ====');
        for( let i = 0; i < companhias.length; i++) {
            console.log(`[${companhias[i].id}] ${companhias[i].nome} - Fundada em ${companhias[i].anoFundacap}`)
        }
    }
    return companhias;
}

function validarOuCadastrarCompanhia(idInformado) {
    const companhia = db.prepare('SELECT * FROM Companhia WHERE id = ?').get(idInformado);

    if (companhia) {
        return idInformado;
    }
    console.log("\nNenhuma companhia cadastrada com esse ID.");
    const opcaoCadastro = prompt("Deseja cadastrar uma nova companhia? (s/n): ");

    if (opcaoCadastro.toLocaleLowerCase() !== 's'){
        return null;
    }
    const nomeCompanhia = prompt("Nome da Companhia: ");
    const anoFundacao = parseInt(prompt("Ano de Fundação: "));

    const resultado = db.prepare(
        "INSERT INTO Companhia (nome, anoFundacao) VALUES (?, ?)"
    ).run(nomeCompanhia, anoFundacao);

    console.log("\nCompanhia cadastrada com Sucesso!");

    return resultado.lastInsertRowid
}

// -------------------------------------------
// FUNÇÕES DE TRECHOS
// -------------------------------------------

function  cadastrarTrecho(){
 
}

function listarTrechos(){
       
    }

function editarTrecho(){

}

function excluirTrecho() {
   
}

// -------------------------------------------
// FUNÇÕES DE CUPONS
// -------------------------------------------

function cadastrarCupom() {
   
}

function listarCupons() {
    // busca todos os cupons com JOIN na tabela Companhia
    // exibe os dados de cada cupom no terminal
}

function editarCupom() {
    // lista os cupons, pede o codigo do cupom a editar
    // verifica se o cupom existe
    // pede os novos dados e atualiza no banco
}

function excluirCupom() {
    // lista os cupons, pede o codigo do cupom a excluir
    // verifica se o cupom existe
    // remove do banco
}

// -------------------------------------------
// MENU PRINCIPAL
// -------------------------------------------

let opcao = -1;

console.clear();
console.log('\n===========================================');
console.log('   SISTEMA DE PASSAGENS - COMPANHIA        ');
console.log('===========================================');

while (opcao !== 0) {
    console.log('\n---- MENU ----');
    console.log('1 - Gerenciar Trechos');
    console.log('2 - Gerenciar Cupons');
    console.log('0 - Sair');
    console.log('-------------------------\n');

    opcao = parseInt(prompt('Escolha uma opcao: '));

    switch (opcao) {

        case 1:
            console.log('\n---- TRECHOS ----');
            console.log('1 - Cadastrar');
            console.log('2 - Listar');
            console.log('3 - Editar');
            console.log('4 - Excluir');
            const opcaoTrecho = parseInt(prompt('Escolha: '));

            switch (opcaoTrecho) {
                case 1: cadastrarTrecho(); break;
                case 2: listarTrechos(); break;
                case 3: editarTrecho(); break;
                case 4: excluirTrecho(); break;
                default: console.log('\nOpcao invalida.'); break;
            }
            pausar();
            break;

        case 2:
            console.log('\n---- CUPONS ----');
            console.log('1 - Cadastrar');
            console.log('2 - Listar');
            console.log('3 - Editar');
            console.log('4 - Excluir');
            const opcaoCupom = parseInt(prompt('Escolha: '));

            switch (opcaoCupom) {
                case 1: cadastrarCupom(); break;
                case 2: listarCupons(); break;
                case 3: editarCupom(); break;
                case 4: excluirCupom(); break;
                default: console.log('\nOpcao invalida.'); break;
            }
            pausar();
            break;

        case 0:
            console.log('\nFinalizando o sistema... Ate logo!\n');
            break;

        default:
            console.log('\nOpcao invalida! Tente novamente.');
            pausar();
            break;
    }
}