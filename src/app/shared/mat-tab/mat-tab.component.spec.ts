import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTabComponent } from './mat-tab.component';

describe('MatTabComponent', () => {
  let component: MatTabComponent;
  let fixture: ComponentFixture<MatTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
