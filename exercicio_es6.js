function Aluno(nome,nota) {
    this.nome = nome
    this.nota = nota
}

const aluno1 = new Aluno('Kaique',8)
const aluno2 = new Aluno('Luan',5)
const aluno3 = new Aluno('Joao',6)

const araryDeAlunos = [aluno1, aluno2, aluno3]

const alunoAcimaDaMedia = araryDeAlunos.filter(function(aluno) {
    return aluno.nota >= 6
})

console.log(alunoAcimaDaMedia)