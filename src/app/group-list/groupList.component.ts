import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {list, List} from "../todo-list/list";


@Component({
  selector: 'group-list',
  templateUrl: './groupList.component.html',
  styleUrls: ['./groupList.component.css'],
})
export class GroupListComponent implements OnInit{
  listGroup: List | undefined;

  constructor(private route: ActivatedRoute) {
    console.log(route)
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const groupId = Number(routeParams.get('groupId'))
    this.listGroup = list.find(group=>group.id===groupId)
  }




}

