import { Injectable } from '@angular/core';

import * as SignalR from '@microsoft/signalr';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RTClientService {
  private hubConnection!: SignalR.HubConnection;

  constructor() {
    this.startConnection();
  }

  public startConnection() {
    this.hubConnection = new SignalR.HubConnectionBuilder()
      .configureLogging(SignalR.LogLevel.Information)
      .withUrl(environment.reatTimeBaseURL, {
        withCredentials: false,
      })
      .withAutomaticReconnect()
      .build();

    this.hubConnection.on('connected', (message) => console.log(message));
    this.hubConnection.on('Teste', (message) => console.log(message));
    console.log('Starting connection...');
    this.hubConnection
      .start()
      .then(() => {
        this.hubConnection.invoke('Filter', 'Teste');
        console.log('Connection started.');
      })
      .catch((err: any) => console.log(err));
  }
}
