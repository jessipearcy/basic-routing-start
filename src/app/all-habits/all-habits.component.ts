import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HABITS } from '../data/habits';
import { Habit } from '../models/habit';

@Component({
  selector: 'app-all-habits',
  templateUrl: './all-habits.component.html',
  styleUrls: ['./all-habits.component.scss'],
})
export class AllHabitsComponent implements OnInit {
  public habits: Habit[];

  constructor() {}

  ngOnInit(): void {
    this.habits = HABITS;
  }

  public onDelete(index: number) {
    this.habits.splice(index, 1);
  }
}
