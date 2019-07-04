import { Component, Renderer2, ElementRef, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { interval, Subscription, Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { Room } from '../../room.model'
import { Bookmark } from '../../bookmark.model'
import { BookmarkService } from '../../bookmark.service'

@Component({
  selector: 'app-room-inside',
  templateUrl: './room-inside.component.html',
  styleUrls: ['./room-inside.component.scss'],
})
export class RoomInsideComponent implements OnInit, OnDestroy, AfterViewInit {
  
  @ViewChild('content', {static: false}) content: ElementRef;

  room: {id:number, name?:string, description?:string, imgPath?:string};
  rooms: Room[];
  bookmark: Bookmark
  bookmarks;
  subscription: Subscription;
  timer: {timepassed: number};

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private bookmarkService: BookmarkService,
    private renderer: Renderer2,
    private el: ElementRef,
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
        }
      )

    // Get id for this room
    this.room = {
      id: +this.route.snapshot.params['id'] // unary operator
    }

    // setTimeout(() => {this.renderer.removeClass(this.container.el.nativeElement, 'start')}, 500)

  
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

  ngAfterViewInit(){
    console.log("grabbing?", this.content.nativeElement.classList.add('start'))
  }

  ngOnDestroy(): void {
    // console.log("about to destroy sub:", this.ObsSubscription)
    // this.ObsSubscription.unsubscribe()
  }

  onClickExit() {
    console.log('gonna go out')
    this.content.nativeElement.classList.remove('start')
    // Go inside of the room
    setTimeout(() => {this.router.navigate([''])}, 1500)
  }

}
