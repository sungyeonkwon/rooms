import { EventEmitter, Injectable } from '@angular/core';
import { Content } from './content.model'

@Injectable({providedIn: 'root'})
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

  createAndStoreContent(content: Content){

  }
}