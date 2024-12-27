import { Component, OnInit } from '@angular/core';
import { CreateTypeComponent } from '../create-type/create-type.component';
import { MenuItem, MessageService, ConfirmationService } from 'primeng/api';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrl: './type-list.component.scss'
})
export class TypeListComponent implements OnInit {
    typeList: any[];
    menuItems: MenuItem;
    ref: DynamicDialogRef;
    constructor(
        private dialogService: DialogService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
    ) { }

    ngOnInit(): void {
        this.getTypes();
        this.initMenu();
    }

    getTypes(): void {
        this.typeList = [
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

    createType(): void {
        this.ref = this.dialogService.open(CreateTypeComponent, {
            header: 'Create Event Type',
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
