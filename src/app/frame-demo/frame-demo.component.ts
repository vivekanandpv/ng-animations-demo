import { Component, signal } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-frame-demo',
  standalone: true,
  imports: [],
  templateUrl: './frame-demo.component.html',
  styleUrl: './frame-demo.component.css',
  animations: [
    trigger('inactiveActive', [
      state(
        'inactive',
        style({
          opacity: 1,
          backgroundColor: '#c43f55',
          color: 'white',
        })
      ),
      state(
        'active',
        style({
          opacity: 1,
          backgroundColor: '#2a9c5b',
          color: 'yellow',
        })
      ),
      transition('inactive => active', [animate('0.5s')]),
      transition('active => inactive', [animate('0.5s')]),
    ]),
  ],
})
export class FrameDemoComponent {
  active = signal(true);
  toggle() {
    this.active.update((v) => !v);
  }
}
