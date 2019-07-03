import { Component } from '@angular/core';
import { trigger, transition, state, group, keyframes, animate, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'pink',
        transform: 'translateX(0px)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),
      // transition('normal => highlighted', animate(300))
      transition('normal <=> highlighted', animate(300))
    ]),
    trigger('wildState', [
      state('normal', style({
        'background-color': 'pink',
        transform: 'translateX(0px)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),
      // transition('normal => highlighted', animate(300))
      transition('normal <=> highlighted', animate(300))
    ])
  ]
})
export class AppComponent {
  state = 'normal';
  wildState = 'normal'
  title = 'rooms';

  onAnimationClick() {
    this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
  }
}
