import { Input, Component, ElementRef, AfterViewInit, ViewChild, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from '../../room.model';

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.scss']
})
export class RoomItemComponent implements AfterViewInit {
  private nextAnimationPoint: boolean = true

  @Input() room: Room;

  constructor(
    private router: Router,
    private el: ElementRef,
    private renderer: Renderer2
    ) { }

  ngAfterViewInit() {

    const wiggleRooms = () => {
      this.nextAnimationPoint? this.renderer.addClass(this.el.nativeElement, 'active') : this.renderer.removeClass(this.el.nativeElement, 'active');
      this.nextAnimationPoint = !this.nextAnimationPoint
    } 
    wiggleRooms()
    setInterval(() => wiggleRooms(), 3000)

  }

  onRoomClick() {
    this.router.navigate(['/room', this.room.id]);
  }
}



