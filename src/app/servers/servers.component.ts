import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false
  serverCreationStatus = ''
  serverName = ''
  serverId = ''
  serverStatus = ''
  constructor() {
     
   }

  ngOnInit(): void {
  }
  
  onServerCreation() {
    this.serverCreationStatus = "Server with ID " + this.serverId + " is " + this.serverStatus
  }
  onUpdateServerName(event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }

}
