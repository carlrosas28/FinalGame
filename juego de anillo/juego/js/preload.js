preloadGame={
  preload:function() {
    game.load.image("grassbg", "img/grassbg.png");
    game.load.image("menu","img/sunny.jpg")
    game.load.image("kl", "img/kl.png");
    game.load.image('kahon','img/kahon.png');
    game.load.spritesheet("poser1","img/poser.png",50,50);
    game.load.image("right", "img/right.png");
    game.load.image('talon', 'img/talon.png',50,96);
    game.load.image("left", "img/left.png");
    game.load.image('play','img/PlayBtn.png');
   // game.load.image('about', 'assets/images/about.png');
   // game.load.image('restart', 'assets/images/restart.png');
    game.load.spritesheet('pauseButton','img/pause.png',68,54);
    game.load.audio("bg_music"," audio/sound1.mp3");

	 },
  create:function() {
    game.state.start("menuGame");
  },
}