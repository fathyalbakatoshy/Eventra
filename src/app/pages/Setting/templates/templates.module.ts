import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module';
import { TemplateListComponent } from './template-list/template-list.component';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { UpdateTemplateComponent } from './update-template/update-template.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';


@NgModule({
    declarations: [
        TemplateListComponent,
        CreateTemplateComponent,
        UpdateTemplateComponent
    ],
    imports: [
        CommonModule,
        TemplatesRoutingModule,
        TableModule,
        ButtonModule,
        ReactiveFormsModule,
        InputTextModule,
        DropdownModule,
        MenuModule,
        CalendarModule
    ]
})
export class TemplatesModule { }
