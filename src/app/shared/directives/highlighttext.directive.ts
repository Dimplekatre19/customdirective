import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlighttext]'
})
export class HighlighttextDirective implements OnChanges {
  @Input() highlighttext :string='';
  @Input() hightlightcolor:string='blue';
  originalHtml=''

  constructor(
    private _ele:ElementRef
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
       const{currentValue,firstChange}= changes ['highlighttext']
       if(firstChange){
          this.originalHtml=this._ele.nativeElement.innerHTML;
          return
       }

       if(currentValue){
         const regexp=new RegExp(`(${currentValue})`,'gi');
         this._ele.nativeElement.innerHTML=this.originalHtml.replace(regexp,`<span style="background-color:${this.hightlightcolor}">\$1</span>`)
       }else{
          this._ele.nativeElement.innerHTML=this.originalHtml
       }
  }
  
     
  
}
