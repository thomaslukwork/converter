import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { AreaTabPage } from './areaTab.page';


describe('AreaTabPage', () => {
  let component: AreaTabPage;
  let fixture: ComponentFixture<AreaTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AreaTabPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AreaTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
