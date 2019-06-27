import { Input, Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Room } from '../../room.model';

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.scss'],
})
export class RoomItemComponent implements OnInit {
  @Input() room: Room;
  router: Router;

  constructor(router: Router) { 
    this.router = router
  }

  ngOnInit() {
  }

  onRoomClick() {
    // this.router.navigate(['/room', this.room.id]);
    console.log("whatever")
  }

}



