import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrameDemoComponent } from './frame-demo/frame-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FrameDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-animations-demo';
}
