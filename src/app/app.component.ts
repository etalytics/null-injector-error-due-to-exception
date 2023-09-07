import { Component } from '@angular/core';
import {MyFailingService} from "./my-failing.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyFailingService],
})
export class AppComponent {
  title = 'null-injector-error-due-to-exception';
  constructor(
    private readonly myFailingService: MyFailingService
  ) {
    console.log('######## myFailingService = ', myFailingService);
  }
}
