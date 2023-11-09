import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent {
  optionSelect = [
    {
      icon: 'assets/images/user.svg',
      text: 'Profile',
      index: 1,
      url: '/profile',
    },
    {
      icon: 'assets/images/heart-broken.svg',
      text: 'Favourite',
      index: 2,
      url: '',
    },
    {
      icon: 'assets/images/archive-book.svg',
      text: 'Order',
      index: 3,
      url: '',
    },
    {
      icon: 'assets/images/message-question.svg',
      text: 'Instruction',
      index: 4,
      url: '',
    },
    {
      icon: 'assets/images/key.svg',
      text: 'Change Password',
      index: 5,
      url: '',
    },
  ];

  constructor(private router: Router){}

  logout(){
    sessionStorage.removeItem('token');
    location.reload();
    this.router.navigate(['']);
  }

  clickOption(option: any){
    switch (option.index) {
      case 1:
        return this.showPage(option.url);
      default:
        alert("Chức năng đang phát triển!");
        break;
    }
  }

  showPage(url: string){
    this.router.navigate([url]);
  }
}
