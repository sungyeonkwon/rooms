import { Input, Component, ElementRef, AfterViewInit, ViewChild, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from '../../room.model';

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.scss']
})
export class RoomItemComponent implements AfterViewInit {

  @Input() room: Room;

  constructor(
    private router: Router,
    private el: ElementRef,
    private renderer: Renderer2
    ) { }

  ngAfterViewInit() {
    // this.renderer.setStyle(this.el.nativeElement, 'width', '25%');
    console.log("tha", this.el.nativeElement.querySelector('a'))
    const roomWrapper = this.el.nativeElement.querySelector('app-room-item ')

    setTimeout(() => {
      // console.log('gota', roomWrapper)
      this.renderer.addClass(this.el.nativeElement, 'active');
    },2000)

  }

  onRoomClick() {
    console.log("room was clicked, what is id", this.room.id)
    this.router.navigate(['/room', this.room.id]);
  }
}



