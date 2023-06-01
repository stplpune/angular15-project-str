import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ApiService } from 'src/app/core/services/api.service';
import { MatSort, MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-booking-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatTableModule, MatSortModule],
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent {
  dataSource: any
  displayedColumns: string[] = ['sr_no', 'name', 'mobileNo1', 'userName', 'district', 'taluka', 'village'];
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.bindTableData();
  }

  bindTableData() {
    this.apiService.setHttp('get', 'setu-registration/GetAllSetuListDetails?UserId=38712&pageno=1&pagesize=10', false, false, false, 'mineralProjectUrl');
    this.apiService.getHttp().subscribe({
      next: (res: any) => {
        res.statusCode == 200 ? (this.dataSource = new MatTableDataSource(res.responseData.responseData1), this.dataSource.sort = this.sort) : this.dataSource = [];
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

}
