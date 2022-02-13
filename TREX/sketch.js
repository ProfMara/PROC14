var trex, trex_correndo, trex_colidido;
var solo, soloInvisivel, soloImg;

var nuvem, nuvemImg, grupoNuvens;
var obs, obs1, obs2, obs3, obs4, obs5, obs6;

var pontos;

var PLAY = 1;
var END = 0;
var gameState = PLAY;


function preload() {
    trex_correndo = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_colidido = loadAnimation("trex_collided.png");

    soloImg = loadImage("ground2.png");

    nuvemImg = loadImage("cloud.png");

    obs1 = loadImage("obstacle1.png");
    obs2 = loadImage("obstacle2.png");
    obs3 = loadImage("obstacle3.png");
    obs4 = loadImage("obstacle4.png");
    obs5 = loadImage("obstacle5.png");
    obs6 = loadImage("obstacle6.png");



}

function setup() {
    createCanvas(600, 200);

    trex = createSprite(50, 180, 20, 50);
    trex.addAnimation("correndo", trex_correndo);
    trex.addAnimation("colidiu", trex_colidido)
    trex.scale = 0.5;

    solo = createSprite(200, 180, 400, 20);
    solo.addImage("ground", soloImg);
    solo.x = solo.width / 2;
    solo.velocityX = -4;

    soloInvisivel = createSprite(200, 190, 400, 10);
    soloInvisivel.visible = false;

    pontos = 0;

    nuvemGrupo = new Group();

}

function draw() {
    background(180);
    text("Pontuação: " + pontos, 500, 50);



    if (gameState == PLAY) {




    } else {


    }

    if (solo.x < 0) {
        solo.x = solo.width / 2;
    }

    if (keyDown("space") && trex.y >= 140) {
        trex.velocityY = -13;
    }

    trex.velocityY = trex.velocityY + 0.8

    trex.collide(soloInvisivel);

    //gere as nuvens
    gerarNuvens();

    //gere obstáculos no solo
    gerarObs();

    drawSprites();
}

function gerarObs() {
    if (frameCount % 60 === 0) {
        var obs = createSprite(600, 165, 10, 40);
        obs.velocityX = -6;


        // //gerar obstáculos aleatórios
        var aleatorio = Math.round(random(1, 6));
        switch (aleatorio) {
            case 1:
                obs.addImage(obs1);
                break;
            case 2:
                obs.addImage(obs2);
                break;
            case 3:
                obs.addImage(obs3);
                break;
            case 4:
                obs.addImage(obs4);
                break;
            case 5:
                obs.addImage(obs5);
                break;
            case 6:
                obs.addImage(obs6);
                break;
            default:
                break;
        }

        //atribuir escala e vida útil ao obstáculo             
        obs.scale = 0.5;
        obs.lifetime = 300;





    }
}




function gerarNuvens() {
    //escreva o código aqui para gerar as nuvens
    if (frameCount % 60 === 0) {
        nuvem = createSprite(600, 100, 40, 10);
        nuvem.y = Math.round(random(10, 60));
        nuvem.addImage(nuvemImg);
        nuvem.scale = 0.5;
        nuvem.velocityX = -3;

        //atribuir vida útil à variável
        nuvem.lifetime = 200;

        //ajustar a profundidade
        trex.depth = nuvem.depth + 1;

        nuvemGrupo.add(nuvem);


    }

}