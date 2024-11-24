//食物的定义
//食物的操作 食物的移动
class Food{
    constructor(select){
        this.map=document.querySelector(select)
        this.food=document.createElement("div")
        this.map.appendChild(this.food)
        this.food.className="food"
     this.x=0
        this.y=0
        this.foodMove()
    }
    foodMove(){
        const w=this.map.clientWidth/20
        const h=this.map.clientHeight/20
       let n1=Math.floor(Math.random()*w)
       let n2=Math.floor(Math.random()*h)
       this.x=n1*20
       this.y=n2*20
       this.food.style.left=this.x+"px"
       this.food.style.top=this.y+"px"
    }
}