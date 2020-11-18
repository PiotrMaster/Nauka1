import { element } from 'protractor';
import { AfterViewInit, Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { timeStamp } from 'console';
import { AnyARecord } from 'dns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('canvas') canvas: ElementRef;

  rysowanie = false;
  pos = {x:0, y:0};
  ctx: any;
  
  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
  }

  start(){
    this.rysowanie = true;
    setTimeout(this.rysuj.bind(this), 1);
  }

  stop(){
    this.rysowanie = false;
  }

  mouseMove(e: MouseEvent) {
    this.pos = { x: e.offsetX, y: e.offsetY };
  }
  
  rysuj() {
    if(this.rysowanie){
      this.ctx.fillRect(this.pos.x-10, this.pos.y-10, 20, 20);

      setTimeout(this.rysuj.bind(this), 1);
    }
  }

}

