class Form {
    constructor(){
        this.title = createElement ("h1")
        this.button1 = createButton("PLAY")
        this.button2 = createButton("STORY")
        this.button3 = createButton("How to play")
        
        
    }
    display(){
       
        this.title.html("CANDY SHOP")
        this.title.position(450,70)
        this.title.style("font-size",90)
       
        this.button1.position(500,150)
        this.button2.position(500,200)
      
        this.button1.mousePressed(()=>{
            this.button1.hide()
            this.button2.hide()
            this.button3.hide()
            this.title.hide()  
            gameState=1
        })
        this.button2.mousePressed(()=>{
            gameState=2
            this.button2.hide()
            this.button3.hide()
            this.title.hide() 
            this.button1.position(650,530)
        })
        
        this.button3.mousePressed(()=>{
            gameState=3
            this.button2.hide()
            this.button3.hide()
            this.title.hide()
            this.button1.position(650,530)
        })
        
        
    }
    
}