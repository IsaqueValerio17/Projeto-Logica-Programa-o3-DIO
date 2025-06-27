//Clase do Herói
class Heroi{
    constructor(nome,idade,tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    // Método para cada clase realizar o Ataque
    atacar(){
        let ataque = ""
        if (this.tipo === "mago"){
            ataque = "magia"
        }
        else if(this.tipo === "guerreiro"){
            ataque = "espada"
        }
        else if(this.tipo === "monge"){
            ataque = "artes marciais"
        }
        else if(this.tipo === "ninja"){
            ataque = "shuriken"
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}
//Ciando novos objetos com diferentes propriedades
let personagem = new Heroi("Isaque",17,"mago")
personagem.atacar()

let novoPersonagem = new Heroi("Felipe", 25, "guerreiro")
novoPersonagem.atacar()
