class Form {
  
  constructor(){
    this.input=createInput("").attribute("placeholder","Enter your Name");
    this.storyButton=createButton("Game Story");
  }

  setElementsPosition(){
    this.input.position(225,250);
    this.storyButton.position(260,300);
  }

  setElementsStyle(){
    this.input.class("customInput");
    this.storyButton.class("customButton")
  }

  hide(){
    this.input.hide();
    this.storyButton.hide();
  }

  handlemousePressed(){
    this.storyButton.mousePressed(()=>{
      this.input.hide();
      this.storyButton.hide();
      gameState=1;
    })
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handlemousePressed();
  }
}
