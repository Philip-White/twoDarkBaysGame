let texts;
let skip;
let camera1;

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

}

create(){
  let camera1 = this.cameras.main.fadeIn(1000);
  this.input.addPointer(3);

function hello(){
  camera1.fade(1000);

}

  this.add.image(400, 300, "slideBack").setScale(1.4);
  skip = this.add.sprite(450, 280, "voice").setScale(.33).setScrollFactor(0).setInteractive();

  let texts = this.add.text(480, 35, `${coinScore}well this is just a test to see how much text I can put in this thing before it gets all fucked up......Lets just keep it going and see how far we can push it!`, {
        font: '16px Arvo',
        fill: 'black',
        wordWrap: { width: 225, height: 225, useAdvancedWrap: true }
      });
      texts.setScrollFactor(.05);

      this.cameras.main.on('camerafadeoutcomplete', function () {

        this.scene.start("level1");

      }, this);


  skip.on('pointerdown', function (event){

texts.setText("Well hey!  Yeah do you want the money or should I just shove it directly up your fat ass?!");
skip.on('pointerdown', function (event){
texts.setText("Oh yeah!..  Oh yeah!");
skip.on('pointerdown', function (event){

hello();

});
});
});















/*
  this.input.on('pointerdown', function(event){
       this.cameras.main.fade(1000);
  }, this);
*/
}

}
