import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Management',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] },
                    { label: 'Orders', icon: 'pi pi-fw pi-shopping-cart', routerLink: ['/dashboard/orders'] },
                    { label: 'Revenues', icon: 'pi pi-fw pi-dollar', routerLink: ['/dashboard/revenues'] },
                    { label: 'Expenses', icon: 'pi pi-fw pi-chart-line', routerLink: ['/dashboard/expenses'] },
                ]
            },
            {
                label: 'Settings',
                items: [
                    { label: 'Accounts', icon: 'pi pi-fw pi-users', routerLink: ['/dashboard/accounts'] },
                    { label: 'Roles', icon: 'pi pi-fw pi-lock', routerLink: ['/dashboard/roles'] },
                    { label: 'Payment Methods', icon: 'pi pi-fw pi-credit-card', routerLink: ['/dashboard/payment-methods'] },
                    { label: 'Event Type' , icon: 'pi pi-fw pi-calendar', routerLink: ['/dashboard/event-types'] },
                    { label: 'Orders Status' , icon: 'pi pi-fw pi-check-square', routerLink: ['/dashboard/event-statuses'] },
                    { label: 'Packages', icon: 'pi pi-fw pi-box', routerLink: ['/dashboard/packages'] },
                    { label: 'Templates', icon: 'pi pi-fw pi-file', routerLink: ['/dashboard/templates'] },
                ]
            }
        ];
    }
}
