import { Component, OnInit } from '@angular/core';
import { CreateOrderComponent } from '../create-order/create-order.component';
import { MenuItem, MessageService, ConfirmationService } from 'primeng/api';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss'
})
export class OrderListComponent implements OnInit {
    orderList: any[];
    menuItems: MenuItem;
    ref: DynamicDialogRef;
    constructor(
        private dialogService: DialogService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
    ) { }

    ngOnInit(): void {
        this.getOrder();
        this.initMenu();
    }

    getOrder(): void {
        this.orderList = [
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

    createOrder(): void {
        this.ref = this.dialogService.open(CreateOrderComponent, {
            header: 'Create Order',
            width: '65%',
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
