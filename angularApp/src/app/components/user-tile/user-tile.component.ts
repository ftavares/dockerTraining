import { Component, OnInit, Input } from '@angular/core';

import { UserModel } from '../../models/usermodel';

@Component({
  selector: 'app-user-tile',
  templateUrl: './user-tile.component.html',
  styleUrls: ['./user-tile.component.scss']
})
export class UserTileComponent implements OnInit {
  @Input() user: UserModel;

  constructor() {

  }

  ngOnInit() {
    console.log(this.user);
  }

}
