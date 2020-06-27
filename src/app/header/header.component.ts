import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [DataService]
})
export class HeaderComponent implements OnInit {

  navigationData: any = {}

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getNavigation()
      .subscribe((data: any) => {
        this.navigationData = data;
        console.log(this.navigationData);
      });
  }

}
