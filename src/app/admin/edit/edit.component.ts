import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Bookmark } from '../../rooms/bookmark.model' 
import { BookmarkService } from '../../rooms/bookmark.service'
import { AdminService, AdminResponseData } from '../admin.service'
import { Observable, Subscription } from 'rxjs'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {
  private adminSub: Subscription;
  // isAuthenticated = false;
  subscription: Subscription;
  bookmarks;

  @ViewChild('f', {static: false}) myForm: NgForm; 

  constructor(
    private bookmarkService: BookmarkService,
    private adminService: AdminService
    ) { }

  ngOnInit() {
    this.subscription = this.bookmarkService.bookmarksChanged
      .subscribe(
        (bookmarks: Bookmark[]) => {
          this.bookmarks = bookmarks
        }
      )
    this.bookmarks = this.bookmarkService.fetchBookmarks();

    this.adminSub = this.adminService.admin.subscribe(admin => {
      console.log(">>checking, ", admin)
    });
  }

  ngOnDestroy() {
    this.adminSub.unsubscribe();
  }

  onClick(){
    const object = this.myForm.value.test
    this.bookmarkService.postBookmarks(object)
    this.myForm.reset()
  }

}