import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { CapacityTabPage } from './capacityTab.page';


describe('CapacityTabPage', () => {
  let component: CapacityTabPage;
  let fixture: ComponentFixture<CapacityTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CapacityTabPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CapacityTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
