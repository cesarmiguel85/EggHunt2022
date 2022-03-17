import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImageviewerpanPage } from './imageviewerpan.page';

describe('ImageviewerpanPage', () => {
  let component: ImageviewerpanPage;
  let fixture: ComponentFixture<ImageviewerpanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageviewerpanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImageviewerpanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
