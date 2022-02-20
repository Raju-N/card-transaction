import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCreationComponent } from './list-creation.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ListCreationComponent },
  { path: ':id', component: ListCreationComponent },
];
@NgModule({
  declarations: [ListCreationComponent, TodoListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ListCreationModule {}
