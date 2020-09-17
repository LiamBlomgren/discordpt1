import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PolisPage } from './polis.page';

describe('PolisPage', () => {
  let component: PolisPage;
  let fixture: ComponentFixture<PolisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PolisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
