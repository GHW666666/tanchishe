class Game{
    constructor(select){
       this.map=document.querySelector(select)
       this.food=new Food(select)
       this.snake=new Snake(select)
        this.timer=0
    }
   start(){
       this.timer=setInterval(()=>{
           this.snake.move()
           if(this.snake.isEat(this.food.x,this.food.y)){
               this.snake.createhead()
               this.food.foodMove()
           }
           if(this.snake.isdie()){
               clearInterval(this.timer)
           }
       },100)
   }
pause(){
    clearInterval(this.timer)
}
restart(){
    window.location.reload()
}
change(type){
    this.snake.direction=type
}
}