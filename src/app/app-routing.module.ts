import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'dashboard', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'orders', loadChildren: () => import('./../app/pages/Management/orders/orders.module').then(m => m.OrdersModule) },
                    { path: 'expenses', loadChildren: () => import('./../app/pages/Management/expenses/expenses.module').then(m => m.ExpensesModule) },
                    { path: 'revenues', loadChildren: () => import('./../app/pages/Management/revenues/revenues.module').then(m => m.RevenuesModule) },
                    { path: 'accounts', loadChildren: () => import('./../app/pages/Setting/account/account.module').then(m => m.AccountModule) },
                    { path: 'roles', loadChildren: () => import('./../app/pages/Setting/roles/roles.module').then(m => m.RolesModule) },
                    { path: 'payment-methods', loadChildren: () => import('./../app/pages/Setting/payment-methods/payment-methods.module').then(m => m.PaymentMethodsModule) },
                    { path: 'event-types', loadChildren: () => import('./../app/pages/Setting/event-type/event-type.module').then(m => m.EventTypeModule) },
                    { path: 'event-statuses', loadChildren: () => import('./../app/pages/Setting/order-status/order-status.module').then(m => m.OrderStatusModule) },
                    { path: 'packages', loadChildren: () => import('./../app/pages/Setting/packages/packages.module').then(m => m.PackagesModule) },
                    { path: 'templates', loadChildren: () => import('./../app/pages/Setting/templates/templates.module').then(m => m.TemplatesModule) },

                ]
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
