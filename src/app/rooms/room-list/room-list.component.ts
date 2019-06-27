import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs'

import { Room } from '../room.model'
import { RoomService } from '../room.service'

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
})
export class RoomListComponent implements OnInit, OnDestroy {

  private breathingSubscription: Subscription;
  timeCount: number;
  rooms: Room[];

  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.rooms = this.roomService.getRooms()

    this.breathingSubscription = interval(3000).subscribe(count => {
      this.timeCount = count
    })

  }

  ngOnDestroy(): void {
    this.breathingSubscription.unsubscribe();
  }

  onRoomClicked() {
    console.log("some room was clicked")
    this.breathingSubscription.unsubscribe();
  }

}
