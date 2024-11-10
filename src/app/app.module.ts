import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DropdownComponent } from './shared/component/dropdown/dropdown.component';
import { TodosComponent } from './shared/component/todos/todos.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { ScrolltotopDirective } from './shared/directives/scrolltotop.directive';
import { HightlighttextComponent } from './shared/component/hightlighttext/hightlighttext.component';
import { FormsModule } from '@angular/forms';
import { HighlighttextDirective } from './shared/directives/highlighttext.directive';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    TodosComponent,
    DropdownDirective,
    ScrolltotopDirective,
    HightlighttextComponent,
    HighlighttextDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
