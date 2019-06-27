import { Directive, ElementRef } from '@angular/core'

@Directive({
  selector: '[style-getter]'
})
export class StyleGetterDirective {
  constructor(private el: ElementRef) {}

  ngOnChanges(){
    setTimeout(() => {
      let styles = getComputedStyle(this.el.nativeElement);
      console.log(styles.width);
    })
  }

  ngAfterViewInit() {
    let styles = getComputedStyle(this.el.nativeElement);
      // console.log(styles.width);
  }

}