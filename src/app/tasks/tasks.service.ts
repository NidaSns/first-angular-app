import { Injectable } from '@angular/core';
import { NewTaskData } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Summary for Task 1',
      dueDate: '2023-10-01',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Master Angular',
      summary: 'Summary for Task 1',
      dueDate: '2023-10-01',
    },
    {
      id: 't3',
      userId: 'u2',
      title: 'Master Angular',
      summary: 'Summary for Task 1',
      dueDate: '2023-10-01',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
        this.tasks = JSON.parse(tasks);
    }
  }
  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(), // Unique ID based on current timestamp
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date, // Current date in YYYY-MM-DD format
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
