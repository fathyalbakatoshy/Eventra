import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevenuesRoutingModule } from './revenues-routing.module';
import { RevenueListComponent } from './revenue-list/revenue-list.component';
import { CreateRevenueComponent } from './create-revenue/create-revenue.component';
import { UpdateRevenueComponent } from './update-revenue/update-revenue.component';


@NgModule({
  declarations: [
    RevenueListComponent,
    CreateRevenueComponent,
    UpdateRevenueComponent
  ],
  imports: [
    CommonModule,
    RevenuesRoutingModule
  ]
})
export class RevenuesModule { }
