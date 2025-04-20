import { Component } from '@angular/core';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';import { MatCardModule } from '@angular/material/card'; // For mat-card
import { MatTableModule } from '@angular/material/table'; // For mat-table
import { MatTableDataSource } from '@angular/material/table'; // For mat-table data source
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'; // For mat-button
import { MatIconModule } from '@angular/material/icon'; // For mat-icon
import { VirtualScrollTableComponent } from '../virtual-scroll-table/virtual-scroll-table.component';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [ MatAccordion, // For mat-accordion and mat-expansion-panel
    MatCardModule,      // For mat-card
    MatTableModule,MatExpansionModule,MatSlideToggleModule,CommonModule,MatButtonModule,MatIconModule,VirtualScrollTableComponent],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  displayedColumns: string[] = ['lotNumber', 'lotName', 'lineItems', 'lotPrice', 'rank', 'bestBid'];
  dataSource = [
    {
      lotNumber: 1,
      lotName: 'LOPPY',
      lineItems: 506,
      lotPrice: 20962662,
      rank: 1,
      bestBid: 20962640
    }
  ];

}
