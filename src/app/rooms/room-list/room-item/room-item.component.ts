import { Input, Component, EventEmitter, ElementRef, AfterViewInit, ViewChild, OnInit, Renderer2, TemplateRef, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from '../../room.model';


@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.scss']
})
export class RoomItemComponent implements AfterViewInit {
  private nextAnimationPoint: boolean = true
  @Input() timeCount: number;
  @Input() room: Room;
  @Output() roomClicked = new EventEmitter()

  constructor(
    private router: Router,
    private el: ElementRef,
    private renderer: Renderer2
    ) { }

  ngAfterViewInit() {

  }

  ngOnChanges() {
    // Updated timeCount activates the wiggle
    this.wiggleRooms()
  }

  wiggleRooms() {
    this.nextAnimationPoint? this.renderer.addClass(this.el.nativeElement, 'active') : this.renderer.removeClass(this.el.nativeElement, 'active');
    this.nextAnimationPoint = !this.nextAnimationPoint
  }

  onRoomClick(event: any) {
    // Emit event to unsubscribe the parent event
    this.roomClicked.emit()

    // CSS transition to be stopped


    // Go inside of the room
    setTimeout(() => {this.router.navigate(['/room', this.room.id])}, 2000)
  }
}



