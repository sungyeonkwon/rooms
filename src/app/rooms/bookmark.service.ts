import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http'
import { Bookmark } from './bookmark.model'

@Injectable({providedIn: 'root'})
export class BookmarkService {
  bookmarks: Bookmark[] = [];
  bookmarksChanged = new Subject<Bookmark[]>();

  constructor(private http: HttpClient){}

  getBookmarks() {
    return this.bookmarks.slice()
  }

  fetchBookmarks() {
    this.http
      .get<Bookmark[]>('https://library-of-rooms.firebaseio.com/bookmarks.json')
      .pipe(
        map(bookmark => {
          for (let key in bookmark){
            this.bookmarks.push(bookmark[key])
          }
          return bookmark
        })
      )
      .subscribe( bookmarks => {
        this.bookmarksChanged.next(this.bookmarks.slice());
    })
  }

  // Return an observable
  postBookmarks(BookmarkJsonData) {
    this.http.post(
      'https://library-of-rooms.firebaseio.com/bookmarks.json',
      BookmarkJsonData
    ).subscribe(responseData => {
      this.bookmarks.push(BookmarkJsonData)
      this.bookmarksChanged.next(this.bookmarks.slice());
    }, error => {
      console.log("error occured", error)
    })
  }

}
