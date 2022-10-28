import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {headerBlockComponent} from './components/header-block/headerBlock.component'
import {ComiscListComponent} from './components/comics-list/comicsList.component'
import { ComicsComponent } from './components/comics/comics.component';
import { CartComponent } from './components/cart/cart.component';
import { ComicDetailsComponent } from './components/comic-details/comic-details.component';

@NgModule({
  declarations: [
    AppComponent,
    headerBlockComponent,
    ComiscListComponent,
    ComicsComponent,
    CartComponent,
    ComicDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
