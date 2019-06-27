import { EventEmitter, Injectable } from '@angular/core';
import { Room } from './room.model'

@Injectable()
export class RoomService {
  
  private rooms: Room[] = [
    new Room(1, 'Room 1', 'Jungle theme.', 'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_1280.jpg'),
    new Room(2, 'Room 2', 'seoncd theme.', 'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_1280.jpg'),
    new Room(3, 'Roo3rm 3', 'Jungle theme.', 'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_1280.jpg'),
    new Room(4, 'Ro3r3om 4', 'seoncd theme.', 'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_1280.jpg'),
    new Room(5, 'Ro3r3rom 5', 'Jungle theme.', 'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_1280.jpg'),
    new Room(6, 'Ro3rom 6', 'seoncd theme.', 'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_1280.jpg'),
    new Room(7, 'Room 7', 'Jungle theme.', 'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_1280.jpg'),
    new Room(8, 'Room 8', 'seoncd theme.', 'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_1280.jpg'),
    new Room(9, 'Ro 9', 'Jungle theme.', 'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_1280.jpg'),
    new Room(10, 'Ro3r10', 'seoncd theme.', 'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_1280.jpg'),
    new Room(11, 'Ro3r3rom 11', 'Jungle theme.', 'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_1280.jpg'),
    new Room(12, 'Ro3rom 12', 'seoncd theme.', 'https://cdn.pixabay.com/photo/2018/12/22/16/36/recipe-3889916_1280.jpg'),
  ]

  getRooms() {
    return this.rooms.slice()
  }
}