// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados.
// Abaixo segue um exemplo de código que você pode ou não utilizar

let R = parseInt(gets());
let V = 0;

// Complete os espaços em branco com uma possível solução para o problema

while(V <= R){
  V = parseInt(gets());
}

let soma = 0;
let contador = 0;

while(soma <= V){
  
  soma = soma + R;
  R = R + 1;
  contador = contador + 1;
}

print(contador);
  