import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HABITS } from '../data/habits';
import { Habit } from '../models/habit';

@Component({
  selector: 'app-habit-form',
  templateUrl: './habit-form.component.html',
  styleUrls: ['./habit-form.component.scss'],
})
export class HabitFormComponent implements OnInit {
  public habit: Habit;
  public habits: Habit[];
  public editingIndex: number;
  public editing = false;

  public habitForm = new FormGroup({
    name: new FormControl(''),
    frequency: new FormControl(''),
    description: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {
    this.habits = HABITS;
  }

  public setEditForm(habit: Habit) {
    this.habitForm.patchValue({
      name: habit.name,
      frequency: habit.frequency,
      description: habit.description,
    });
  }

  public onSubmit() {
    const habit = this.habitForm.value as Habit;

    if (this.habit) {
      this.habits.splice(this.editingIndex, 1, habit);
    } else {
      this.habits.push(habit);
    }
    this.exitForm();
  }

  exitForm() {
    this.habitForm.reset();
    this.editing = false;
  }
}
