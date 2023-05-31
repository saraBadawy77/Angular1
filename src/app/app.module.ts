import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { SliderComponent } from './components/slider/slider.component';
import { ProductesComponent } from './components/productes/productes.component';
import { ItemsProductesComponent } from './components/items-productes/items-productes.component';
import { BoxComponent } from './components/box/box.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { TrandtComponent } from './components/trandt/trandt.component';
import { IntrandtComponent } from './components/intrandt/intrandt.component';
import { FooterComponent } from './components/footer/footer.component';
import { TableComponent } from './components/table/table.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { ProductstableComponent } from './components/productstable/productstable.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { RouterModule } from '@angular/router';
import { NotexistComponent } from './components/notexist/notexist.component';
import { FormComponent } from './components/form/form.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SliderComponent,
    ProductesComponent,
    ItemsProductesComponent,
    BoxComponent,
    InboxComponent,
    TrandtComponent,
    IntrandtComponent,
    FooterComponent,
    TableComponent,
    AboutComponent,
    ProductstableComponent,
    ProductdetailsComponent,
    NotexistComponent,
    FormComponent,
    AddproductComponent
  ],
  imports: [
RouterModule.forRoot([
  { path: '', component:SliderComponent },
  { path: 'productes', component:ProductesComponent },
  { path: 'items-productes', component:ItemsProductesComponent },
  { path: 'Box', component:BoxComponent },
  { path: 'inbox', component:InboxComponent },
  { path: 'Exclusiveproducts', component:TrandtComponent },
  { path: 'intrandt', component:IntrandtComponent },
  { path: 'table', component:TableComponent },
  { path: 'about', component:AboutComponent },
  { path: 'productstable', component:ProductstableComponent },
  { path: 'productdetails/:id', component:ProductdetailsComponent },
  { path: 'form', component:FormComponent },
  { path: 'productstable/:id/edit', component:AddproductComponent },
  { path: '**', component:NotexistComponent },

])
    , FormsModule,
    ReactiveFormsModule,
    HttpClientModule ,
    BrowserModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
