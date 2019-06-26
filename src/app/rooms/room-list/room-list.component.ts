import { Component, OnInit } from '@angular/core';

import { Room } from '../room.model'
import { RoomService } from '../room.service'

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
})
export class RoomListComponent implements OnInit {
  rooms: Room[];

  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.rooms = this.roomService.getRooms()
    console.log("[room-list] this.rooms", this.rooms)
  }

}
