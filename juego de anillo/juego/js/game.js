var player, keyboard, star, stars, firstaid,platform,topform, kl,kls,kahon,kahons,  score=0, gameover,bulan,labelhi, stateText,introText;
var w = 800, bounds = 5000;
var forest;
var logo;
var startButton;
 var titlepage;
 var grassbg;
var effect_music, title_music, button_music, bg_music;

var timer = 0;
var loadingJump = false;
var x = 0;
var h = 900;

var game = new Phaser.Game(w, h, Phaser.CANVAS, '');


game.state.add('bootGame', bootGame);
game.state.add('preloadGame', preloadGame);
game.state.add('menuGame', menuGame);
game.state.add('playGame', playGame);
game.state.add('winGame', winGame);

game.state.start("bootGame");
