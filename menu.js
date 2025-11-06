import pkg from "prompt-sync";
const prompt = pkg();



function lerNumero(msg) {
  const s = prompt(msg);
  const n = Number(s.replace(',', '.'));
  if (Number.isNaN(n)) {
    console.log("Entrada inválida. Usando 0.");
    return 0;
  }
  return n;
}

function lerTexto(msg) {
  return prompt(msg);
}


function ex1() {
  console.log("1) Redução do tempo de vida de um fumante");
  const cigPorDia = lerNumero("Quantos cigarros por dia? ");
  const anos = lerNumero("Quantos anos fumou? ");
  const minutosPerdidosPorCigarro = 10;
  const minutosPerdidosTotal = cigPorDia * anos * 365 * minutosPerdidosPorCigarro;
  const diasPerdidos = minutosPerdidosTotal / (60 * 24);
  console.log(`Total de dias de vida perdidos (aprox): ${diasPerdidos.toFixed(2)} dias`);
}

function ex2() {
  console.log("2) Verificador de multa por velocidade");
  const vel = lerNumero("Velocidade do carro (km/h): ");
  const limite = 80;
  if (vel > limite) {
    const excesso = vel - limite;
    const multa = excesso * 5;
    console.log(`Multado! Excesso: ${excesso.toFixed(2)} km/h. Multa: R$ ${multa.toFixed(2)}`);
  } else {
    console.log("Velocidade dentro do limite.");
  }
}

function ex3() {
  console.log("3) Preço da passagem");
  const km = lerNumero("Distância em km: ");
  const preco = km <= 200 ? 0.50 : 0.45;
  console.log(`Preço: R$ ${(km * preco).toFixed(2)}`);
}

function ex4() {
  console.log("4) Verificar se segmentos formam triângulo");
  const a = lerNumero("Segmento A: ");
  const b = lerNumero("Segmento B: ");
  const c = lerNumero("Segmento C: ");
  const pode = a < b + c && b < a + c && c < a + b;
  console.log(pode ? "Pode formar triângulo." : "Não pode formar triângulo.");
}

function ex5() {
  console.log("5) JoKenPo - Pedra, Papel ou Tesoura");
  const escolhas = ['pedra', 'papel', 'tesoura'];
  const user = lerTexto("Escolha (pedra/papel/tesoura): ").toLowerCase().trim();
  if (!escolhas.includes(user)) {
    console.log("Escolha inválida.");
    return;
  }
  const pc = escolhas[Math.floor(Math.random() * 3)];
  console.log(`PC escolheu: ${pc}`);
  if (user === pc) console.log("Empate!");
  else if (
    (user === 'pedra' && pc === 'tesoura') ||
    (user === 'papel' && pc === 'pedra') ||
    (user === 'tesoura' && pc === 'papel')
  ) console.log("Você venceu!");
  else console.log("Você perdeu!");
}

function ex6() {
  console.log("6) Adivinhe o número (1-5)");
  const sorteado = Math.floor(Math.random() * 5) + 1;
  const palpite = Math.round(lerNumero("Seu palpite (1-5): "));
  if (palpite === sorteado) console.log("Acertou!");
  else console.log(`Errou. Número sorteado foi ${sorteado}.`);
}

function ex7() {
  console.log("7) Aluguel de carros");
  const tipo = lerTexto("Tipo (popular/luxo): ").toLowerCase().trim();
  const dias = lerNumero("Dias de aluguel: ");
  const km = lerNumero("Km percorridos: ");
  let diaria = 0;
  let valorKm = 0;
  if (tipo === 'popular') {
    diaria = 90;
    valorKm = km <= 100 ? 0.20 : 0.10;
  } else if (tipo === 'luxo') {
    diaria = 150;
    valorKm = km <= 200 ? 0.30 : 0.25;
  } else {
    console.log("Tipo inválido.");
    return;
  }
  const total = dias * diaria + km * valorKm;
  console.log(`Total a pagar: R$ ${total.toFixed(2)}`);
}

function ex8() {
  console.log("8) Pontos por atividade física");
  const horas = lerNumero("Horas de atividade no mês: ");
  let pontosPorHora = 0;
  if (horas <= 10) pontosPorHora = 2;
  else if (horas <= 20) pontosPorHora = 5;
  else pontosPorHora = 10;
  const pontos = horas * pontosPorHora;
  const dinheiro = pontos * 0.05;
  console.log(`Pontos: ${pontos}. Dinheiro ganho: R$ ${dinheiro.toFixed(2)}`);
}

