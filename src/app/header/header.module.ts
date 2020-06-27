
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent} from './header.component';

@NgModule({
  declarations: [LogoComponent, NavigationComponent, HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
