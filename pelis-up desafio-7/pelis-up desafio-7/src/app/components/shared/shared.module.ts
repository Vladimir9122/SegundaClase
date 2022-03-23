import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { SearcherComponent } from './searcher/searcher.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CardComponent,
    SearcherComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    CardComponent,
    SearcherComponent
  ]
})
export class SharedModule { }