function ex9() {
  console.log("9) Soma de salários por sexo");
  let totalHomens = 0;
  let totalMulheres = 0;
  while (true) {
    const salario = lerNumero("Salário do funcionário: R$ ");
    const sexo = lerTexto("Sexo (M/F): ").toUpperCase().trim();
    if (sexo === 'M' || sexo === 'H' || sexo === 'HOMEM') totalHomens += salario;
    else totalMulheres += salario;
    const cont = lerTexto("Deseja continuar? (s/n): ").toLowerCase();
    if (cont !== 's' && cont !== 'sim') break;
  }
  console.log(`Total pago a homens: R$ ${totalHomens.toFixed(2)}`);
  console.log(`Total pago a mulheres: R$ ${totalMulheres.toFixed(2)}`);
}

function ex10() {
  console.log("10) Estatísticas de números (faça-enquanto)");
  let soma = 0, count = 0, menor = null, pares = 0;
  while (true) {
    const n = lerNumero("Digite um número: ");
    soma += n;
    count++;
    if (menor === null || n < menor) menor = n;
    if (n % 2 === 0) pares++;
    const cont = lerTexto("Continuar? (s/n): ").toLowerCase();
    if (cont !== 's' && cont !== 'sim') break;
  }
  console.log(`Soma: ${soma}`);
  console.log(`Menor: ${menor}`);
  console.log(`Média: ${(soma / count).toFixed(2)}`);
  console.log(`Números pares: ${pares}`);
}

function ex11() {
  console.log("11) Progressão Aritmética (PA)");
  const a1 = lerNumero("Primeiro termo: ");
  const r = lerNumero("Razão: ");
  const termos = [];
  for (let i = 0; i < 10; i++) termos.push(a1 + i * r);
  const soma = termos.reduce((s, v) => s + v, 0);
  console.log("10 primeiros termos:", termos.join(', '));
  console.log("Soma:", soma);
}

function ex12() {
  console.log("12) 10 primeiros da Fibonacci");
  const fib = [1, 1];
  while (fib.length < 10) {
    const len = fib.length;
    fib.push(fib[len - 1] + fib[len - 2]);
  }
  console.log(fib.join(', '));
}

function ex13() {
  console.log("13) Vetor com 15 primeiros elementos da Fibonacci");
  const fib = Array(15).fill(0);
  fib[0] = 1;
  fib[1] = 1;
  for (let i = 2; i < 15; i++) fib[i] = fib[i - 1] + fib[i - 2];
  console.log(fib);
}

function ex14() {
  console.log("14) Ler 7 nomes e mostrar em ordem inversa");
  const nomes = [];
  for (let i = 0; i < 7; i++) {
    nomes.push(lerTexto(`Nome ${i+1}: `));
  }
  console.log("Ordem inversa:");
  for (let i = nomes.length - 1; i >= 0; i--) console.log(nomes[i]);
}

function ex15() {
  console.log("15) Ler 10 inteiros e mostrar pares com posições");
  const nums = [];
  for (let i = 0; i < 10; i++) nums.push(Math.trunc(lerNumero(`Número ${i+1}: `)));
  console.log("Pares encontrados:");
  nums.forEach((v, idx) => {
    if (v % 2 === 0) console.log(`Valor ${v} na posição ${idx}`);
  });
}

function ex16() {
  console.log("16) Vetor 20 aleatórios e ordenação");
  const v = Array.from({length:20}, () => Math.floor(Math.random()*100));
  console.log("Gerados:", v.join(', '));
  const ordenado = [...v].sort((a,b) => a-b);
  console.log("Ordenados:", ordenado.join(', '));
}

function ex17() {
  console.log("17) Ler 9 pessoas e mostrar menores de idade");
  const nomes = [];
  const idades = [];
  for (let i = 0; i < 9; i++) {
    nomes.push(lerTexto(`Nome ${i+1}: `));
    idades.push(Math.trunc(lerNumero(`Idade ${i+1}: `)));
  }
  console.log("Menores de idade:");
  for (let i = 0; i < 9; i++) if (idades[i] < 18) console.log(`${nomes[i]} - ${idades[i]} anos`);
}

