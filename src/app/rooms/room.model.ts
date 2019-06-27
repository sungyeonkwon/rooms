export class Room {
  public id: number;
  public name: string;
  public description: string;
  public imgPath: string;

  constructor(id: number, name?: string, description?: string, imgPath?: string) {
    this.id = id;
    this.name = name
    this.description = description
    this.imgPath = imgPath
  }
}

// Shorthand
// export class Room {
//   constructor(public name: string, public description: string) {}
// }