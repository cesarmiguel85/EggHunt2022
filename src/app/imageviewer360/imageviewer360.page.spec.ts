import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Imageviewer360Page } from './imageviewer360.page';

describe('Imageviewer360Page', () => {
  let component: Imageviewer360Page;
  let fixture: ComponentFixture<Imageviewer360Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imageviewer360Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Imageviewer360Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
