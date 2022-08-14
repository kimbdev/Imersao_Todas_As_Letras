/*
Atividade 13

Adicione a resposta na linha abaixo de cada exercício
Coloque todo o código do arquivo em uma IIFE.
Em todos os retornos, use o console.log para imprimir o resultado.
Use métodos de array e use let e const para variáveis.
*/

(function (){

/*
1 - Declare uma variável que contenha um array com 5 nomes de cidades em strings.
Imprima o tamanho desse array.
*/

let cidades = ['Cuiaba', 'São Paulo', 'Curitiba', 'Natal', 'Salvador']

console.log(`Array 'cidades' contém  ${cidades.length} cidades`) //.length mostra total de elementos na array

/*
2 - Declare uma variável que contenha um array com 5 nomes de países em strings.
Adicione um país no começo do array.
Adicione um país no fim do array.
Imprima esse array.
*/

let paises = ['Brasil', 'Canadá', 'Portugal', 'Europa', 'Russia']

paises.unshift('Argentina') // Adiciona Argentina no começo
paises.push('França') // Adiciona França no final

console.log(paises)


/*
3 - Declare uma variável que contenha um array com 5 nomes de livros em strings.
Remova um item no começo do array.
Remova um item no fim do array.
Imprima esse array.
*/

let livros = ['As Cronicas de Narnia', 'A menina que roubava livros', 'Hoje Eu Sou Alice - Nove Personalidades, uma Mente Torturada', 'Extraordinario', 'As Cronicas de Gelo e Fogo' ]

livros.shift() //Remove Primeiro
livros.pop() //Remove Ultimo

console.log(livros)

/*
4 - Declare uma variável que contenha um array com 5 números entre 10 e 99.
Coloque em um novo array 3 desses números.
Imprima esse novo array.
*/

let numeros = [11, 20 , 36, 56, 82]

let novosNumeros = numeros.slice(1,4) //slice retorna cópia de array apartir de um subarray criado pelo parametro 'inicio,fim'(1,4)

console.log(novosNumeros)

/* 
5 - Declare uma variável que contenha um array com 5 vogais em strings.
Coloque esse array ao contrário e una todas essas letras em uma string.
Imprima em um console.log.
*/

let vogais = ['a', 'e', 'i', 'o', 'u']

let vogaisAoContrario = vogais.reverse().joinjoin("") //reverse inverte a ordem da array & join transforma array em string

console.log(vogaisAoContrario)

})()