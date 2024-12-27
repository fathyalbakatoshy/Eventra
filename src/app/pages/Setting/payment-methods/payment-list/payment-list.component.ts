import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService, ConfirmationService } from 'primeng/api';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { CreatePaymentComponent } from '../create-payment/create-payment.component';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrl: './payment-list.component.scss'
})
export class PaymentListComponent implements OnInit {
    paymentList: any[];
    menuItems: MenuItem;
    ref: DynamicDialogRef;
    constructor(
        private dialogService: DialogService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
    ) { }

    ngOnInit(): void {
        this.getPayments();
        this.initMenu();
    }

    getPayments(): void {
        this.paymentList = [
            {
                "name": "Vodafone Cash",
                "date": "2024-12-24",
                "status": true,
            },
            {
                "name": "InstaPay",
                "date": "2024-12-20",
                "status": false,
            },
            {
                "name": "E-Wallet",
                "date": "2024-12-15",
                "status": true,
            },
            {   
                "name": "PayPal",
                "date": "2024-12-10",
                "status": true,
            },
            {
                "name": "Cash",
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

    createPayment(): void {
        this.ref = this.dialogService.open(CreatePaymentComponent, {
            header: 'Create Payment Method',
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
