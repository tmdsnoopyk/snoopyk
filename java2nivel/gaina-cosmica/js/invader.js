class Invader {
    constructor(){
        this.id = "i-" + random(1000000000,2000000000);
        this.type = 'homebrew';
        this.frames = ["0px -515px", "0px -545px"]; // cadrele sprite-ului
        this.x = random(0,window.innerWidth); //random() 0...width window
        this.y = 0;
        this.w = 52;
        this.h = 30;
        this.direction_h = "right"; //
    }

    addToMap(){

        window.map.innerHTML +=
        `<div id="${this.id}">` +
        this.render() +
        `</div>`
        this.live();
    }

    refresh(){
        document.getElementById ( this.id ).innerHTML = this.render();
    }

    live(){
        var that = this;
        that.timer = setInterval(function(){
            that.frames.push( that.frames.shift() );

            if (that.direction_h == "right") {
                that.moveRight();
            }
            if (that.direction_h == "left") {
                that.moveLeft();
                    }
            that.refresh();
        } , 100 );
    }
    die(){
        //stergem din lista globala
        for(var index in invaders){
            if ( this.id == invaders[index].id){
                invaders.splice(index,1); // sterge din array de pe index indica
                window[this.id].innerHTML='';
                clearInterval(this.timer);
                break;
            }
        }
    }
    // movement
    moveRight(){
        if(this.x > window.innerWidth - this.w) {
            this.direction_h = "left";
            this.moveDown();
        }
        this.x+=5;
    }
    moveLeft(){
        if(this.x < 0) {
            this.direction_h = "right";
            this.moveDown();
        }
        this.x-=5;
    }
    moveDown(){
        this.y+=10;
    }
    render(){
        let html = `
        <div class="invader" style="width: ${this.w}px; height: ${this.h}px; background-position: ${this.frames[0]}; left: ${this.x}px; top: ${this.y}px;"></div>
        `;
        return html;
    }
}
