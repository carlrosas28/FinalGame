bootGame={
   create:function(){
   	game.physics.startSystem(Phaser.Physics.ARCADE);
    game.world.setBounds(0,0,);
    //game.stage.backgroundColor = "#ddd";
    game.input.maxPointers=1;
   	game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
    game.scale.forceLandscape = true;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.setScreenSize =true;
    keyboard = game.input.keyboard.createCursorKeys();

    game.state.start("preloadGame");

   },
	
}


  
 //  game.input.maxPointers=1;
   //game.scale.scaleMode=Phaser.ScaleManager.EXACT_FIT;
  // game.scale.pageAlignHorizontally=true;
   //game.scale.pageAlignVertically=true;
   //game.scale.forceLandscape=true;
   //game.scale.setScreenSize=true;