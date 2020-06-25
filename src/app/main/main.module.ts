import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';

import { IntroComponent } from './intro/intro.component';
import { DescriptionComponent } from './description/description.component';
import { ServicesComponent } from './services/services.component';
import { Details1Component } from './details1/details1.component';
import { Details2Component } from './details2/details2.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { CallMeComponent } from './call-me/call-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

// import { SharedModule } from '../shared/shared.module';
// import { CustomersComponent } from './customers.component';
// import { CustomersListComponent } from './customers-list/customers-list.component';
// import { FilterTextboxComponent } from './customers-list/filter-textbox.component';
// import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
  imports: [
    CommonModule,
    // SharedModule,
    FormsModule,
    // CustomersRoutingModule
  ],
  declarations: [
    MainComponent,
    IntroComponent,
    DescriptionComponent,
    ServicesComponent,
    Details1Component,
    Details2Component,
    TestimonialsComponent,
    CallMeComponent,
    ProjectsComponent,
    TeamComponent,
    AboutComponent,
    ContactComponent
  ],
  exports: [ MainComponent ]
})
export class MainModule { }
