import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs'

import { Room } from '../room.model'
import { RoomService } from '../room.service'
import { ContentService } from '../../content/content.service'

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
})
export class RoomListComponent implements OnInit, OnDestroy {

  private breathingSubscription: Subscription;
  timeCount: number;
  rooms: Room[];

  constructor(
    private roomService: RoomService,
    private contentService: ContentService
  ) { }

  ngOnInit() {
    this.rooms = this.roomService.getRooms()

    this.breathingSubscription = interval(2000).subscribe(count => {
      this.timeCount = count
    })

    console.log('checking out ContentService', this.contentService.getContents())

  }

  ngOnDestroy(): void {
    this.breathingSubscription.unsubscribe();
  }

  onRoomClicked() {
    this.breathingSubscription.unsubscribe();
  }

}
