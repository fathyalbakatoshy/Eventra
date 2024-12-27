import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderStatusRoutingModule } from './order-status-routing.module';
import { StatusListComponent } from './status-list/status-list.component';
import { UpdateStatusComponent } from './update-status/update-status.component';
import { CreateStatusComponent } from './create-status/create-status.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';


@NgModule({
    declarations: [
        StatusListComponent,
        UpdateStatusComponent,
        CreateStatusComponent
    ],
    imports: [
        CommonModule,
        OrderStatusRoutingModule,
        TableModule,
        ButtonModule,
        ReactiveFormsModule,
        InputTextModule,
        DropdownModule,
        MenuModule,
        CalendarModule,
        InputTextareaModule
    ]
})
export class OrderStatusModule { }
