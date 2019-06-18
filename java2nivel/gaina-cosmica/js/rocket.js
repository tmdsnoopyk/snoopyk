class Rocket {
    constructor( x,y ){
        this.id = "r-" + Math.round(Math.random() * 100000000);
        this.type = 'commodore';
        this.frames = ["-52px -812px"]; // cadrele sprite-ului
        this.x = x; //random() 0...width window
        this.y = y;
        this.w = 16;
        this.h = 22;
        }

    addToMap(){

        window.map.innerHTML +=
        `<div id="${this.id}">` +
        this.render() +
        `</div>`
        //this.live();
        // conexiunea cu evenimentele "keydown"
        //document.body.onkeydown = this.action.bind(this);
    }

    refresh(){
        document.getElementById ( this.id ).innerHTML = this.render();
    }

    live(){
        var that = this;
        setInterval(function(){
            for (var index in invaders){
            //verificam daca se ciocneste careva elementele
            if ( touch( window[that.id].firstElementChild, window[invaders[index].id].firstElementChild ) ) {
                invaders[index].die();
            }
        }
            that.moveUp();
            that.refresh();
        } , 25 );
    }

    moveUp(){
        this.y-=10;
    }
    render(){
        let html = `
        <div class="rocket" style="width: ${this.w}px; height: ${this.h}px; background-position: ${this.frames[0]}; left: ${this.x}px; top: ${this.y}px;"></div>
        `;
        return html;
    }
}
