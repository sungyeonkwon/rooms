import { Component, ElementRef, ViewChildren, OnInit, OnDestroy } from '@angular/core';
import { Subscription, timer } from 'rxjs'
import { Room } from '../room.model'
import { RoomService } from '../room.service'
import { ContentService } from '../../content/content.service'

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

  constructor(
    private roomService: RoomService,
    private contentService: ContentService
  ) { }

  ngOnInit() {
    this.rooms = this.roomService.getRooms()

    

    this.breathingSubscription = timer(0, 2000).subscribe(count => {
      this.timeCount = count
    })

    console.log('checking out ContentService', this.contentService.getContents())
    this.roomService.fetchRooms()

  }

  ngOnDestroy(): void {
    this.breathingSubscription.unsubscribe();
  }

  onRoomClicked(): void {
    console.log("unsubsribe")
    const roomItem = this.roomItem
    this.roomService.stopRoomAnimation(roomItem)
    this.breathingSubscription.unsubscribe();
  }

}
