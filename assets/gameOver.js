class over extends Phaser.Scene{
  constructor () {
    super({key:"over"});
  }
create(){
  this.cameras.main.fadeIn(2000);


  let text = this.add.text(325, 250, `.....Game Over`, {
        font: '22px Arvo',
        fill: 'white',
      });
      text.setScrollFactor(0);

      let text1 = this.add.text(325, 275, 'Click To Try Again', {
        font: '18px Arvo',
        fill: 'white',
      })
text1.setScrollFactor(0);

      this.cameras.main.on('camerafadeoutcomplete', function () {

location.reload();
      }, this);

      this.input.on('pointerdown', function(event){
           this.cameras.main.fade(1000);
      }, this);


    }




}
