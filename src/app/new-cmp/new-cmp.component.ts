import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
@Component({
   selector: 'app-new-cmp',
   templateUrl: './new-cmp.component.html',
   styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {
  todo = ["Học TypeScript", "Học Angular 4", "Học HTML5"];
  todaydate;
  propertyService;

  constructor(private myservice: MyserviceService) { }

  ngOnInit() {
    this.todaydate = this.myservice.getTodayDate();
    this.myservice.myProperty = "myProperty: New Cmp Component";
    this.propertyService = this.myservice.myProperty;
  }
}
