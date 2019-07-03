import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Bookmark } from './bookmark.model'

@Injectable({providedIn: 'root'})
export class BookmarkService {

  constructor(private http: HttpClient){}

  fetchBookmarks() {
    this.http
    .get('https://library-of-rooms.firebaseio.com/bookmarks.json')
    .subscribe( bookmarks => {
      console.log("[fetchBookmarks] ",bookmarks)
    })
  }

}