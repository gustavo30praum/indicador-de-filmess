let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (gostaDeFantasia && !gostaDeAventura ){
    
  if (idade < 13) {
        return "Recomendamos assistir 'As Crônicas de Nárnia'.";
    } else if (idade >= 13 && idade < 18) {
        return "Recomendamos assistir 'Coraline e o Mundo Secreto'.";
    } else if (idade >= 18 && idade < 25) {
        return "Recomendamos assistir 'A Forma da Água'.";
    } else {
        return "Recomendamos assistir 'Mágico e Poderoso'.";
    } }
    
     else if (gostaDeAventura && !gostaDeFantasia) {
       
       if (idade < 13) {
        return "Recomendamos assistir 'Moana - Um Mar de Aventuras'.";
    } else if (idade >= 13 && idade < 18) {
        return "Recomendamos assistir 'Harry Potter'.";
    } else if (idade >= 18 && idade < 25) {
        return "Recomendamos assistir 'Interestelar'.";
    } else {
        return "Recomendamos assistir 'Na Natureza Selvagem'.";
    } }
  
  else if (gostaDeAventura && gostaDeFantasia) {
       
       if (idade < 13) {
        return "Recomendamos assistir 'O Castelo Animado'.";
    } else if (idade >= 13 && idade < 18) {
        return "Recomendamos assistir 'A História Sem Fim'.";
    } else if (idade >= 18 && idade < 25) {
        return "Recomendamos assistir 'Labirinto - A Magia do Tempo'.";
    } else {
        return "Recomendamos assistir 'O Hobbit: A Batalha dos Cinco Exércitos'.";
    } }
  
  else  {
       
       if (idade < 13) {
        return "Recomendamos assistir 'Ponyo'.";
    } else if (idade >= 13 && idade < 18) {
        return "Recomendamos assistir 'O Ladrão de Raios'.";
    } else if (idade >= 18 && idade < 25) {
        return "Recomendamos assistir 'O Amante de Lady Chatterley'.";
    } else {
        return "Recomendamos assistir 'Uma Lição de Vida'.";
    } }
   
    }




