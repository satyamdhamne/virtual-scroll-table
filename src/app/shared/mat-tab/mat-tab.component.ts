import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card'; // For mat-card
import { AccordionComponent } from '../accordion/accordion.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-mat-tab',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    MatTabsModule,
    AccordionComponent,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule
  ],
  templateUrl: './mat-tab.component.html',
  styleUrl: './mat-tab.component.scss'
})
export class MatTabComponent implements OnInit {
  selectedTabIndex = 1;

  ngOnInit() {
    // Set the initial tab index
    this.selectedTabIndex = 1;
  }

  onTabChange(index: number): void {
    this.selectedTabIndex = index;
  }
}
