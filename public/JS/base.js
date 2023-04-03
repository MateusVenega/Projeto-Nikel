const nome = "marcelo eltz";
let nome2= "";
let pessoaDefault =  {
    nome : "marcelo eltz",
    idade : "33",
    trabalho : "programador"
}

let nomes = ["marcelo eltz", "maria silva", "pedro silva"];
let pessoas = [
    {
        nome : "marcelo eltz",
        idade : "33",
        trabalho : "programador" 
    },
    {
        nome : "maria silva",
        idade : "25",
        trabalho : "UX/UI designer"
    }
];


function alterarNome() {
    nome2 = "maria silva";
    console.log("valor alterado");
    console.log (nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("nome:");
    console.log(pessoa.nome);

    console.log("idade:")
    console.log(pessoa.idade);

    console.log("trabalho:")
    console.log(pessoa.trabalho);
}


function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    console.log("-------IMPRIMIR PESSOAS------");
    pessoas.forEach((item) => {
        console.log("nome");
        console.log(item.nome);

        console.log("idade:")
        console.log(item.idade);
    
        console.log("trabalho:")
        console.log(item.trabalho);
    } )
}

imprimirPessoas();

adicionarPessoa({
    nome: "pedro silva",
    idade:"28",
    trabalho: "porteiro"
});

imprimirPessoas();



//imprimirPessoa(pessoaDefault);

// imprimirPessoa({
//     nome: "maria silva"
//     idade: "25"
//     trabaalho: "UX/UI designer"
// });

//recebeEalteraNome("joao silva perereira");
//recebeEalteraNome("maria silva")

//alterarNome();