
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnNavComponent } from './an-nav.component';

describe('AnNavComponent', () => {
  let component: AnNavComponent;
  let fixture: ComponentFixture<AnNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
