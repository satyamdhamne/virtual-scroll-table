// src/app/shared/services/csv.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { TableDataModel } from '../models/table-data.model';

@Injectable({
  providedIn: 'root'
})
export class CsvService {
  private readonly CSV_PATH = 'assets/mockaroo_table_1000_rows.csv';

  constructor(private http: HttpClient) {}

  getTableData(): Observable<TableDataModel[]> {
    return this.http.get(this.CSV_PATH, { responseType: 'text' })
      .pipe(
        map(csv => this.parseCSV(csv))
      );
  }

  getHeaders(): string[] {
    return [
      'Sr. No.',
      'Item Name',
      'Quantity',
      'UOM',
      'Brand',
      'RM',
      'RM Currency',
      'MF',
      'MF Currency',
      'Unit Price (₹)',
      'Extended Price (₹)',
      'Tax',
      'Total Price (₹)',
      'Baseline Price (₹)'
    ];
  }

  private parseCSV(csv: string): TableDataModel[] {
    const lines = csv.split('\n');
    const headers = lines[0].split(',').map(header => header.trim());
    
    return lines.slice(1)
      .filter(line => line.trim() !== '')
      .map(line => {
        const values = line.split(',').map(value => value.trim());
        const row: any = {};
        
        headers.forEach((header, index) => {
          const value = values[index];
          if (header === 'Sr. No.' || header === 'Quantity' || 
              header === 'RM' || header === 'MF' ||
              header.includes('Price')) {
            row[header] = Number(value);
          } else {
            row[header] = value;
          }
        });
        
        return row as TableDataModel;
      });
  }
}
