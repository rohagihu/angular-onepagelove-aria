import { Component, OnInit } from '@angular/core';
import { IService } from '../../shared/interfaces';

import { DataService } from '../../core/data.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [DataService]
})
export class ServicesComponent implements OnInit {

  headline = `Choose The Service Package<br>That Suits Your Needs`;
  items: IService[] = [];
  // items: IService[] = [
  //   {
  //     headline: 'Off The Ground Off The Ground',
  //     description: 'Perfect for fresh ideas or young startups, this package will help get the business off the ground',
  //     list: [
  //       {name: 'Environment and competition'},
  //       {name: 'Designing the marketing plan'}
  //     ],
  //     priceStart: 199,
  //     image: 'assets/images/services-1.jpg'
  //   },
  //   {
  //     headline: 'Accelerated Growth',
  //     description: 'Use this service pack to give your company the necessary impulse to become an industry leader',
  //     list: [
  //       {name: 'Business strategy planning'},
  //       {name: 'Taking the planned actions'}
  //     ],
  //     priceStart: 299,
  //     image: 'assets/images/services-2.jpg'
  //   },
  //   {
  //     headline: 'Market Domination',
  //     description: 'You already are a reference point in your industry now you need to learn about acquisitions',
  //     list: [
  //       {name: 'Maintaining the leader status'},
  //       {name: 'Acquisitions the right way'}
  //     ],
  //     priceStart: 299,
  //     image: 'assets/images/services-3.jpg'
  //   }
  // ];

  addMode = false;
  editMode = false;
  addNew(): IService {
    return {
      headline: '',
      description: '',
      list: [{name: ''}],
      priceStart: 0
    };
  }



  constructor(private dataService: DataService) {
    this.items = this.dataService.getServicesData();
  }

  ngOnInit(): void {
  }

  addListEntry(i) {
    this.dataService.addListEntry(i);
  }

  addService() {
    this.addMode = true;
    this.dataService.addService(this.addNew());
  }

  saveNewService() {
    this.addMode = false;
  }

  editServices() {
    this.editMode = true;
  }

  saveEditServices() {
    this.editMode = false;
  }

}
