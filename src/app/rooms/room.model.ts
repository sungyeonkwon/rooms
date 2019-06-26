export class Room {
  // static _id = 0;
  public id: number;
  public name: string;
  public description: string;
  public imgPath: string;

  constructor(id: number, name?: string, description?: string, imgPath?: string) {
    this.id = id;
    this.name = name
    this.description = description
    this.imgPath = imgPath
    // this.id = Room._id++;
  }
}

// Shorthand
// export class Room {
//   constructor(public name: string, public description: string) {}
// }