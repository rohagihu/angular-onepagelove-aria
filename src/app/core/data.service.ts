import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'

import { IStage } from '../shared/interfaces';

@Injectable()

export class DataService {

  // stage = {
  //   headline: 'Link',
  //   headlineOptions: ['Innovation', 'Learning', 'Visions'],
  //   subheadline: 'Become part of a modern web agency to develop the future',
  //   buttonLabel: 'Discover Us',
  //   buttonTarget: '#intro'
  // }

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
