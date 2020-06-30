import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';

import { IStage } from '../shared/interfaces';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css'],
  providers: [DataService]
})
export class StageComponent implements OnInit {

  i = 0;

  constructor(private dataService: DataService) {
    this.dataService.getStageData()
      .subscribe((data: IStage) => this.stageData = data);
  }

  stageData: IStage;
  // private _stageData: IStage;

  // get stageData(): IStage {
  //   return this._stageData;
  // }

  // set stageData(value: IStage) {
  //   if (value) {
  //     this._stageData = value;
  //   }
  // }

  ngOnInit(): void {
    // this.stageData = this.dataService.getStageData()


    setInterval(() => {
      this.i = (this.i+1 > this.stageData.headlineOptions.length-1) ? 0 : this.i+1;
    }, 2000)
      // .subscribe((stageData: any) => this.stageData = stageData);
    // console.log(this.stageData)
    // console.log(this.dataService)
    // console.log(this.dataService.getStageData())
  }

  get headlineRotation() {
    return this.stageData.headlineOptions[this.i]
  }

}
