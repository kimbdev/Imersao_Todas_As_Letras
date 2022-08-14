// Atividade 11

// Adicione a resposta na linha abaixo de cada exercício

// Utilize a tabela do link para auxiliar no exercício 1 e 2:
// http://www.prosangue.sp.gov.br/artigos/quem_doa_pra_quem.html

// 1 - Crie uma função que recebe o argumento `tipoSanguineo` que recebe uma string
// e faça uma condicional com if para retornar uma string falando para qual tipo sanguíneo o tipo recebido doa.
// Faça para tipo `A+`, `A-` e caso a função receba outro tipo sanguíneo, retornar que não está em nossa base.
// Exemplo se receber A+: "A+ doa para A+ e B+".

function tipoSanguineo (sangue){
    if(sangue === 'A+'){
        return sangue + ' doa para A+ e B+';
    }else if(sangue === 'A-'){
        return sangue + ' doa para A- e AB-';
    }else{
        return 'Não consta em nossa base de dados!';
    }
}

//Assim como exemplo
//console.log(tipoSanguineo("A+"))
//Resultado=A+ doa para A+ e B+



// 2 - Crie uma função que recebe o argumento `tipoSanguineo` que recebe uma string
// e faça uma condicional com switch para retornar uma string falando para qual tipo sanguíneo o tipo recebido doa.
// Faça para tipo `B+`, `B-` e caso a função receba outro tipo sanguíneo, retornar que não está em nossa base.

function tipoSanguineo (sangue){
    switch (sangue){
        case 'B+':
            return sangue + ' doa para B+ e AB+';
            break;
        case 'B-':
            return sangue + ' doa para B+, B-, AB+, AB-'
            break;
        default:
            return 'Não consta em nossa base de dados!';
    }
}

//Resultado
// console.log(tipoSanguineo("O-"))
//Não consta em nossa base de dados!


// 3 - Crie uma laço de repetição com for que se inicia com 5 e incrementa de um em um até chegar em 15.


for(let i= 5 ; i <= 15;i++){
    console.log(i)
}

// Resultado
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