function ex18() {
  console.log("18) Registro de funcionário");
  const funcionario = {
    nome: lerTexto("Nome: "),
    cargo: lerTexto("Cargo: "),
    salario: lerNumero("Salário: R$ ")
  };
  console.log("Conteúdo do registro:");
  console.log(funcionario);
}

function ex19() {
  console.log("19) Ler 5 horários e validar");
  function validaHora(h,m,s) {
    return (h>=0 && h<=23 && m>=0 && m<=59 && s>=0 && s<=59);
  }
  const horarios = [];
  for (let i = 0; i < 5; i++) {
    while (true) {
      const raw = lerTexto(`Digite horário ${i+1} (HH:MM:SS): `).trim();
      const partes = raw.split(/[:.]/).map(p => Number(p));
      if (partes.length === 3 && partes.every(p => !Number.isNaN(p)) && validaHora(partes[0], partes[1], partes[2])) {
        horarios.push(`${String(partes[0]).padStart(2,'0')}.${String(partes[1]).padStart(2,'0')}.${String(partes[2]).padStart(2,'0')}`);
        break;
      } else {
        console.log("Horário inválido. Tente novamente.");
      }
    }
  }
  console.log("Horários validados:");
  horarios.forEach(h => console.log(h));
}

function ex20() {
  console.log("20) Contracheque para 80 empregados (faça quantos quiser)");
  const n = lerNumero("Quantos funcionários deseja processar? (ex: 80) ");
  for (let i = 0; i < n; i++) {
    console.log(`--- Funcionário ${i+1} ---`);
    const matricula = lerTexto("Matrícula: ");
    const nome = lerTexto("Nome: ");
    const salario = lerNumero("Salário bruto: R$ ");
    const deducao = salario * 0.12;
    const liquido = salario - deducao;
    console.log("Matrícula:", matricula);
    console.log("Nome:", nome);
    console.log("Salário bruto: R$", salario.toFixed(2));
    console.log("Dedução INSS (12%): R$", deducao.toFixed(2));
    console.log("Salário líquido: R$", liquido.toFixed(2));
  }
}

function ex21() {
  console.log("21) Peso ideal por sexo");
  const alt = lerNumero("Altura (m): ");
  const sexo = lerTexto("Sexo (M/F): ").toUpperCase();
  let peso;
  if (sexo === 'M' || sexo === 'H') peso = 72.7 * alt - 58;
  else peso = 62.1 * alt - 44.7;
  console.log(`Peso ideal: ${peso.toFixed(2)} kg`);
}

function ex22() {
  console.log("22) Pesquisa salários e número de filhos");
  let somaSal = 0, somaFilhos = 0, maiorSal = 0, count = 0, contaAte350 = 0;
  while (true) {
    const sal = lerNumero("Salário (ou digite 'fim' para encerrar): R$ ");
    // Note: para simplificar, usuário pode digitar fim interrompendo; aqui tratamos se entrada foi NaN
    if (isNaN(sal)) break;
    const filhos = lerNumero("Número de filhos: ");
    somaSal += sal;
    somaFilhos += filhos;
    if (sal > maiorSal) maiorSal = sal;
    if (sal <= 350) contaAte350++;
    count++;
    const cont = lerTexto("Continuar? (s/n): ").toLowerCase();
    if (cont !== 's' && cont !== 'sim') break;
  }
  if (count === 0) {
    console.log("Nenhum dado informado.");
    return;
  }
  console.log(`Média de salário: R$ ${(somaSal/count).toFixed(2)}`);
  console.log(`Média de número de filhos: ${(somaFilhos/count).toFixed(2)}`);
  console.log(`Maior salário: R$ ${maiorSal.toFixed(2)}`);
  console.log(`Percentual com salário até R$350: ${(contaAte350/count*100).toFixed(2)}%`);
}

function ex23() {
  console.log("23) Matriz identidade 7x7");
  const n = 7;
  const mi = Array.from({length:n}, (_,i) => Array.from({length:n}, (_,j) => (i===j?1:0)));
  mi.forEach(row => console.log(row.join(' ')));
}

