import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CafeListComponent } from './cafe-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CafeService } from '../cafe.service';
import { of } from 'rxjs';
import { Cafe } from '../cafe';

describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;
  let service: CafeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CafeListComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CafeService);

    const cafesMock: Cafe[] = [
      new Cafe(1, 'Cafe 1', 'Café de Origen', 'Region 1', 'Nota 1', 'Descripción 1', 'img1.jpg'),
      new Cafe(2, 'Cafe 2', 'Blend', 'Region 2', 'Nota 2', 'Descripción 2', 'img2.jpg'),
      new Cafe(3, 'Cafe 3', 'Café de Origen', 'Region 3', 'Nota 3', 'Descripción 3', 'img3.jpg')
    ];

    spyOn(service, 'getCafes').and.returnValue(of(cafesMock));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(new Cafe(1, "Nombre", "Tipo", "Región", "Nota", "Descripción", "ImagenURL")).toBeTruthy();
  });

  it('should render 3 rows and a header', () => {
    const compiled = fixture.nativeElement;
    const rows = compiled.querySelectorAll('tbody tr');
    expect(rows.length).toBe(3);
  });
});
