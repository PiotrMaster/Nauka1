import { Component } from '@angular/core';

interface Dubler{
    dubluj(v: string): string;
}

class A {

    a = 'a';

    public getA(): string {
        return this.a;
    }

}
class B extends A {

    b = 'b';

    public getB(): string {
        return this.b.toUpperCase();
    }
    public getA(): string {
        return super.getA().toUpperCase();
    }

}
class C extends B implements Dubler{

    c = 'c';

    public getC(): string {
        return this.c + this.c;
    }
    public getB(): string {
        return super.getB() + super.getB();
    }
    public getA(): string {
        return super.getA() + super.getA();
    }

    dubluj(v: string): string {
        return v + v;
    }

}



@Component({
    selector: 'app-dziedziczenie',
    template: `
        <p>Hello!</p>
        <p>a = {{ x.getA() }}</p>
        <p>b = {{ x.getB() }}</p>
        <p>c = {{ x.getC() }}</p>
    `,
    styleUrls: []
  })
  export class DziedziczenieComponent{

    x = new C();

    f() {
        this.x.dubluj;
    }

  }