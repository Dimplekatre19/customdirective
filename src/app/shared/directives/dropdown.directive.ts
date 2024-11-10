import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  isopen:any;
  constructor(
    private _ele:ElementRef,
    private _renderer:Renderer2
  ) { }

  @HostListener('click') toggledropdown(){
      this.isopen=!this.isopen

      if(this.isopen){
            this._renderer.addClass(this._ele.nativeElement.nextElementSibling,'show')
      }else{
         this._renderer.removeClass(this._ele.nativeElement.nextElementSibling,'show')   
      }
  }

  @HostListener('document:click',['$event.target']) onclickoutside(targetelement:HTMLElement){
      const clickinside= this._ele.nativeElement.contains(targetelement);
      if(!clickinside){
        this.isopen=false;
        this._renderer.removeClass(this._ele.nativeElement.nextElementSibling,'show')
      }
  }

  @HostListener('document:keydown.escape',['$event'])onescapepress(event:KeyboardEvent){
      this.isopen=false;
      this._renderer.removeClass(this._ele.nativeElement.nextElementSibling,'show')
  }

}
