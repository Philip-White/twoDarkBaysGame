

class menu extends Phaser.Scene{
  constructor () {
    super({key:"menu"});
  }

  preload(){
    this.load.image("woodenFloor", "../assets/tilesets/woodenFloor.png");
    this.load.image("Two-Dark-BaysWhiteBG", "../assets/tilesets/Two-Dark-BaysWhiteBG.png");
  }


create (){



  this.add.image(400,300, "woodenFloor").setScale(.3);
  this.add.image(400, 300, "Two-Dark-BaysWhiteBG").setScale(.7);
this.text = this.add.text(226,500, "Click anywhere to start", {font: "30px Arvo", color: "black"});
/*this is another way to use the keys on the keyboard.  https://www.youtube.com/watch?v=7cpZ5Y7THmo&t=763s
quicker so you don't have to make the update funcion as well.
*/
this.cameras.main.fadeIn(1000);


this.cameras.main.on('camerafadeoutcomplete', function () {

  this.scene.start("level1");

}, this);

this.input.on('pointerdown', function(event){
     this.cameras.main.fade(1000);
}, this);



  }

}
