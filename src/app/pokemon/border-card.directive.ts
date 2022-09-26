import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {
  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 180;

  //Représente une référence
  constructor(private el: ElementRef) { 
    this.setBorder('#f5f5f5');
    this.setHeight(180);
  }
  @Input ('pkmnBorderCard') borderColor: string; //alias

  //Lorsque le curseur est sur un élément, la bordure apparaît
  @HostListener ('mouseenter') onMouseEnter() {
    this.setBorder (this.borderColor || '#009688');
  }
  //Lorsque le curseur n'est plus sur l'élément
  @HostListener ('mouseleave') onMouseLeave() {
    this.setBorder ('#f5f5f5');
  }

  private setBorder(color: string) {
    let border = 'solid 4px ' + color;
    this.el.nativeElement.style.border = border;
}
//Hauteur commune
private setHeight(height: number) {
    this.el.nativeElement.style.height = height + 'px';
}

}
