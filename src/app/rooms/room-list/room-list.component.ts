import { Component, 
  OnInit,
} from '@angular/core';
import { trigger, transition, state, group, keyframes, animate, style } from '@angular/animations';

import { Room } from '../room.model'
import { RoomService } from '../room.service'

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
  animations: [
  ]
})
export class RoomListComponent implements OnInit {

  rooms: Room[];
  roomPackages = []

  constructor(
    private roomService: RoomService
  ) { }

  ngOnInit() {
    this.rooms = this.roomService.getRooms()
    
    // Package rooms into 4 for animation
    let roomPackageItem: Room[] = []
    for (let i = 1; i <= this.rooms.length; i++){
      roomPackageItem.push(this.rooms[i-1])
      if (i % 4 === 0 || i == this.rooms.length){
        this.roomPackages.push(roomPackageItem)
        roomPackageItem = []
      }
    }
    
  }

  onClickTest(){
    console.log("clieck next")
  }



}



