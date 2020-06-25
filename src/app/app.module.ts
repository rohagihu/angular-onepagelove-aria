import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StageComponent } from './stage/stage.component';
import { FooterComponent } from './footer/footer.component';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
