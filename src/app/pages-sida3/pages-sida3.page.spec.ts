import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagesSida3Page } from './pages-sida3.page';

describe('PagesSida3Page', () => {
  let component: PagesSida3Page;
  let fixture: ComponentFixture<PagesSida3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesSida3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PagesSida3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
