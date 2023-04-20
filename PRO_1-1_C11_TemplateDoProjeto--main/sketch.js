var path1, path2, boy, leftBoundary, rightBoundary;
var pathImg, boyImg;

function preload() {
  // Carrega a imagem da estrada e as imagens da animação do menino
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup() {
  // Cria o canvas
  createCanvas(400, 400);

  // Cria os sprites da estrada, define sua imagem e sua velocidade
  path1 = createSprite(200, 200);
  path1.addImage(pathImg);
  path1.velocityY = 4;
  path1.scale = 1.2;

  path2 = createSprite(200, -400);
  path2.addImage(pathImg);
  path2.velocityY = 4;
  path2.scale = 1.2;

  // Cria o sprite do menino, define sua animação e sua posição
  boy = createSprite(180, 340, 30, 30);
  boy.scale = 0.08;
  boy.addAnimation("JakeRunning", boyImg);

  // Cria o sprite da borda esquerda e define suas propriedades
  leftBoundary = createSprite(0, 0, 100, 800);
  leftBoundary.visible = false;

  // Cria o sprite da borda direita e define suas propriedades
  rightBoundary = createSprite(410, 0, 100, 800);
  rightBoundary.visible = false;
}

function draw() {
  // Define o fundo como preto
  background(0);

  // Faz as estradas se moverem para baixo
  path1.velocityY = 4;
  path2.velocityY = 4;

  // Faz o menino se mover com o mouse
  boy.x = World.mouseX;

  // Faz o menino colidir com as bordas
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  // Reposiciona as estradas quando elas desaparecem da tela
  if (path1.y > 400) {
    path1.y = -400;
  }

  if (path2.y > 400) {
    path2.y = -400;
  }

  // Desenha os sprites
  drawSprites();
}
