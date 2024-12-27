import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventTypeRoutingModule } from './event-type-routing.module';
import { TypeListComponent } from './type-list/type-list.component';
import { CreateTypeComponent } from './create-type/create-type.component';
import { UpdateTypeComponent } from './update-type/update-type.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { InputTextareaModule } from 'primeng/inputtextarea';


@NgModule({
    declarations: [
        TypeListComponent,
        CreateTypeComponent,
        UpdateTypeComponent
    ],
    imports: [
        CommonModule,
        EventTypeRoutingModule,
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
export class EventTypeModule { }
