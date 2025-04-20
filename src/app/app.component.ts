import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import {MatTabComponent} from './shared/mat-tab/mat-tab.component';
import { VirtualScrollTableComponent } from './shared/virtual-scroll-table/virtual-scroll-table.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,MatTabComponent,BreadcrumbComponent,VirtualScrollTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'virtual-scroll-table';
}
