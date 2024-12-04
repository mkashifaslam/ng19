import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-open-close',
  imports: [],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: '200px',
          width: '200px',
          opacity: 1,
          color: 'white',
          transform: 'translateX(0)',
          backgroundColor: 'green',
        }),
      ),
      state(
        'closed',
        style({
          height: '200px',
          width: '200px',
          opacity: 0.8,
          color: 'white',
          transform: 'translateX(425px)',
          backgroundColor: 'red',
        }),
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),
    ])
  ],
  templateUrl: './open-close.component.html',
  styleUrl: './open-close.component.css'
})
export class OpenCloseComponent {
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
