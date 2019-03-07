import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  amount = 101.25;
  checkVar = false;

  toggleFlag() {
    this.checkVar = !this.checkVar;
  }

}
