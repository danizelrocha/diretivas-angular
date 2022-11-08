import { Component, OnInit } from '@angular/core';
import { homedir } from 'os';

@Component({
  selector: 'app-diretiva-ngswitch',
  templateUrl: './diretiva-ngswitch.component.html',
  styleUrls: ['./diretiva-ngswitch.component.scss']
})
export class DiretivaNgswitchComponent implements OnInit {

  aba: string = 'home';

  constructor() { }

  ngOnInit(): void {
  }

}
