import { Component, computed, EventEmitter, input, Input, output, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  // Without signals 
  // selectedUser = DUMMY_USERS[randomIndex];

  // get imagePath(){
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  // onSelectUser(){
  //   console.log('clicked')
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser = DUMMY_USERS[randomIndex];
  // }

  // With signals // signals introduction and how to use

  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

  // onSelectUser(){
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }

  // Using input signals output is event emitter type
  // id = input.required<string>(); // To read these values in the template / html file we need to use as id(); function call
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>()

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // })

  // onSelectUser(){

  // }

  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  
  @Input() user!: User
  @Output() select = new EventEmitter<string>();
  @Input() selected?: boolean;

  

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id)
  }
}
