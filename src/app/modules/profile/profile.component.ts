import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public isNavigateHeader: boolean = false;
  
  constructor(){}

  ngOnInit(): void {
    this.isNavigateHeader;
  }

}
