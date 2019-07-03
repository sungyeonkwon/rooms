import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { interval, Subscription, Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { Room } from '../../room.model'
import { RoomService } from '../../room.service'
import { Bookmark } from '../../bookmark.model'
import { BookmarkService } from '../../bookmark.service'

@Component({
  selector: 'app-room-inside',
  templateUrl: './room-inside.component.html',
  styleUrls: ['./room-inside.component.scss'],
})
export class RoomInsideComponent implements OnInit, OnDestroy {
  
  private ObsSubscription: Subscription;

  room: {id:number, name?:string, description?:string, imgPath?:string};
  rooms: Room[];
  bookmark: Bookmark
  bookmarks;
  highlights;
  subscription: Subscription;
  timer: {timepassed: number};

  constructor(
    private route: ActivatedRoute, 
    private roomService: RoomService,
    private bookmarkService: BookmarkService,
    ) {
      this.timer = {timepassed: 0} 
  }

  ngOnInit() {
    this.bookmarks = this.bookmarkService.fetchBookmarks();
    this.subscription = this.bookmarkService.bookmarksChanged
      .subscribe(
        (bookmarks: Bookmark[]) => {
          this.bookmarks = bookmarks
          this.bookmark = this.bookmarks[this.room.id - 1]
          this.highlights = this.bookmark.highlights
          console.log("selectedBookmark", this.bookmark)
          console.log("highlights", this.highlights)
        }
      )

    // Get id for this room
    this.room = {
      id: +this.route.snapshot.params['id'] // unary operator
    }

    // Get all rooms
    this.rooms = this.roomService.getRooms()
    const selectedRoom = this.rooms.filter( v => v.id === this.room.id )
    this.room = selectedRoom[0]


  
    // // Custom counter observable
    // const customIntervalObservable = Observable.create((observer) => {
    //   let timePassed = 0
    //   setInterval(() => {
    //     observer.next(timePassed)
    //     timePassed += 1000
    //     if (timePassed == 6000) {
    //       observer.complete()
    //     }
    //     // Just to practice error
    //     if (timePassed > 8000) {
    //       observer.error(new Error('throwing error for no reason')) // it kills the oberver
    //     }
    //   }, 1500)
    // })

    // this.ObsSubscription = customIntervalObservable
    //   .subscribe(data => {
    //     console.log('that is... this?', this)
    //     this.timer.timepassed = data
    //     console.log("data", data)
    //     console.log("this.timer", this.timer.timepassed)
    //   }, error => {
    //     console.log("error", error)
    //     alert(error.message)
    //   }, () => { // only when it's complete without an error
    //     console.log('completed!')
    //   })
  }

  ngOnDestroy(): void {
    console.log("about to destroy sub:", this.ObsSubscription)
    this.ObsSubscription.unsubscribe()
  }

}
