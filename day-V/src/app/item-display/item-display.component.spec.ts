import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDisplayComponent } from './item-display.component';

describe('ItemDisplayComponent', () => {
  let component: ItemDisplayComponent;
  let fixture: ComponentFixture<ItemDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemDisplayComponent]
    });
    fixture = TestBed.createComponent(ItemDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
