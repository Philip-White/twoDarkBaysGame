

class menu extends Phaser.Scene{
  constructor () {
    super({key:"menu"});
  }


create (){
this.text = this.add.text(0,0, "Menu Screen", {font: "40px impact"});
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
