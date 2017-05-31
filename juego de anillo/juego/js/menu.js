menuGame={
	create:function(){

		// about = game.add.button(w/2,460,"about",this.abawt);
		// about.anchor.set(0.5);

		menu = game.add.image(0,0,"menu");

		playbtn = game.add.button(game.width/3.0, game.height/2, "play", this.lundag);
		// pbtn = game.add.button(w/2,390,"play",this.lundag);
		// pbtn.anchor.set(0.5);

	},
	update:function(){
		// if(keyboard.left.isDown){
		//     game.state.start("playGame");
		// 	}
		},
	lundag:function (){
		game.state.start("playGame");
   }
}
	



	


// var juegoGame = function(){
//     "use strict";
//     return {
//     	 actionOnClick:function(){
//                 titlepage.visible =!startButton.visible;
//                 startButton.visible = false;
//                 game._paused=true;
//                 startButton.destroy();
               
//                 if(player.body.touching.down){
//                 player.frame = 7;
//                 }
//                 setTimeout(function(){
                    
//                 },0)
//                     game.camera.follow(player);
//             }                         

//    createkls:function (time){
//             setInterval(function(){

//                  kls= kl.create(720,(Math.random()*h),('kl'));

//                 kls.body.gravity.x=-100;
//             },time)

//         } 

//         createkahons:function (time){
//             setInterval(function(){

//                   kahons= kahon.create(780,(Math.random()*h),('kahon'));         
//                 kahons.body.gravity.x=-500;

                 
//             },time)

//         } 







//         var x = 0;

//         function killkl(player,kls){

//                 x = x + 1;

//                 kls.kill();

//                 scoreText.text = "Score: "+x;

//   }  

//                var x = 0;

//         function killgrape(player,grapes){

//                 x = x + 1;

//                 grapes.kill();

//                 scoreText.text = "Score: "+x;
// }

   
        

//         var x = 0;

//         function killPlayer(player,kahons){
//                 game._paused = true
//                 this.Over = game.add.text(200,200, 'GAME OVER ', {font: '50px courier new Black', fill: 'black'});
//                 game._paused =true;
//                 player.kill();



// }



//         function killPlayer(player,kahons){
               
               
//                 player.kill();
//                 stateText.text=" GAME OVER \n Click to restart";
//                 stateText.visible = true;
//                 game.input.onTap.addOnce(restart,this);

                
// }

// function pushright(){
//     player.animations.play('walk-right');
//     player.body.velocity.x=1000;
//    // player.animations.add("walk-right",[5,6,7,8],5,true);
//    //platform.animations.play('move');
//      //   topform.animations.play('topmove');

// }

// function pushleft(){
//     player.animations.play('walk-left');
//     player.body.velocity.x=-1000;
//     //player.animations.add("walk-left",[1,2,3,4],5,true);
//    // platform.animations.play('move');
//       //  topform.animations.play('topmove');
// }
// //function pushjump(){
//   //  player.animation.play('jump-up');
//     //player.body.velosity.y=-900;
// //}
//        function pushJump(){
//             player.animations.play('jump-up');
//             player.body.velocity.y=-600;
//         }       



// function saveScore(score){
//     localStorage.setItem("gameData",score);
// }

// function getScore(){
//     return (localStorage.getItem("gameData") == null || localStorage.getItem("gameData") == "")?0:
//     localStorage.getItem("gameData");
// }

// function restart () {

   
//     window.location.href=window.location.href;
//    stateText.visible = false;
// }

