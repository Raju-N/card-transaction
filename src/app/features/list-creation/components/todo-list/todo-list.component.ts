import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { NotFoundError } from 'src/app/shared/service/error.service';
import { TodoApiService } from '../../service/todo-api.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  lists: any = [];

  constructor(private todoApi: TodoApiService) {}

  ngOnInit(): void {
    this.todoApi
      .get()
      .pipe(
        map((res: any) => {
          return res.filter((val: any) => val.userId === 1);
        })
      )
      .subscribe((res) => (this.lists = res));
  }

  createList(el: HTMLInputElement) {
    const req = {
      userId: 1,
      title: el.value,
      completed: false,
    };

    this.todoApi.create(req).subscribe((res) => {
      this.lists.push(res);
      el.value = '';
    });
  }

  onDelete(list: any) {
    this.todoApi.delete(list.id).subscribe(
      (res) => {
        const index = this.lists.indexOf(list);
        this.lists.splice(index, 1);
      },
      (error: Response) => {
        if (error instanceof NotFoundError) alert('Data not found');
        else alert('Some unhandled exception error occured');
      }
    );
  }
}
