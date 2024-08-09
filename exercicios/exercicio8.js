const { get, print } = require("./main.js");

const lista = [];

for (let i = 0; i < 5; i++) {
  lista[i] = get();
}



/*function mediaFinal(media) {
  if (media < 5) {
    return "Reprovado";
  } else if (media >= 5 && media < 7) {
    return "Recuperação";
  } else {
    return "Aprovado";
  }
}

print(media.toFixed(1) + " - " + mediaFinal(media));
