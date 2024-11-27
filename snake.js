class Snake{
    constructor(select){
       this.map=document.querySelector(select)
       this.direction="right"      
       this.snakelist=[]
       this.createsanke()
       this.move()
    }
    createhead(){
        const head=this.snakelist[0]
        console.log(head)
        const pos={x:0,y:0}
        if(head){
            switch(this.direction){
                case "right":
                    pos.x=head.offsetLeft+20
                    pos.y=head.offsetTop
                    break;
                case "left":
                    pos.x=head.offsetLeft-20
                    pos.y=head.offsetTop
                    break;
                case "top":
                    pos.x=head.offsetLeft
                    pos.y=head.offsetTop-20
                    break;
                case "bottom":
                    pos.x=head.offsetLeft
                    pos.y=head.offsetTop+20
                    break;
            }
            head.className="body"
        }
        const div=document.createElement("div")
        div.className="head"
        this.snakelist.unshift(div)
        div.style.left=pos.x+"px"
        div.style.top=pos.y+"px"
        this.map.appendChild(div)
        
    }
    createsanke(){
        for(let i=0;i<4;i++){
            this.createhead()
        }
    }
    move(){
        const body=this.snakelist.pop()
        body.remove()
        this.createhead()
    }
    isEat(foodx,foody){
        const head=this.snakelist[0]
        head.x=head.offsetLeft
        head.y=head.offsetTop
        if(head.x===foodx&&head.y===foody){
            return true
        }else{
            return false
        }
    }
    isdie(){
        const head=this.snakelist[0]
        const w=this.map.clientWidth/20
        const h=this.map.clientHeight/20
        if(head.offsetLeft<0||head.offsetLeft>=w*20||head.offsetTop<0||head.offsetTop>=h*20){
            return true
        }else{
            return false
        }
    }
}