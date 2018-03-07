import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDestructuredListComponent } from './recipe-destructured-list.component';

describe('RecipeDestructuredListComponent', () => {
  let component: RecipeDestructuredListComponent;
  let fixture: ComponentFixture<RecipeDestructuredListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDestructuredListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDestructuredListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
