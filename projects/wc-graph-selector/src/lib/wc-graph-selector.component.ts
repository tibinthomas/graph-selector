import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit
} from "@angular/core";

@Component({
  selector: "lib-wc-graph-selector",
  templateUrl: "./wc-graph-selector.component.html",
  styleUrls: ["./wc-graph-selector.component.scss"]
})
export class WcGraphSelectorComponent implements OnInit, AfterViewInit {
  @Input() width;
  @Input() height;
  @ViewChild("canvas", { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;

  y = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  x = ['Zyxy', 'Mlkji', 'Fedcba', 'Abcef', 'Ghijk Lmno', 'Pqrst Uvw', 'Xyz', 'Helloo', 'Sweewt', 'Pslams', 'Xyz', 'Helloo', 'Sweewt', 'Pslams', 'Pslams'];

  spaceBetweenYaxisSegemnts;
  spaceBetweenXaxisSegemnts;

  constructor() {}

  ngOnInit() {
    this.ctx = this.canvas.nativeElement.getContext("2d");
  }

  ngAfterViewInit() {
    this.spaceBetweenYaxisSegemnts = this.height / this.y.length;
    this.spaceBetweenXaxisSegemnts = this.width / this.x.length;
    /**
     * X axis and Y axis
     */
    this.ctx.moveTo(this.width / 2, 0);
    this.ctx.lineTo(this.width / 2, this.height);
    this.ctx.moveTo(0, this.height / 2);
    this.ctx.lineTo(this.width, this.height / 2);

    console.log(this.spaceBetweenXaxisSegemnts);

    /**
     * X axis segments
     */
    for (let i = 1; i <= this.width / this.spaceBetweenXaxisSegemnts; i++) {
      this.ctx.moveTo(this.spaceBetweenXaxisSegemnts * i, this.height / 2 - 7);
      this.ctx.lineTo(this.spaceBetweenXaxisSegemnts * i, this.height / 2 + 7);
    }

    /**
     * Y axis segments
     */
    for (let i = 1; i <= this.height / this.spaceBetweenYaxisSegemnts; i++) {
      this.ctx.moveTo(this.width / 2 - 7, this.spaceBetweenXaxisSegemnts * i);
      this.ctx.lineTo(this.width / 2 + 7, this.spaceBetweenXaxisSegemnts * i);
    }

    this.ctx.stroke();

    /**
     * Exp with text
     */
    this.ctx.font = "10px Arial";
    this.ctx.save();
    this.ctx.translate(this.spaceBetweenXaxisSegemnts, this.height / 2);
    this.ctx.rotate(270 * Math.PI / 180);
    for (let i = 0; i < this.x.length; i++) {
      this.ctx.textAlign = 'center';
      this.ctx.fillText(this.x[i], -30, i * this.spaceBetweenYaxisSegemnts);
    }
    this.ctx.restore();

  }
}
