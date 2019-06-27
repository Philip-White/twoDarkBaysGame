let texts;
let skip;
let camera1;
let jumpButtons;
let arsehole;
let joyinstruct;


class instructions extends Phaser.Scene{
  constructor () {
    super({key:"instructions"});
  }

  preload(){

    var progressBar = this.add.graphics();
              var progressBox = this.add.graphics();
              progressBox.fillStyle(0x222222, 0.8);
              progressBox.fillRect(240, 270, 320, 50);

              var width = this.cameras.main.width;
              var height = this.cameras.main.height;
              var loadingText = this.make.text({
                  x: width / 2,
                  y: height / 2 - 50,
                  text: 'Loading...',
                  style: {
                      font: '20px Arvo',
                      fill: '#ffffff'
                  }
              });
              loadingText.setOrigin(0.5, 0.5);

              var percentText = this.make.text({
                  x: width / 2,
                  y: height / 2 - 5,
                  text: '0%',
                  style: {
                      font: '18px Arvo',
                      fill: '#ffffff'
                  }
              });
              percentText.setOrigin(0.5, 0.5);



                         this.load.on('progress', function (value) {
                             percentText.setText(parseInt(value * 100) + '%');
                             progressBar.clear();
                             progressBar.fillStyle(0xffffff, 1);
                             progressBar.fillRect(250, 280, 300 * value, 30);
                         });



                         this.load.on('complete', function () {
                             progressBar.destroy();
                             progressBox.destroy();
                             loadingText.destroy();
                             percentText.destroy();
                         });
                         this.load.image("slideBack", "../assets/tilesets/slideBack.png");
                         this.load.image("jump", "../assets/tilesets/jump.png");
                         this.load.image("voice", "../assets/tilesets/voice.png");
this.load.image("joys", "../assets/tilesets/joyinstruct.png");
this.load.image("talkingHorse", "../assets/tilesets/talkingHorse.png");
}

create(){
  let camera1 = this.cameras.main.fadeIn(1000);
  this.input.addPointer(3);




function hello(){
  camera1.fade(1000);

}

  this.add.image(400, 300, "slideBack").setScale(1.4);
  this.add.image(290, 280, "talkingHorse");
  skip = this.add.image(485, 200, "voice").setScale(.33).setScrollFactor(0).setInteractive();
  jumpButtons = this.add.image(700, 525, "jump").setScale(.60).setScrollFactor(0).setInteractive();
joyinstruct = this.add.image(100, 525, "joys");



  //this self variable is making a reference for future functions to address with 'this'..
var self = this;




  let texts = this.add.text(380, 135, `Welcome to Two Dark Bays the game!  Jump the rails with RickyBobby and collect as many of the donuts as you can!  (click to continue)`, {
        font: '16px Arvo',
        fill: 'black',
        wordWrap: { width: 225, height: 230, useAdvancedWrap: true }
      });
      texts.setScrollFactor(.05);

      this.cameras.main.on('camerafadeoutcomplete', function () {

        this.scene.start("level1");

      }, this);


  skip.on('pointerdown', function (event){

texts.setText("If you are using a desktop, navigate with the arrow keys.  To Jump, tap and release the 's' key!(click to continue)");
skip.on('pointerdown', function (event){
texts.setText("On mobile, you can navigate with the joystick on the bottom left corner of your screen!  (click to continue)");

var tween1 = self.tweens.add({
  targets: joyinstruct,
  y: 450,
  duration: 3000,
  ease: 'Elastic',
  easeParams: [ 1.5, 0.5 ],
})



skip.on('pointerdown', function (event){
  texts.setText("Also on mobile, you can jump RickyBobby with this button in the bottom right corner of your screen! (click to start playing)");


  var tween = self.tweens.add({
      targets: jumpButtons,
      y: 450,
      duration: 3000,
      ease: 'Elastic',
      easeParams: [ 1.5, 0.5 ],
  });



  skip.on('pointerdown', function (event){
hello();
});
});
});
}, this);















/*
  this.input.on('pointerdown', function(event){
       this.cameras.main.fade(1000);
  }, this);
*/
}


}
