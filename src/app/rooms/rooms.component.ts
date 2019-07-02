import { Component, OnInit } from '@angular/core';
import { Room } from './room.model'
import { RoomService } from './room.service'
// import { ContentService } from '../content/content.service'
// import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  // providers: [RoomService]
})
export class RoomsComponent implements OnInit {
  rooms: Room[];

  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.rooms = this.roomService.getRooms()
    console.log("[ROOM comp]", this.rooms)
  }

}