function ex24() {
  console.log("24) Contar negativos por linha em matriz 6x8");
  const M = [];
  for (let i = 0; i < 6; i++) {
    const row = [];
    for (let j = 0; j < 8; j++) {
      row.push(lerNumero(`M[${i}][${j}]: `));
    }
    M.push(row);
  }
  const C = M.map(row => row.filter(x => x < 0).length);
  console.log("Vetor C (negativos por linha):", C);
}

function ex25() {
  console.log("25) Soma de cada coluna em matriz 15x20");
  const linhas = 15, col = 20;
  const M = [];
  for (let i = 0; i < linhas; i++) {
    const row = [];
    for (let j = 0; j < col; j++) {
      row.push(lerNumero(`M[${i}][${j}]: `));
    }
    M.push(row);
  }
  const somaCol = Array(col).fill(0);
  for (let j = 0; j < col; j++) {
    for (let i = 0; i < linhas; i++) somaCol[j] += M[i][j];
  }
  console.log("Somas por coluna:", somaCol);
}

function ex26() {
  console.log("26) Produto de matrizes A[3,5] e B[3,5] (elemento-a-elemento)");
  const A = [], B = [];
  for (let i=0;i<3;i++){
    const ra=[]; const rb=[];
    for (let j=0;j<5;j++){
      ra.push(lerNumero(`A[${i}][${j}]: `));
      rb.push(lerNumero(`B[${i}][${j}]: `));
    }
    A.push(ra); B.push(rb);
  }
  const P = A.map((row,i)=>row.map((v,j)=>v*B[i][j]));
  console.log("Matriz produto P:");
  P.forEach(r=>console.log(r.join(' ')));
}

function ex27() {
  console.log("27) Multiplicar M[6][6] por A e colocar em vetor V(36)");
  const M = [];
  for (let i=0;i<6;i++){
    const row=[];
    for (let j=0;j<6;j++){
      row.push(lerNumero(`M[${i}][${j}]: `));
    }
    M.push(row);
  }
  const A = lerNumero("Valor A: ");
  const V = [];
  for (let i=0;i<6;i++) for (let j=0;j<6;j++) V.push(M[i][j]*A);
  console.log("Vetor V:", V);
}

function ex28() {
  console.log("28) Soma dos elementos acima e abaixo da diagonal principal em 10x10");
  const n = 10;
  const M = [];
  for (let i=0;i<n;i++){
    const row=[];
    for (let j=0;j<n;j++) row.push(lerNumero(`M[${i}][${j}]: `));
    M.push(row);
  }
  let somaAcima = 0, somaAbaixo = 0;
  for (let i=0;i<n;i++){
    for (let j=0;j<n;j++){
      if (j > i) somaAcima += M[i][j];
      if (j < i) somaAbaixo += M[i][j];
    }
  }
  console.log("Soma acima da diagonal:", somaAcima);
  console.log("Soma abaixo da diagonal:", somaAbaixo);
}

function ex29() {
  console.log("29) Somas específicas em matriz 5x5");
  const n = 5;
  const M = [];
  for (let i=0;i<n;i++){
    const row=[];
    for (let j=0;j<n;j++) row.push(lerNumero(`M[${i}][${j}]: `));
    M.push(row);
  }
  const somaLinha4 = M[3].reduce((s,v)=>s+v,0); // índice 3 = linha 4
  let somaCol2 = 0, diag = 0, total = 0;
  for (let i=0;i<n;i++){
    somaCol2 += M[i][1];
    diag += M[i][i];
    total += M[i].reduce((s,v)=>s+v,0);
  }
  console.log("Soma linha 4:", somaLinha4);
  console.log("Soma coluna 2:", somaCol2);
  console.log("Soma diagonal principal:", diag);
  console.log("Soma total:", total);
  console.log("Matriz:");
  M.forEach(r=>console.log(r.join(' ')));
}

function ex30() {
  console.log("30) Somar linhas e colunas de M[5x5]");
  const n = 5;
  const M = [];
  for (let i=0;i<n;i++){
    const row=[];
    for (let j=0;j<n;j++) row.push(lerNumero(`M[${i}][${j}]: `));
    M.push(row);
  }
  const SL = M.map(row => row.reduce((s,v)=>s+v,0));
  const SC = Array(n).fill(0);
  for (let j=0;j<n;j++) for (let i=0;i<n;i++) SC[j] += M[i][j];
  console.log("Matriz:");
  M.forEach(r=>console.log(r.join(' ')));
  console.log("SL (soma linhas):", SL);
  console.log("SC (soma colunas):", SC);
}

