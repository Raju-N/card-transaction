import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-creation',
  templateUrl: './list-creation.component.html',
  styleUrls: ['./list-creation.component.scss'],
})
export class ListCreationComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    console.log(
      'snapshot queryParam user',
      this.route.snapshot.queryParamMap.get('user')
    );

    console.log('Snapshot id', id);

    this.route.paramMap.subscribe((param) => {
      console.log('paramMap', param.get('id'));
      //console.log('paramMap', param.get('userName'));
    });

    this.route.queryParamMap.subscribe((param) => {
      console.log('Query paramMap user', param.get('user'));
      console.log('Query paramMap page', param.get('page'));
    });
  }
}
