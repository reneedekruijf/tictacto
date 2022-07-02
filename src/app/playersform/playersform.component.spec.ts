import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersformComponent } from './playersform.component';

describe('PlayersformComponent', () => {
  let component: PlayersformComponent;
  let fixture: ComponentFixture<PlayersformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
