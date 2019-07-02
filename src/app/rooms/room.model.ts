export class Room {
  public id: number;
  public title: string;
  public bodytext: string;
  public footnote: string;
  public imgPath: string;

  constructor(id: number, title?: string, bodytext?: string, imgPath?: string, footnote?:string) {
    this.id = id;
    this.title = title
    this.bodytext = bodytext
    this.footnote = footnote
    this.imgPath = imgPath
  }
}