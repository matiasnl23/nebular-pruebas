import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items: NbMenuItem[] = [
    { title: 'Dashboard' },
    {
      title: 'Customer Service',
      children: [
        { title: 'CSCA', link: 'customer-service' },
        { title: 'CSCP', link: 'customer-service' },
      ],
    },
    {
      title: 'Quality Management',
      children: [
        { title: 'Capacitaciones', link: 'quality-management' },
        { title: 'Acciones', link: 'quality-management' },
        { title: 'Reclamos', link: 'quality-management' },
      ],
    },
    {
      title: 'Administration',

      children: [
        { title: 'Usuarios', link: 'administration' },
        { title: 'Grupos', link: 'administration' },
        { title: 'Clientes', link: 'administration' },
        { title: 'Contactos', link: 'administration' },
      ],
    },
  ];

  constructor(private sidebarService: NbSidebarService) {}

  ngOnInit(): void {}

  toggleSidebar(): void {
    this.sidebarService.toggle();
  }
}
