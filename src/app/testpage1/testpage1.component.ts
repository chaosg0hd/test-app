import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testpage1',
  templateUrl: './testpage1.component.html',
  styleUrls: ['./testpage1.component.css']
})
export class Testpage1Component implements OnInit {

  dataInfo: any = {};
  dataContent: any;

  //dito ipapasa yung value ng input field kaya mas better kapag same nalng din yung  [(NgModel)] na attribute at var dito sa column name nyo sa db
  ID: any;
  TEXT: any;
  NUM: any;
  STATUS: any;

  constructor(private ds: DataService, public router: Router) { }
 
  ngOnInit(): void {
    this.pullData();

  }

  pullData() {
    this.ds.sendApiRequest("tb_test", null).subscribe((data: any) => {
      this.dataContent = data.data;
    })

  }

}
