import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from './components/container/container.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product-list/product/product.component';
import { FilterComponent } from './components/product-list/filter/filter.component';
import { ProductDetailComponent } from './components/container/product-detail/product-detail.component';
import { setBackground } from './components/customDirectives/setBackground.directive';
import { HighlightDirective } from './components/customDirectives/highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    ContainerComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailComponent,
    setBackground,
    HighlightDirective
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
