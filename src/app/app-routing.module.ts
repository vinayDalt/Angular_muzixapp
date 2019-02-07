import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishlistComponent } from './track/wishlist/wishlist.component';
import { BodyComponent } from './track/body/body.component';

const routes: Routes = [

{
  path: "",
  component: BodyComponent,
  data: { country: "Australia" }
},
{ path: '', redirectTo: '/track', pathMatch: 'full' },
 { path: 'track', component: BodyComponent },
 { path: 'wishlist', component: WishlistComponent },
 

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