function ex31() {
  console.log("31) Contar ocorrências de A em matriz 30x30 e criar X com elementos diferentes");
  const A = Math.trunc(lerNumero("Valor A: "));
  const linhas = 30, col = 30;
  const V = [];
  let cont = 0;
  const X = [];
  for (let i=0;i<linhas;i++){
    const row=[];
    for (let j=0;j<col;j++){
      const val = Math.trunc(lerNumero(`V[${i}][${j}]: `));
      row.push(val);
      if (val === A) cont++;
      else X.push(val);
    }
    V.push(row);
  }
  console.log(`Quantidade de valores iguais a ${A}:`, cont);
  console.log("Matriz X (elementos diferentes de A):", X);
}

function ex32() {
  console.log("32) Dividir cada elemento de linha pelo maior em módulo da linha (M[12,13])");
  const linhas=12, col=13;
  const M = [];
  for (let i=0;i<linhas;i++){
    const row=[];
    for (let j=0;j<col;j++) row.push(lerNumero(`M[${i}][${j}]: `));
    M.push(row);
  }
  console.log("Matriz original:");
  M.forEach(r=>console.log(r.join(' ')));
  const mod = M.map(row => Math.max(...row.map(x => Math.abs(x))));
  const modificado = M.map((row,i) => row.map(v => (mod[i] === 0 ? 0 : v / mod[i])));
  console.log("Matriz modificada:");
  modificado.forEach(r=>console.log(r.join(' ')));
}

function ex33() {
  console.log("33) Multiplicar diagonal principal pela média da diagonal secundária (3x3)");
  const n=3;
  const M=[];
  for (let i=0;i<n;i++){ const row=[]; for (let j=0;j<n;j++) row.push(lerNumero(`M[${i}][${j}]: `)); M.push(row); }
  const diagSec = [M[0][2], M[1][1], M[2][0]];
  const mediaDiagSec = diagSec.reduce((s,v)=>s+v,0)/diagSec.length;
  for (let i=0;i<n;i++) M[i][i] = M[i][i] * mediaDiagSec;
  console.log("Matriz resultante:");
  M.forEach(r=>console.log(r.join(' ')));
}

function ex34() {
  console.log("34) Multiplicar cada linha pelo elemento da diagonal principal (50x50)");
  const n=50;
  const M=[];
  for (let i=0;i<n;i++){
    const row=[];
    for (let j=0;j<n;j++) row.push(lerNumero(`M[${i}][${j}]: `));
    M.push(row);
  }
  for (let i=0;i<n;i++){
    const factor = M[i][i];
    for (let j=0;j<n;j++) M[i][j] *= factor;
  }
  console.log("Matriz após multiplicação (mostrando primeiras 5 linhas):");
  M.slice(0,5).forEach(r=>console.log(r.slice(0,10).join(' ')));
  console.log("... (matriz grande não exibida por completo)");
}

function ex35() {
  console.log("35) Separar em vetores pares/ímpares de tamanho 5 com 30 valores");
  const pares = [], impares = [];
  const outPares = [], outImpares = [];
  for (let i=0;i<30;i++){
    const v = Math.trunc(lerNumero(`Valor ${i+1}: `));
    if (v % 2 === 0) pares.push(v);
    else impares.push(v);
    if (pares.length === 5) { console.log("Vetor pares cheio:", pares); outPares.push([...pares]); pares.length=0; }
    if (impares.length === 5) { console.log("Vetor impares cheio:", impares); outImpares.push([...impares]); impares.length=0; }
  }
  if (pares.length) console.log("Pares finais (incompletos):", pares);
  if (impares.length) console.log("Impares finais (incompletos):", impares);
}

function ex36() {
  console.log("36) Loteria esportiva - gabarito de 13 posições e 100 apostadores");
  const gabarito = [];
  console.log("Digite gabarito (13 números):");
  for (let i=0;i<13;i++) gabarito.push(Math.trunc(lerNumero(`G[${i+1}]: `)));
  const apostadores = Math.trunc(lerNumero("Quantos apostadores (máx 100): "));
  for (let a=0;a<apostadores;a++){
    const numCartao = lerTexto(`Número do cartão apostador ${a+1}: `);
    let respostas = [];
    for (let i=0;i<13;i++) respostas.push(Math.trunc(lerNumero(`Resposta ${i+1}: `)));
    let acertos = 0;
    for (let i=0;i<13;i++) if (respostas[i] === gabarito[i]) acertos++;
    console.log(`Apostador ${numCartao} - Acertos: ${acertos}`);
    if (acertos === 13) console.log("Parabéns, tu foi o GANHADOR");
  }
}

