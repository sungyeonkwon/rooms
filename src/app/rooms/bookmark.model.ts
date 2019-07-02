interface Highlight {
  id: number;
  page: number;
  location: number;
  text: string;
}

export class Bookmark {
  public title: string;
  public author: string;
  public hightlights: Highlight[];

  constructor(title: string, author: string, hightlights?: Highlight[]) {
    this.title = title
    this.author = author
    this.hightlights = hightlights
  }
}