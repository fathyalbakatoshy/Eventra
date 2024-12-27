import { Component, OnInit } from '@angular/core';
import { CreateStatusComponent } from '../create-status/create-status.component';
import { MenuItem, MessageService, ConfirmationService } from 'primeng/api';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrl: './status-list.component.scss'
})
export class StatusListComponent implements OnInit {
    statusList: any[];
    menuItems: MenuItem;
    ref: DynamicDialogRef;
    constructor(
        private dialogService: DialogService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
    ) { }

    ngOnInit(): void {
        this.getStatus();
        this.initMenu();
    }

    getStatus(): void {
        this.statusList = [
            {
                "name": "Wedding",
                "date": "2024-12-24",
                "status": true,
                
            },
            {
                "name": "Birthday",
                "date": "2024-12-20",
                "status": false,
                
            },
            {
                "name": "Baby Shower",
                "date": "2024-12-15",
                "status": true,
                
            },
            {
                "name": "Graduation",
                "date": "2024-12-10",
                "status": true,
                
            },
            {
                "name": "New Year",
                "date": "2024-12-05",
                "status": true,
                
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

    createRole(): void {
        this.ref = this.dialogService.open(CreateStatusComponent, {
            header: 'Create Order Status',
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