function ex37() {
  console.log("37) Prova com gabarito de 20 e 50 alunos");
  const G = [];
  console.log("Digite gabarito (20 letras/caracteres):");
  for (let i=0;i<20;i++) G.push(lerTexto(`G[${i+1}]: `));
  const alunos = Math.trunc(lerNumero("Quantos alunos (max 50): "));
  for (let a=0;a<alunos;a++){
    console.log(`Aluno ${a+1}:`);
    const R = [];
    for (let i=0;i<20;i++) R.push(lerTexto(`Resposta ${i+1}: `));
    let acertos = 0;
    for (let i=0;i<20;i++) if (R[i] === G[i]) acertos++;
    console.log(`Acertos: ${acertos} - ${acertos>=12 ? "APROVADO" : "REPROVADO"}`);
  }
}

function ex38() {
  console.log("38) Operações sobre vetor de 6 posições");
  const V = [];
  for (let i=0;i<6;i++) V.push(lerNumero(`V[${i}]: `));
  console.log("Escolha operação:");
  console.log("1 - soma\n2 - produto\n3 - média\n4 - ordenar crescente\n5 - mostrar vetor");
  const op = Math.trunc(lerNumero("Opção: "));
  switch(op) {
    case 1: console.log("Soma:", V.reduce((s,v)=>s+v,0)); break;
    case 2: console.log("Produto:", V.reduce((p,v)=>p*v,1)); break;
    case 3: console.log("Média:", V.reduce((s,v)=>s+v,0)/V.length); break;
    case 4: console.log("Ordenado:", [...V].sort((a,b)=>a-b)); break;
    case 5: console.log("Vetor:", V); break;
    default: console.log("Opção inválida.");
  }
}

function ex39() {
  console.log("39) Compactar vetor A (100) para B (remover nulos e negativos)");
  const A = [];
  for (let i=0;i<100;i++) A.push(lerNumero(`A[${i}]: `));
  const B = A.filter(x => x > 0);
  console.log("Vetor B:", B);
}

function ex40() {
  console.log("40) Loto - verificar quinas");
  const resultado = [];
  console.log("Digite resultado oficial (5 números):");
  for (let i=0;i<5;i++) resultado.push(Math.trunc(lerNumero(`Res[${i+1}]: `)));
  const apostas = Math.trunc(lerNumero("Quantas apostas (max 50): "));
  for (let a=0;a<apostas;a++){
    const aposta = [];
    console.log(`Aposta ${a+1}:`);
    for (let i=0;i<5;i++) aposta.push(Math.trunc(lerNumero(`N[${i+1}]: `)));
    const igual = resultado.every(v => aposta.includes(v)) && aposta.length === 5;
    if (igual) console.log("Ganhador");
    else console.log("Não é ganhador");
  }
}

function ex41() {
  console.log("41) Acessar e modificar objeto pessoa");
  const pessoa = { nome: lerTexto("Nome: "), idade: Math.trunc(lerNumero("Idade: "))};
  console.log("Idade:", pessoa.idade);
  pessoa.email = lerTexto("Email: ");
  console.log("Objeto atualizado:", pessoa);
}

function ex42() {
  console.log("42) Filtrar propriedades que são arrays");
  const dados = {};
  const n = Math.trunc(lerNumero("Quantas propriedades quer adicionar ao objeto 'dados'? "));
  for (let i=0;i<n;i++){
    const chave = lerTexto(`Nome da propriedade ${i+1}: `);
    const tipo = lerTexto("Tipo (number/string/array): ").toLowerCase();
    if (tipo === 'array') {
      const tam = Math.trunc(lerNumero("Tamanho do array: "));
      const arr = [];
      for (let j=0;j<tam;j++) arr.push(lerTexto(`Elemento ${j+1}: `));
      dados[chave] = arr;
    } else if (tipo === 'number') dados[chave] = Number(lerNumero("Valor numérico: "));
    else dados[chave] = lerTexto("Valor string: ");
  }
  const resultado = {};
  Object.keys(dados).forEach(k => {
    if (Array.isArray(dados[k])) resultado[k] = dados[k];
  });
  console.log("Novo objeto apenas com arrays:", resultado);
}

