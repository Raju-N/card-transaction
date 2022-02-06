import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCreationComponent } from './list-creation.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  declarations: [ListCreationComponent, TodoListComponent],
  imports: [CommonModule],
})
export class ListCreationModule {}
