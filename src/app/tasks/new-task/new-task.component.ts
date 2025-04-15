import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask, Task } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [ FormsModule ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {

  @Input() userId!: string;
  @Output() cancel = new EventEmitter();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = ''

  private tasksService = inject(TasksService)

  onCancel(){
    this.cancel.emit();
  }

  onSubmit(){
    this.tasksService.addTasks({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    }, this.userId)
    this.cancel.emit();
  }
}
