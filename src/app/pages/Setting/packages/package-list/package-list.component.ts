import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService, ConfirmationService } from 'primeng/api';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { CreateRoleComponent } from '../../roles/create-role/create-role.component';
import { CreatePackageComponent } from '../create-package/create-package.component';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrl: './package-list.component.scss'
})
export class PackageListComponent implements OnInit {
    packageList: any[];
    menuItems: MenuItem;
    ref: DynamicDialogRef;
    constructor(
        private dialogService: DialogService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
    ) { }

    ngOnInit(): void {
        this.getRoles();
        this.initMenu();
    }

    getRoles(): void {
        this.packageList = [
            {
                "name": "SuperAdmin",
                "date": "2024-12-24",
                "status": true,
                "action": "Edit"
            },
            {
                "name": "Sales",
                "date": "2024-12-20",
                "status": false,
                "action": "Delete"
            },
            {
                "name": "Markting",
                "date": "2024-12-15",
                "status": true,
                "action": "Approve"
            },
            {
                "name": "Customer",
                "date": "2024-12-10",
                "status": true,
                "action": "Suspend"
            }
        ]
    }

    initMenu(): void {
        this.menuItems = [
            {
                label: 'Edit',
                icon: 'pi pi-pencil',
                command: () => {
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-trash',
                command: () => {
                    this.confirmDelete();
                }
            }
        ]
    }

    confirmDelete(): void {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete this item?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            acceptButtonStyleClass: 'p-button-danger',
            acceptIcon: "none",
            rejectIcon: "none",
            accept: () => {
                this.messageService.add({
                    severity: 'success',
                    summary: 'Confirmed',
                    detail: 'Item deleted'
                });
            }
        })
    }

    createPackage(): void {
        this.ref = this.dialogService.open(CreatePackageComponent, {
            header: 'Create Package',
            width: '25%',
            contentStyle: { "overflow": "auto" },
            baseZIndex: 10000,
            maximizable: false
        })

        this.ref.onClose.subscribe((res: any) => {
            if (res) {

            }
        })
    }


}
