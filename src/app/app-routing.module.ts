import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ComiscListComponent } from './components/comics-list/comicsList.component';
import {ComicDetailsComponent} from './components/comic-details/comic-details.component'

const routes: Routes = [
  { path: '', redirectTo: '/comics', pathMatch: 'full' },
  {path: 'cart', component: CartComponent},
  {path: 'comics', component: ComiscListComponent},
  { path: 'comics/:id', component: ComicDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
