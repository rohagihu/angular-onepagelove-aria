import { Component, OnInit, Input } from '@angular/core';
// import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  // providers: [DataService]
})
export class NavigationComponent implements OnInit {

  // navigationData: any = {};
  @Input() navigationData: any;

  // constructor(private dataService: DataService) { }
  constructor() { }

  ngOnInit(): void {
    console.log(this.navigationData);
    // this.dataService.getNavigation()
    //   .subscribe((data: any) => {
    //     this.navigationData = data;
    //     console.log(this.navigationData);
    //   });

  }

}
