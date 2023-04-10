import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TirageAuSortComponent } from './components/tirage-au-sort/tirage-au-sort.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AbsentComponent } from './components/absent/absent.component';

@NgModule({
  declarations: [
    AppComponent,
    TirageAuSortComponent,
    HeaderComponent,
    FooterComponent,
    AbsentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
