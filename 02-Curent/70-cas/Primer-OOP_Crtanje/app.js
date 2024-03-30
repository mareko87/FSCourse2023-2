// let krug1;
let d_kruga = 30;
const krugovi = [];
let brojKrugova = 10;

function setup() {
    createCanvas(600, 600);
    // krug1 = new Krug(random(20, 580), random(20, 580), d_kruga, random(1, 4), random(1, 4));
    for (let i = 0; i < brojKrugova; i++) {
        krugovi.push(new Krug(random(20, 580), random(20, 580), d_kruga, random(1, 4), random(1, 4)))
    }
}

function draw() {
    background(220);
    for (let i = 0; i < brojKrugova; i++) {
        krugovi[i].crtaj();
    }
    for (let i = 0; i < brojKrugova; i++) {
        krugovi[i].kretanje();
    }
    for (let i = 0; i < brojKrugova; i++) {
        krugovi[i].sudar();
    }
    // krug1.crtaj();
    // krug1.kretanje();
}

class Krug {
    constructor(x, y, d, x_brz, y_brz) {
        this.x = x;
        this.y = y;
        this.d = d;
        this.x_brz = x_brz;
        this.y_brz = y_brz;
    }
    crtaj() {
        circle(this.x, this.y, this.d)
    }
    kretanje() {
        this.x += this.x_brz;
        this.y += this.y_brz;
        if (this.x >= width - d_kruga / 2 || this.x <= d_kruga / 2) {
            this.x_brz *= -1
        }
        if (this.y >= height - d_kruga / 2 || this.y <= d_kruga / 2) {
            this.y_brz *= -1
        }
    }
    sudar() {
        for (let i = 0; i < brojKrugova; i++) {
            let dis = dist(this.x, this.y, krugovi[i].x, krugovi[i].y)
            if (dis <= d_kruga && dis != 0) {
                this.x_brz *= -1;
                this.y_brz *= -1;
            }
        }
    }
}