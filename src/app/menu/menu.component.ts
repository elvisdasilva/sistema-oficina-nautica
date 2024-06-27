import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

interface MenuItem {
  path: string;
  label: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatListModule],
  template: `
    @for (item of menuItems; track item.path) {
    <a mat-list-item [href]="item.path">
      {{ item.label }}
    </a>
    }
  `,
  styles: ``,
})
export class MenuComponent {
  menuItems: Array<MenuItem> = [
    {
      path: '/',
      label: 'Dashboard',
    },
    {
      path: 'customer/',
      label: 'Clientes',
    },
    {
      path: '/',
      label: 'Colaborador',
    },
    {
      path: '/',
      label: 'Embarcações',
    },
    {
      path: '/',
      label: 'Fornecedores',
    },
    {
      path: '/',
      label: 'Ordem de Serviço',
    },
    {
      path: '/',
      label: 'Orçamento',
    },
    {
      path: '/',
      label: 'Produtos e Serviços',
    },
  ];
}
