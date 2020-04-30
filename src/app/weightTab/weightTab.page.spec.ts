import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { WeightTabPage } from './weightTab.page';

describe('WeightTabPage', () => {
  let component: WeightTabPage;
  let fixture: ComponentFixture<WeightTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeightTabPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(WeightTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
