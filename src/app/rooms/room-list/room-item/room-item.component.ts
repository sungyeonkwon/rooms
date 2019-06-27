import { Input, Component, ElementRef, OnDestroy, AfterViewInit, ViewChild, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription, Observable } from 'rxjs'
import { Room } from '../../room.model';

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.scss']
})
export class RoomItemComponent implements AfterViewInit, OnInit, OnDestroy {

  private breatheSubscription: Subscription;
  private nextAnimationPoint: boolean = true;
  timepassed;

  @Input() room: Room;

  constructor(
    private router: Router,
    private el: ElementRef,
    private renderer: Renderer2
    ) { }

  ngOnInit() {

  }

  ngAfterViewInit() {

    const breatheRooms = () => {
      this.nextAnimationPoint? this.renderer.addClass(this.el.nativeElement, 'active') : this.renderer.removeClass(this.el.nativeElement, 'active');
      this.nextAnimationPoint = !this.nextAnimationPoint
    } 

    this.breatheSubscription = interval(3000).subscribe( count => {
      // console.log(count)
    })
    // wiggleRooms()
    // this.intervalTimer = setInterval(() => wiggleRooms(), 3000)
    // console.log("intervalTimer", this.intervalTimer)

    // Wiggle observable



  }

  ngOnDestroy(): void {

  }

  onRoomClick() {
    console.log("click plaese", this.breatheSubscription)
    this.breatheSubscription.unsubscribe()
    // this.router.navigate(['/room', this.room.id]);
  }


}



