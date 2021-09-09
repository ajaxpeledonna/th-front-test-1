import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataBlockComponent } from './data-block.component';
import { CardComponent } from './card.component';
import { ListComponent } from './list.component';
import { ButtonsComponent } from './buttons.component';
import { AddModule } from '@carbon/icons-angular';
import { AddCommentModule } from '@carbon/icons-angular';
import { EditModule } from '@carbon/icons-angular';
import { ArrowUpRightModule } from '@carbon/icons-angular';
import { TrashCanModule } from '@carbon/icons-angular';

@NgModule({
  declarations: [
    AppComponent,
    DataBlockComponent,
    CardComponent,
    ListComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    AddModule,
    EditModule,
    ArrowUpRightModule,
    TrashCanModule,
    AddCommentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
