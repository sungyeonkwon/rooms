import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { RoomService } from '../rooms/room.service'
import { Room } from '../rooms/room.model'

@Injectable({ providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient,
    private roomService: RoomService) {

  }

  storeRooms() {
    const rooms = this.roomService.getRooms()
    this.http.put('https://library-of-rooms.firebaseio.com/rooms.json', rooms)
      .subscribe(response => {
        console.log(response)
    })
  }

  fetchRooms() {
    this.http.get('https://library-of-rooms.firebaseio.com/rooms.json')
      .subscribe(response => {
        console.log(response)
    })
  }

}