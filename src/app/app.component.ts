import { Component } from '@angular/core';

import { ApiDbService } from './services/api-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ApiDbService]
})
export class AppComponent {
  public apiResponseData: any;

  constructor(private apiDbService: ApiDbService) {
    this.apiResponseData = [];
    this.apiDbService.getAllData().subscribe(data => {
      this.apiResponseData = data[0];
    });
  }

  //https://api.mlab.com/api/1/databases/cloudfirst/collections/towers?apiKey=bkrXAXOr5IwTC3JZ1jLbJ68bIQknSxZE
}
