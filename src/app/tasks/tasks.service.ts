import { Injectable } from "@angular/core";
import { DUMMY_Tasks } from "../dummy-tasks";
import { NewTask } from "./task/task.model";


@Injectable({
    providedIn: 'root'
})

export class TasksService {

    tasks = DUMMY_Tasks;

    constructor(){
        const tasks = localStorage.getItem('tasks');

        if(tasks){
            this.tasks = JSON.parse(tasks);
        }
    }

    getUserTasks(userId: string){
        return this.tasks.filter((task) => task.userId === userId);
    }

    addTasks(task: NewTask, userId: string){
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userId: userId,
            title: task.title,
            summary: task.summary,
            dueDate: task.dueDate
        })
        this.saveTasks();
    }

    removeTask(id: string){
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.saveTasks();
    }

    private saveTasks(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }

}