import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { LengthTabPage } from './lengthTab.page';

describe('LengthTabPage', () => {
  let component: LengthTabPage;
  let fixture: ComponentFixture<LengthTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LengthTabPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LengthTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
