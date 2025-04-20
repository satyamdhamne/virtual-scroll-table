// src/app/shared/virtual-scroll-table/virtual-scroll-table.component.ts
import { Component, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Observable } from 'rxjs';

// Import our models and services
import { TableDataModel } from '../models/table-data.model';
import { CsvService } from '../services/csv.service';

@Component({
  selector: 'app-virtual-scroll-table',
  templateUrl: './virtual-scroll-table.component.html',
  styleUrls: ['./virtual-scroll-table.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ScrollingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    AsyncPipe
  ] // Removed HttpClientModule from imports
})
export class VirtualScrollTableComponent implements OnInit {
  data$!: Observable<TableDataModel[]>;
  displayedColumns: string[] = [];
  rowHeight = 48;

  constructor(private csvService: CsvService) {}

  ngOnInit(): void {
    this.displayedColumns = this.csvService.getHeaders();
    this.data$ = this.csvService.getTableData();
  }

  formatCellContent(value: any, column: string): string {
    if (column.includes('Price')) {
      return new Intl.NumberFormat('en-IN', { 
        style: 'currency', 
        currency: 'INR',
        minimumFractionDigits: 2
      }).format(value);
    } else if (column === 'Quantity' || column === 'RM' || column === 'MF') {
      return new Intl.NumberFormat('en-IN', { 
        minimumFractionDigits: 0 
      }).format(value);
    }
    return value;
  }
}