import { Input, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from '../../room.model';

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.scss']
})
export class RoomItemComponent implements OnInit {
  @Input() room: Room;

  private router: Router;

  constructor(router: Router) { 
    this.router = router
  }

  ngOnInit() {
  }

  onRoomClick() {
    console.log("room was clicked, what is id", this.room.id)
    this.router.navigate(['/room', this.room.id]);
  }
}



