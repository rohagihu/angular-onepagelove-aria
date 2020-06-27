import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { StageComponent } from './stage/stage.component';
import { FooterComponent } from './footer/footer.component';
import { MainModule } from './main/main.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    StageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    CoreModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
