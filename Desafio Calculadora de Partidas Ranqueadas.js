function calcularRankeadas(vitorias, derrotas) {
  // Calcula o saldo de vitórias
  const saldoVitorias = vitorias - derrotas;
  let nivel;

  // Nível com base na quantidade de vitórias
  if (vitorias < 10) {
      nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
      nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = "Lendário";
  } else if (vitorias >= 101) {
      nivel = "Imortal";
  }

  // Exibe a mensagem com o saldo e o nível
  console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}.`);
}

// Chamada da função, pode conter o resultado direto por ex: const vitorias = 13
const vitorias = parseInt(gets());
const derrotas = parseInt(gets());

calcularRankeadas(vitorias, derrotas);