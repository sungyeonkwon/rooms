import { EventEmitter, Injectable } from '@angular/core';
import { Content } from './content.model'

@Injectable()
export class ContentService {
  
  private contents: Content[] = [
    new Content(
      'alwknd',
      'wlekn'
    ),
    new Content(
      'wef',
      'lwkenflwkenflwkenflwkenflweknf'
    )
  ]

  getContents() {
    return this.contents.slice()
  }
}