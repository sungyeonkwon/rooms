import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Room } from './room.model'

@Injectable({providedIn: 'root'})
export class RoomService {
  
  private rooms: Room[] = [
    new Room(1, 'Room 1', 'Jungle theme.', 'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_1280.jpg'),
    new Room(2, 'Room 2', 'seoncd theme.', 'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_1280.jpg'),
    new Room(3, 'Room 3', 'Jungle theme.', 'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_1280.jpg'),
    new Room(4, 'Room 4', 'seoncd theme.', 'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_1280.jpg'),
    new Room(5, 'Room 5', 'Jungle theme.', 'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_1280.jpg'),
    new Room(6, 'Room 6', 'seoncd theme.', 'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_1280.jpg'),
    new Room(7, 'Room 7', 'Jungle theme.', 'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_1280.jpg'),
    new Room(8, 'Room 8', 'seoncd theme.', 'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_1280.jpg'),
    new Room(9, 'Room 9', 'Jungle theme.', 'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_1280.jpg'),
    new Room(10, 'Room 10', 'seoncd theme.', 'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_1280.jpg'),
    new Room(11, 'Room 11', 'Jungle theme.', 'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_1280.jpg'),
    new Room(12, 'Room 12', 'seoncd theme.', 'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_1280.jpg'),
    new Room(13, 'Room 13', 'Jungle theme.', 'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_1280.jpg'),
    new Room(14, 'Room 14', 'seoncd theme.', 'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_1280.jpg'),
    new Room(15, 'Room 15', 'Jungle theme.', 'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_1280.jpg'),
    new Room(16, 'Room 16', 'seoncd theme.', 'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_1280.jpg'),
  ]

  constructor(private http: HttpClient){}

  getRooms() {
    return this.rooms.slice()
  }

  // TODO: define return type, probably observable
  postRoom(): any {
    // Dummy room data for testing 
    const roomData: Room = {id:100, title: 'wef', bodytext: 'welifnwef', footnote: 'this is a footnoteee', imgPath:'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_1280.jpg'} 
    this.http
      .post(
        'https://library-of-rooms.firebaseio.com/rooms.json',
        roomData
      )
      .subscribe(responseData => {
        console.log("room service response data", responseData)
      })
  }

  fetchRooms() {
    this.http
    .get('https://library-of-rooms.firebaseio.com/rooms.json')
    .subscribe(rooms => {
      console.log("[fetchrooms] rooms get data", rooms)
    })
  }

  stopRoomAnimation(allRooms, selectedRoom){
    // Stop animation
    allRooms.forEach((v) => {
      const el = v.el.nativeElement

      // Get the computed style
      const styles = getComputedStyle(el)
      const snappedWidth =  styles.getPropertyValue('width')
      const snappedHeight =  styles.getPropertyValue('height')
      const snappedBG =  styles.getPropertyValue('background')

      // Pause the animation
      v.renderer.setStyle(el,'width', snappedWidth)
      v.renderer.setStyle(el,'height', snappedHeight)
      v.renderer.setStyle(el,'background', snappedBG)
      v.renderer.removeClass(el, 'active')

    })
    // For selected room, apply zoom animation TODO: use renderer? renderer needs to be passed
    console.log("[stopRoomAnimation] selectedEl", selectedRoom)
    selectedRoom.classList.add('zoom-in');

  }





}