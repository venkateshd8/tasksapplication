import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { DUMMY_Tasks } from '../dummy-tasks';
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTask } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  @Input({ required: true }) userId!: string
  @Input({required: true}) name!: string;

  tasks = DUMMY_Tasks;
  isAddingTask: boolean = false;

  constructor(private tasksService: TasksService){

  }

  get selectedUsersTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(taskId: string){
    this.tasksService.removeTask(taskId);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCancelAddTask(){
    this.isAddingTask = false;
  }

}
