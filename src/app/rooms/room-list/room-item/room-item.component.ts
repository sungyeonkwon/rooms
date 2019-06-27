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
    console.log("detecting changes?")
    this.wiggleRooms()
  }

  wiggleRooms() {
    this.nextAnimationPoint? this.renderer.addClass(this.el.nativeElement, 'active') : this.renderer.removeClass(this.el.nativeElement, 'active');
    this.nextAnimationPoint = !this.nextAnimationPoint
  }

  onRoomClick(event: any) {
    // Unsubscribe the parent event
    this.roomClicked.emit()
    console.log("child compe", event, this.roomClicked)

    // this.router.navigate(['/room', this.room.id]);
  }
}



