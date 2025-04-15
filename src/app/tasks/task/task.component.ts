import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {

  @Input({ required: true}) task!: Task
  @Output() complete = new EventEmitter<string>();

  private tasksService = inject(TasksService)

  onCompleteTask(){
    this.tasksService.removeTask(this.task.id);
  }
}
