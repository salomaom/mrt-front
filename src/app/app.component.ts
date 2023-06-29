import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'mrt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'MRT';
  url = environment.reatTimeBaseURL;

  constructor(private authService: AuthService) {}

  async ngOnInit(): Promise<void> {
    window.addEventListener(
      'message',
      (event) => {
        if (event.data.message) {
          const login = JSON.parse(event.data.message);
          this.authService
            .login({ operatorId: '123', password: '123' })
            .subscribe((res) => null);
        }
      },
      false
    );
  }
}