function ex43() {
  console.log("43) Combinar dois objetos (obj2 tem precedência)");
  const obj1 = JSON.parse(lerTexto("Digite obj1 em JSON: "));
  const obj2 = JSON.parse(lerTexto("Digite obj2 em JSON: "));
  const combinado = {...obj1, ...obj2}; // obj2 sobrescreve
  console.log("Objeto combinado:", combinado);
}

function ex44() {
  console.log("44) Contar propriedades do tipo string num objeto");
  const obj = JSON.parse(lerTexto("Digite o objeto em JSON: "));
  const cont = Object.values(obj).filter(v => typeof v === 'string').length;
  console.log("Quantidade de propriedades string:", cont);
}

function ex45() {
  console.log("45) Contar ocorrências de strings no array");
  const n = Math.trunc(lerNumero("Quantas strings no array? "));
  const arr = [];
  for (let i=0;i<n;i++) arr.push(lerTexto(`String ${i+1}: `));
  const contagem = {};
  arr.forEach(s => contagem[s] = (contagem[s]||0) + 1);
  console.log("Objeto de contagem:", contagem);
}

function ex46() {
  console.log("46) Total de vendas por vendedor");
  const n = Math.trunc(lerNumero("Quantas transações? "));
  const vendas = [];
  for (let i=0;i<n;i++) {
    const vendedor = lerTexto("Nome do vendedor: ");
    const valor = Number(lerNumero("Valor da venda: "));
    vendas.push({vendedor, valor});
  }
  const resumo = {};
  vendas.forEach(t => resumo[t.vendedor] = (resumo[t.vendedor]||0) + t.valor);
  console.log("Resumo vendas por vendedor:", resumo);
}

function ex47() {
  console.log("47) Aplicar função a cada propriedade do objeto");
  const obj = JSON.parse(lerTexto("Digite o objeto em JSON (valores numéricos recomendados): "));
  console.log("Forneça expressão em JavaScript que recebe 'v' e retorna novo valor. Ex: v*2");
  const expr = lerTexto("Expressão (use 'v'): ");
  const fn = new Function('v', `return ${expr};`);
  const novo = {};
  Object.keys(obj).forEach(k => novo[k] = fn(obj[k]));
  console.log("Objeto transformado:", novo);
}

function ex48() {
  console.log("48) Combinar inventários de duas lojas");
  const a = JSON.parse(lerTexto("inventarioLojaA (JSON): "));
  const b = JSON.parse(lerTexto("inventarioLojaB (JSON): "));
  const combinado = {...a};
  Object.keys(b).forEach(k => combinado[k] = (combinado[k]||0) + b[k]);
  console.log("Inventário combinado:", combinado);
}

function ex49() {
  console.log("49) Agrupar transações por categoria com subtotal");
  const n = Math.trunc(lerNumero("Quantas transações? "));
  const trans = [];
  for (let i=0;i<n;i++) {
    const id = lerTexto("id: ");
    const valor = Number(lerNumero("valor: "));
    const data = lerTexto("data (string): ");
    const categoria = lerTexto("categoria: ");
    trans.push({id, valor, data, categoria});
  }
  const out = {};
  trans.forEach(t => {
    if (!out[t.categoria]) out[t.categoria] = {transacoes: [], subtotal: 0};
    out[t.categoria].transacoes.push(t);
    out[t.categoria].subtotal += t.valor;
  });
  console.log("Resultado agrupado:", out);
}

