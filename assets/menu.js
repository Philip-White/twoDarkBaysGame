

class menu extends Phaser.Scene{
  constructor () {
    super({key:"menu"});
  }

  preload(){
    this.load.image("woodenFloor", "../assets/tilesets/woodenFloor.jpg");
    this.load.image("Two-Dark-BaysWhiteBG", "../assets/tilesets/Two-Dark-BaysWhiteBG.png");
  }


create (){
  this.add.image(400,300, "woodenFloor").setScale(.3);
  this.add.image(400, 300, "Two-Dark-BaysWhiteBG").setScale(.7);
this.text = this.add.text(270,500, "Two Dark Bays Game", {font: "30px impact", color: "black"});
/*this is another way to use the keys on the keyboard.  https://www.youtube.com/watch?v=7cpZ5Y7THmo&t=763s
quicker so you don't have to make the update funcion as well.
*/
this.input.keyboard.on('keyup', function(e){
  if(e.key == "p"){
    this.scene.start("level1");
  }
}, this);

  }

}
