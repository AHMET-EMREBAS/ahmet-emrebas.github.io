import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ae-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'website';

  constructor(private readonly httpClient: HttpClient) { }
  ngOnInit(): void {

    this.httpClient.get('api').subscribe(console.log)
  }
}
