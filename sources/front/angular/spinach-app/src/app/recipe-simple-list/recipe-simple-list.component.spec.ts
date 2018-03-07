import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSimpleListComponent } from './recipe-simple-list.component';

describe('RecipeSimpleListComponent', () => {
  let component: RecipeSimpleListComponent;
  let fixture: ComponentFixture<RecipeSimpleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeSimpleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeSimpleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
