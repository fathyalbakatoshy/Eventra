import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackagesRoutingModule } from './packages-routing.module';
import { PackageListComponent } from './package-list/package-list.component';
import { CreatePackageComponent } from './create-package/create-package.component';
import { UpdatePackageComponent } from './update-package/update-package.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';


@NgModule({
    declarations: [
        PackageListComponent,
        CreatePackageComponent,
        UpdatePackageComponent
    ],
    imports: [
        CommonModule,
        PackagesRoutingModule,
        TableModule,
        ButtonModule,
        ReactiveFormsModule,
        InputTextModule,
        DropdownModule,
        MenuModule,
        CalendarModule
    ]
})
export class PackagesModule { }
