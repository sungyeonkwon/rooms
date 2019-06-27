import { EventEmitter, Injectable } from '@angular/core';
import { Room } from './room.model'

@Injectable()
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

  getRooms() {
    return this.rooms.slice()
  }
}