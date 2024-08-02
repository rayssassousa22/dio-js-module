const { get, print } = require("./main.js");

let soma = 0;

for (let i = 0; i < 5; i++) {
  const nota = get();
  soma = soma + nota;
}

let media = soma / 5;

function mediaFinal(media) {
  if (media < 5) {
    return "Reprovado";
  } else if (media >= 5 && media < 7) {
    return "Recuperação";
  } else {
    return "Aprovado";
  }
}

print(media.toFixed(1) + " - " + mediaFinal(media));
