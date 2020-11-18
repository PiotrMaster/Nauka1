import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';

@Component({
    selector: 'app-pojazd',
    template: '<button (click)="go()"> {{pojazd.x}}, {{pojazd.y}} </button><br>ax = <input [(ngModel)] = "pojazd.ax" ><br>ay = <input [(ngModel)] = "pojazd.ax">',
    styleUrls: []
  })

  export class PojazdComponent {
    pojazd = new Pojazd(1, 1, 1, 1, 1, 1); 
    
    go() {
        
        this.pojazd.go()

    }
  }

class Pos {
    x: number;
    y: number;
    
    constructor (x: number, y: number){
        this.x = x;
        this.y = y;
    }

    go() {

    }
}

class V extends Pos{
    vx: number;
    vy: number;

    constructor (vx: number, vy: number,x: number, y: number){
        super(x, y);
        this.vx = vx;
        this.vy = vy;
    }
    
    go() {

        super.go();
        this.x += this.vx;
        this.y += this.vy;
    }
}

class Pojazd extends V {
    ax: number;
    ay: number;
    
    constructor (ax: number, ay: number, vx: number, vy: number,x: number, y: number){
        super(vx, vy, x, y);
        this.ax = ax;
        this.ay = ay;
    }
    go() {
        super.go();
        this.vx += +this.ax;
        this.vy += +this.ay;
    }
}