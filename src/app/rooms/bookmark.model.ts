interface Highlight {
  location: string;
  text: string;
}

export class Bookmark {
  public title: string;
  public author: string;
  public highlights: Highlight[];

  constructor(title: string, author: string, highlights?: Highlight[]) {
    this.title = title
    this.author = author
    this.highlights = highlights
  }
}