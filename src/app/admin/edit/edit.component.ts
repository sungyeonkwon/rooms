import { Component, OnInit, OnDestroy } from '@angular/core'
import { NgForm } from '@angular/forms'
import { RoomService } from '../../rooms/room.service'
import { Room } from '../../rooms/room.model'
import { AdminService, AdminResponseData } from '../admin.service'
import { Observable, Subscription } from 'rxjs'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {
  private adminSub: Subscription;
  isAuthenticated = false;
  rooms: Room[]

  constructor(
    private roomService: RoomService,
    private adminService: AdminService
    ) { }

  ngOnInit() {
    // Need to fetch from database, not get rooms
    this.rooms = this.roomService.getRooms()

    // Get admin state
    // this.adminSub = this.adminService.admin.subscribe()
    this.adminSub = this.adminService.admin.subscribe(admin => {
      console.log(">>checking, ", admin)
      this.isAuthenticated = true;
    });
    console.log("adminSub", this.adminSub)
  }

  ngOnDestroy() {
    this.adminSub.unsubscribe();
  }

  onSubmit(form:NgForm){
    // if (!form.valid) { 
    //   console.log("for some unknown reasons this form is not valid")
    //   return;
    // }
    const title = form.value.title
    const bodytext = form.value.bodytext
    const footnote = form.value.footnote
    const imgPath = form.value.imgPath

    // data sotrage overlap!
    this.roomService
      .postRoom()
      .subscribe(responseData => {
        console.log("room on submit, responseData", responseData)
      }, error => {
        console.log("error occured", error)
      })
    form.reset()

  }

}