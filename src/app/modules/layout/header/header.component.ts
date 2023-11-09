import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() getIsNavigateHeader!:boolean;
  public IsNavigateHeade:boolean = true;
  activeNavigation!: string | undefined;
  headerNavigation = [
    'hotel',
    'restaurant',
    'homestay',
    'tour',
    'utilities',
    'cooperate',
    'blog',
  ];

  private token = sessionStorage.getItem('token');
  public isToken: boolean = false;


  // headerNavigation = [
  //   {link: 'hotel', disabled: true,},
  //   {link: 'restaurant', disabled: true,},
  //   {link: 'homestay', disabled: true,},
  //   {link: 'tour', disabled: false,},
  //   {link: 'utilities', disabled: true,},
  //   {link: 'cooperate', disabled: true,},
  //   {link: 'blog', disabled: true,},
  // ]

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.activeNavigation = this.route.snapshot.firstChild?.url[0].path;
    this.checkToken();
    this.setNavigateHeader();
  }

  checkToken(){
    if (this.token) {
      this.isToken = true;
    }
  }

  setNavigateHeader(){
    if (this.getIsNavigateHeader === undefined) {
      this.IsNavigateHeade;
    }else{
      this.IsNavigateHeade = false;
    }
  }

  showLoginPage(){
    this.router.navigate(['login']);
  }

  showRegisterPage(){
    this.router.navigate(['register']);
  }

}
