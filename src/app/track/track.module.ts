import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { SearchComponent } from './search/search.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ParentSearchComponent } from './parent-search/parent-search.component';
import { MatCardModule } from '@angular/material/card';
import { BodySmartcardComponent } from './body-smartcard/body-smartcard.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, BodyComponent, SearchComponent, WishlistComponent, ParentSearchComponent, BodySmartcardComponent],
  imports: [
    CommonModule,
    MatCardModule
    
  ],
  exports: [FooterComponent,HeaderComponent,BodyComponent,ParentSearchComponent,BodySmartcardComponent]
})
export class TrackModule { }
