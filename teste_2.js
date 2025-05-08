function calcRank(vitorias, derrotas) {
  // Calcula o saldo
  let saldoVitorias = vitorias - derrotas;
  let nivel = "";

  // Verifica se os valores são números válidos
  if (isNaN(saldoVitorias)) {
    console.log("Valores inválidos! Informe apenas números.");
    return;
  }

  // Verifica qual é o nível do jogador
  if (saldoVitorias < 10) {
    nivel = "FERRO";
  } else if (saldoVitorias <= 20) {
    nivel = "BRONZE";
  } else if (saldoVitorias <= 50) {
    nivel = "PRATA";
  } else if (saldoVitorias <= 80) {
    nivel = "OURO";
  } else if (saldoVitorias <= 90) {
    nivel = "DIAMANTE";
  } else if (saldoVitorias <= 100) {
    nivel = "LENDÁRIO";
  } else {
    nivel = "IMORTAL";
  }

  // Mostra o resultado no console
  return `O Herói tem de saldo ${saldoVitorias} e está no nível de ${nivel}`;
}

// Armazenando o resultado da função em uma variável e exibindo no console
const resultado = calcRank(124, 12);
console.log(resultado);
