playGame={
	 create:function() {
       this.JumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    //game.physics.startSystem(Phaser.Physics.ARCADE);
    // game.physics.startSystem(Phaser.Physics.ARCADE);
    forest = game.add.tileSprite(0,0,900,900,'grassbg');
      player = game.add.sprite(10,270,'poser1');

  
   // game.input.maxPointers=1;
   // game.scale.scaleMode=Phaser.ScaleManager.EXACT_FIT;
   // game.scale.pageAlignHorizontally=true;
   // game.scale.pageAlignVertically=true;
   // game.scale.forceLandscape=true;
   // game.scale.setScreenSize=true;


    
 
 
   right = game.add.button(156,720,"right",this.pushright);
   left = game.add.button(10,720,"left",this.pushleft);
   button = game.add.button(620,720,'talon',this.pushJump);
   bg_music = game.add.audio("bg_music");
   bg_music.play();
 


   
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
     player.body.gravity.y = 1300;
   
    




 
        
    player.body.bounce.y = 0.0;
    // player.body.gravity.y = 700;
    
    player.animations.add('walk-right',[4,5,6,7],7,true);
    player.animations.add('walk-left',[8,9,10,11],7,true);
    



    
    player.animations.add("walk-left",[1,2,3,4],5,true);
    player.animations.add("walk-right",[5,6,7,8],5,true);

    // keyboard = game.input.keyboard.createCursorKeys();
    
    this.createkls(2000);
    this.createkahons(2000);

    kl = game.add.group();
    kl.enableBody = true;

    kahon = game.add.group();
    kahon.enableBody = true;

   

    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;

 
    
  game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    // player.body.gravity.y = 1000;
     game.camera.follow(player);
    
    hi = game.add.text(600, 50, "High Score: " +playGame.getScore(),{font: '20px Arial', fill: '#000000'});
    scoreText = game.add.text(50, 50, 'Score: 0', { fontSize: '32px', fill: '#0000000' })
     score.fixedToCamera=true;


     

     stateText = game.add.text(game.world.centerX,game.world.centerY,' ', { font: '30px Arial', fill: '# 0000000'});
    stateText.anchor.setTo(0.5, 0.5);
    stateText.visible = false;


    
    score.fixedToCamera=true;

    game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);




this.pauseButton = this.game.add.sprite(510, 30, 'pauseButton');
this.pauseButton.inputEnabled = true;
this.pauseButton.events.onInputUp.add(function () {this.game.paused = true;},this);
this.game.input.onDown.add(function () {if(this.game.paused)this.game.paused = false;},this); 

},


 update:function() {

    
    game.physics.arcade.overlap(player,kl,this.killkl);
	game.physics.arcade.overlap(kahon,player,this.killPlayer);


 if(keyboard.left.isDown){
        player.body.velocity.x = -500;
        player.animations.play('walk-left');
        //game.camera.x +=1;
    }
    else if(keyboard.right.isDown){
        player.body.velocity.x = 500;
       // player.body.velocity.y = -500;
        player.body.bounce.y=0.2;
        player.animations.play('walk-right');
        //game.camera.x +=1;
    }
    else if(keyboard.up.isDown){
        player.body.velocity.y = 500;
        player.body.bounce.y=0.2;
       // game.camera.x +=1;
    }
    else if(keyboard.down.isDown){
        player.body.velocity.y = -500;
       // game.camera.x +=1;
    }
    else{
        player.body.velocity.x = 0;
        // player.body.velocity.y = 0;
        player.animations.stop();
    }
    if(keyboard.up.isDown && player.body.touching.down){
       // player.body.velocity.y = -500; 
    }
   
     if(player.body.touching.down){
       // console.log("x");
    
	}
	},
    	 actionOnClick:function(){
                titlepage.visible =!startButton.visible;
                startButton.visible = false;
                game._paused=true;
                startButton.destroy();
               
                if(player.body.touching.down){
                player.frame = 7;
                }
                setTimeout(function(){
                    
                },0)
                    game.camera.follow(player);
            },                         

   createkls:function (time){
            setInterval(function(){

                 kls= kl.create(720,(Math.random()*h),('kl'));

                kls.body.gravity.x=-100;
            },time)

        }, 

        createkahons:function (time){
            setInterval(function(){

                  kahons= kahon.create(780,(Math.random()*h),('kahon'));         
                kahons.body.gravity.x=-500;

                 
            },time)

        }, 







        // var x = 0;

        killkl:function (player,kls){

                x = x + 1;

                kls.kill();

                scoreText.text = "Score: "+x;

  },  

               // var x = 0;

        killgrape:function (player,grapes){

                x = x + 1;

                grapes.kill();

                scoreText.text = "Score: "+x;
},

   
        

        //var x = 0;

        killPlayer:function (player,kahons){
                game._paused = true
                this.Over = game.add.text(300,200, 'GAME OVER ', {font: '50px courier new Black', fill: 'black'});
                game._paused =true;
                player.kill();

                restart = game.add.button(game.width/2, game.height/2,"play", playGame.restart);



},

  // restart:function (){
  //   game.state.start("menuGame");
  //  },

//         killPlayer:function (player,kahons){
               
               
//                 player.kill();
//                 stateText.text=" GAME OVER \n Click to restart";
//                 stateText.visible = true;
//                 button = game.add.button(300,300,"gameover",playGame.restart);

                
// },

pushright:function (){
    player.animations.play('walk-right');
    player.body.velocity.x=1000;
   // player.animations.add("walk-right",[5,6,7,8],5,true);
   //platform.animations.play('move');
     //   topform.animations.play('topmove');

},

pushleft:function (){
    player.animations.play('walk-left');
    player.body.velocity.x=-1000;
    //player.animations.add("walk-left",[1,2,3,4],5,true);
   // platform.animations.play('move');
      //  topform.animations.play('topmove');
},
//pushjump(){
  //  player.animation.play('jump-up');
    //player.body.velosity.y=-900;
//}
       pushJump:function (){
            player.animations.play('jump-up');
            player.body.velocity.y=-600;
        },      



saveScore:function (score){
    localStorage.setItem("gameData",score);
},

getScore:function (){
    return (localStorage.getItem("gameData") == null || localStorage.getItem("gameData") == "")?0:
    localStorage.getItem("gameData");
},

restart:function  () {

   
    window.location.href=window.location.href;
   stateText.visible = false;
}

}
 
