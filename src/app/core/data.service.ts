import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IStage, IService } from '../shared/interfaces';

@Injectable()

export class DataService {

  // stage = {
  //   headline: 'Link',
  //   headlineOptions: ['Innovation', 'Learning', 'Visions'],
  //   subheadline: 'Become part of a modern web agency to develop the future',
  //   buttonLabel: 'Discover Us',
  //   buttonTarget: '#intro'
  // }

  // Component "Services"
  itemsServices: IService[] = [
    {
      headline: 'Off The Ground Off The Ground',
      description: 'Perfect for fresh ideas or young startups, this package will help get the business off the ground',
      list: [
        {name: 'Environment and competition'},
        {name: 'Designing the marketing plan'}
      ],
      priceStart: 199,
      image: 'assets/images/services-1.jpg'
    },
    {
      headline: 'Accelerated Growth',
      description: 'Use this service pack to give your company the necessary impulse to become an industry leader',
      list: [
        {name: 'Business strategy planning'},
        {name: 'Taking the planned actions'}
      ],
      priceStart: 299,
      image: 'assets/images/services-2.jpg'
    },
    {
      headline: 'Market Domination',
      description: 'You already are a reference point in your industry now you need to learn about acquisitions',
      list: [
        {name: 'Maintaining the leader status'},
        {name: 'Acquisitions the right way'}
      ],
      priceStart: 299,
      image: 'assets/images/services-3.jpg'
    }
  ];

  constructor(private http: HttpClient) { }

  // getStageData() {
  //   return this.stage;
  // }
  getStageData(): Observable<IStage> {
    return this.http.get<IStage>('assets/json/stage.json')
      .pipe(
        catchError(this.handleError)
      )
  }

  getNavigation(): Observable<any> {
    return this.http.get<any>('assets/json/navigation.json')
      .pipe(
        catchError(this.handleError)
      )
  }


  getServicesData() {
    return this.itemsServices;
  }
  addListEntry(i) {
    this.itemsServices[i].list.push({name: 'greg'});
  }
  addService(obj) {
    this.itemsServices.push(obj);
  }

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
        const errMessage = error.error.message;
        return Observable.throw(errMessage);
        // Use the following instead if using lite-server
        // return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(error || 'Node.js server error');
  }
}
