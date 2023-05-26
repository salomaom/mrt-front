import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'mrt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MRT';
  url = environment.reatTimeBaseURL;
}
