class Player {
    constructor(){
        this.id = "p-" + Math.round(Math.random() * 100000000);
        this.type = 'original';
        this.frames = ["-262px -545px"]; // cadrele sprite-ului
        this.x = 0; //random() 0...width window
        this.y = 500;
        this.w = 52;
        this.h = 30;
        this.direction_h = "right"; //
    }

    addToMap(){

        window.map.innerHTML +=
        `<div id="${this.id}">` +
        this.render() +
        `</div>`
        //this.live();
        // conexiunea cu evenimentele "keydown"
        document.body.onkeydown = this.action.bind(this);
    }

    action(){
        if (event.code == "Space" ){
            this.shoot();
        }
        if (event.key == "ArrowRight") {
            this.moveRight();
        }
        if (event.key == "ArrowLeft") {
            this.moveLeft();
        }
        this.refresh();
    }
    shoot(){
        let rocket = new Rocket();
        rocket.x = this.x + this.w / 2 - rocket.w / 2;
        rocket.y = this.y - rocket.h;
        rocket.addToMap();
        rocket.live();
    }
    refresh(){
        document.getElementById ( this.id ).innerHTML = this.render();
    }


    moveRight(){
        if(this.x > window.innerWidth - this.w) {
            this.direction_h = "left";
            //this.moveDown();
        }
        this.x+=5;
    }
    moveLeft(){
        if(this.x < 0) {
            this.direction_h = "right";
            //this.moveDown();
        }
        this.x-=5;
    }
    // moveDown(){
    //     this.y+=10;
    // }
    render(){
        let html = `
        <div class="player" style="width: ${this.w}px; height: ${this.h}px; background-position: ${this.frames[0]}; left: ${this.x}px; top: ${this.y}px;"></div>
        `;
        return html;
    }
}
