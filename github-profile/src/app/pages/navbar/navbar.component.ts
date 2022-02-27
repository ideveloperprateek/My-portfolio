import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerConfigs } from 'src/app/helpers/router.helper';
import { routesConfig } from 'src/app/models/router.model';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  routerConfig: routesConfig[] = routerConfigs;
  constructor(private route: Router) {}

  ngOnInit(): void {}

  navigate(link: string) {
    this.route.navigate([link]);
  }
}
