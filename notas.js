  // Crie um código que tenha uma classe Aluno que guarde o nome do aluno e possua dois arrays vazios, 
  // chamados portugues e matematica, que vão guardar notas de prova. 
  // Além desses atributos, a classe precisa ter dois métodos: 
  // adicionarNota, que vai receber uma nota e qual a disciplina. 
  // Ex.: adicionarNota(7.8, "matematica") calcularMedia, 
  // que vai receber o nome da disciplina e vai retornar a média das notas. 
  // Ex.: calcularMedia("matematica")
 

  class Aluno {
    constructor(nome) {
        this.nome = nome;
        this.notasPortugues = [];
        this.notasMatematica = [];
    }


    // Notas no Array Correto

    adicionarNota(nota, materia) {
        if (materia == "portugues") {
            this.notasPortugues.push(nota);
        }
        if (materia == "matematica") {
            this.notasMatematica.push(nota);
        }
    }

    // Calculando a Média

    calcularMedia(materia) {
        let notas = [];
        if (materia == "portugues") {
            notas = this.notasPortugues;
        }
        if (materia == "matematica") {
            notas = this.notasMatematica;
        }
        let soma = 0;
        for (let i=0; i < notas.length; i++) {
            soma = soma + notas[i];
        }
        return soma / notas.length;
    }
}




class Turma {
    constructor(nomeTurma) {
        this.nomeTurma = nomeTurma;
        this.alunos = [];
    }

    criarRanking(materia){
        if (materia != "matematica" && materia != "portugues"){
            console.log("Disciplina não reconhecida")
            return
        }
        let medias = []
        for (let aluno of this.alunos){
            let mediaAluno = aluno.calcularMedia(materia)

            medias.push({
                nome: aluno.nome,
                media: mediaAluno
            })
        }
        for (let i = 0; i < medias.length; i ++){
            let maior = i;
            let temp;

            for (let j = i = 1; j < medias.length; j++){

                if (medias [j].media > medias[maior].media){
                    maior = j;
                }
                temp = medias[i];
                medias [i] = medias [maior];
                medias [maior] = temp;
            }
        }
        return medias
    }
}   

// Execução

let aluno1 = new Aluno("Reinaldo");
aluno1.adicionarNota(9.0, "portugues");
aluno1.adicionarNota(10.0, "portugues");
aluno1.adicionarNota(8.0, "matematica");
aluno1.adicionarNota(9.5, "matematica");

let aluno2 = new Aluno("Fernanda");
aluno2.adicionarNota(8.0, "portugues");
aluno2.adicionarNota(9.0, "portugues");
aluno2.adicionarNota(6.0, "matematica");
aluno2.adicionarNota(6.5, "matematica");

let turma = new Turma("Terceirão");

turma.alunos.push(aluno1);
turma.alunos.push(aluno2);

console.log(turma.criarRanking("matematica"));
