import { Component, ElementRef, ViewChild, ViewChildren, OnInit, OnDestroy } from '@angular/core';
import { Subscription, timer } from 'rxjs'
import { Room } from '../room.model'
import { RoomService } from '../room.service'

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
})
export class RoomListComponent implements OnInit, OnDestroy {

  private roomSubscription: Subscription;
  private breathingSubscription: Subscription;
  timeCount: number;
  rooms: Room[];
  @ViewChildren('roomItem') roomItem: ElementRef;
  @ViewChild('roomItemSelected', {static: false}) roomItemSelected: ElementRef;

  constructor(
    private roomService: RoomService,
  ) { }

  ngOnInit() {
    this.rooms = this.roomService.getRooms()

    this.breathingSubscription = timer(0, 2000).subscribe(count => {
      this.timeCount = count
    })
    this.roomService.fetchRooms()

  }

  ngOnDestroy(): void {
    this.breathingSubscription.unsubscribe();
  }

  onRoomClicked(event): void {
    let selectedRoom;
    const eventPropagationArr = event.path
    eventPropagationArr.forEach( v => {
      if (v.tagName == 'APP-ROOM-ITEM'){
        selectedRoom = v
      }
    })
    console.log("selectedRoom", selectedRoom)

    this.roomService.stopRoomAnimation(this.roomItem, selectedRoom)
    this.breathingSubscription.unsubscribe(); // Stopping the time-counting
  }

}
