import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TemperatureTabPage } from './temperatureTab.page';

describe('TemperatureTabPage', () => {
  let component: TemperatureTabPage;
  let fixture: ComponentFixture<TemperatureTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemperatureTabPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TemperatureTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