function ex50() {
  console.log("50) Sistema simples de reserva de hotéis");
  const hoteis = [];
  const reservas = [];
  function adicionarHotel() {
    const id = lerTexto("ID do hotel: ");
    const nome = lerTexto("Nome do hotel: ");
    const cidade = lerTexto("Cidade: ");
    const quartosTotais = Math.trunc(lerNumero("Quartos totais: "));
    const disponiveis = Math.trunc(lerNumero("Quartos disponíveis: "));
    hoteis.push({id, nome, cidade, quartosTotais, disponiveis, avaliacoes: []});
    console.log("Hotel adicionado.");
  }
  function buscarPorCidade() {
    const cidade = lerTexto("Cidade para busca: ");
    const encontrados = hoteis.filter(h => h.cidade.toLowerCase() === cidade.toLowerCase());
    console.log("Hotéis nessa cidade:", encontrados);
  }
  function fazerReserva() {
    const idHotel = lerTexto("ID do hotel para reserva: ");
    const hotel = hoteis.find(h => h.id === idHotel);
    if (!hotel) { console.log("Hotel não encontrado."); return; }
    if (hotel.disponiveis <= 0) { console.log("Sem quartos disponíveis."); return; }
    const idReserva = `R${reservas.length+1}`;
    const nomeCliente = lerTexto("Nome do cliente: ");
    reservas.push({idReserva, idHotel, nomeCliente});
    hotel.disponiveis -= 1;
    console.log("Reserva criada:", idReserva);
  }
  function cancelarReserva() {
    const idReserva = lerTexto("ID da reserva a cancelar: ");
    const idx = reservas.findIndex(r=>r.idReserva===idReserva);
    if (idx === -1) { console.log("Reserva não encontrada."); return; }
    const res = reservas.splice(idx,1)[0];
    const hotel = hoteis.find(h=>h.id===res.idHotel);
    if (hotel) hotel.disponiveis += 1;
    console.log("Reserva cancelada.");
  }
  function listarReservas() {
    console.log("Reservas:");
    reservas.forEach(r => {
      const hotel = hoteis.find(h=>h.id===r.idHotel) || {};
      console.log({...r, hotelNome: hotel.nome});
    });
  }
  function avaliarHotel() {
    const id = lerTexto("ID do hotel a avaliar: ");
    const hotel = hoteis.find(h=>h.id===id);
    if (!hotel) { console.log("Hotel não encontrado."); return; }
    const nota = lerNumero("Nota (1-5): ");
    const comentario = lerTexto("Comentário: ");
    hotel.avaliacoes.push({nota, comentario});
    console.log("Avaliação adicionada.");
  }

  while (true) {
    console.log("\n--- Menu Hotéis ---");
    console.log("1 Adicionar hotel  2 Buscar por cidade  3 Fazer reserva  4 Cancelar reserva");
    console.log("5 Listar reservas  6 Listar hotéis  7 Avaliar hotel  0 Sair");
    const op = lerNumero("Opção: ");
    if (op === 0) break;
    switch (op) {
      case 1: adicionarHotel(); break;
      case 2: buscarPorCidade(); break;
      case 3: fazerReserva(); break;
      case 4: cancelarReserva(); break;
      case 5: listarReservas(); break;
      case 6: console.log("Hotéis:", hoteis); break;
      case 7: avaliarHotel(); break;
      default: console.log("Opção inválida."); break;
    }
  }
}

const mapas = {
  1: ex1, 2: ex2, 3: ex3, 4: ex4, 5: ex5, 6: ex6, 7: ex7, 8: ex8, 9: ex9, 10: ex10,
  11: ex11, 12: ex12, 13: ex13, 14: ex14, 15: ex15, 16: ex16, 17: ex17, 18: ex18, 19: ex19, 20: ex20,
  21: ex21, 22: ex22, 23: ex23, 24: ex24, 25: ex25, 26: ex26, 27: ex27, 28: ex28, 29: ex29, 30: ex30,
  31: ex31, 32: ex32, 33: ex33, 34: ex34, 35: ex35, 36: ex36, 37: ex37, 38: ex38, 39: ex39, 40: ex40,
  41: ex41, 42: ex42, 43: ex43, 44: ex44, 45: ex45, 46: ex46, 47: ex47, 48: ex48, 49: ex49, 50: ex50
};

function menu() {

  while (true) {
      console.log("=== Menu de Exercícios ===");
  console.log("Escolha um número de 1 a 50 para executar o exercício correspondente.");
  console.log("Digite 0 para sair.");
    const escolha = Math.trunc(lerNumero("\nExercício (0 sair): "));
    if (escolha === 0) {
      console.log("Saindo. Até mais!");
      break;
    }
    const fn = mapas[escolha];
    if (fn) {
      try {
        fn();
      } catch (e) {
        console.error("Erro ao executar exercício:", e.message);
      }
    } else {
      console.log("Exercício inválido. Escolha entre 1 e 50.");
    }
  }
}

menu();
