import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CreateAccountComponent } from '../create-account/create-account.component';

@Component({
    selector: 'app-account-list',
    templateUrl: './account-list.component.html',
    styleUrl: './account-list.component.scss'
})
export class AccountListComponent implements OnInit {
    accountList: any[];
    menuItems: MenuItem;
    ref: DynamicDialogRef;
    constructor(
        private dialogService: DialogService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
    ) { }

    ngOnInit(): void {
          this.getAccount();
          this.initMenu();
    }

    getAccount(): void {
        this.accountList = [
            {
              "fullName": "John Doe",
              "email": "johndoe@example.com",
              "phone": "+1234567890",
              "role": "Admin",
              "date": "2024-12-24",
              "status": "Active",
              "action": "Edit"
            },
            {
              "fullName": "Jane Smith",
              "email": "janesmith@example.com",
              "phone": "+0987654321",
              "role": "User",
              "date": "2024-12-20",
              "status": "Inactive",
              "action": "Delete"
            },
            {
              "fullName": "Alice Johnson",
              "email": "alice.johnson@example.com",
              "phone": "+1122334455",
              "role": "Editor",
              "date": "2024-12-15",
              "status": "Pending",
              "action": "Approve"
            },
            {
              "fullName": "Bob Brown",
              "email": "bob.brown@example.com",
              "phone": "+2233445566",
              "role": "Viewer",
              "date": "2024-12-10",
              "status": "Active",
              "action": "Suspend"
            },
            {
              "fullName": "Charlie Davis",
              "email": "charlie.davis@example.com",
              "phone": "+3344556677",
              "role": "Admin",
              "date": "2024-12-05",
              "status": "Inactive",
              "action": "Reactivate"
            },
            {
              "fullName": "John Doe",
              "email": "johndoe@example.com",
              "phone": "+1234567890",
              "role": "Admin",
              "date": "2024-12-24",
              "status": "Active",
              "action": "Edit"
            },
            {
              "fullName": "Jane Smith",
              "email": "janesmith@example.com",
              "phone": "+0987654321",
              "role": "User",
              "date": "2024-12-20",
              "status": "Inactive",
              "action": "Delete"
            },
            {
              "fullName": "Alice Johnson",
              "email": "alice.johnson@example.com",
              "phone": "+1122334455",
              "role": "Editor",
              "date": "2024-12-15",
              "status": "Pending",
              "action": "Approve"
            },
            {
              "fullName": "Bob Brown",
              "email": "bob.brown@example.com",
              "phone": "+2233445566",
              "role": "Viewer",
              "date": "2024-12-10",
              "status": "Active",
              "action": "Suspend"
            },
            {
              "fullName": "Charlie Davis",
              "email": "charlie.davis@example.com",
              "phone": "+3344556677",
              "role": "Admin",
              "date": "2024-12-05",
              "status": "Inactive",
              "action": "Reactivate"
            }
            ,
            {
              "fullName": "John Doe",
              "email": "johndoe@example.com",
              "phone": "+1234567890",
              "role": "Admin",
              "date": "2024-12-24",
              "status": "Active",
              "action": "Edit"
            },
            {
              "fullName": "Jane Smith",
              "email": "janesmith@example.com",
              "phone": "+0987654321",
              "role": "User",
              "date": "2024-12-20",
              "status": "Inactive",
              "action": "Delete"
            },
            {
              "fullName": "Alice Johnson",
              "email": "alice.johnson@example.com",
              "phone": "+1122334455",
              "role": "Editor",
              "date": "2024-12-15",
              "status": "Pending",
              "action": "Approve"
            },
            {
              "fullName": "Bob Brown",
              "email": "bob.brown@example.com",
              "phone": "+2233445566",
              "role": "Viewer",
              "date": "2024-12-10",
              "status": "Active",
              "action": "Suspend"
            },
            {
              "fullName": "Charlie Davis",
              "email": "charlie.davis@example.com",
              "phone": "+3344556677",
              "role": "Admin",
              "date": "2024-12-05",
              "status": "Inactive",
              "action": "Reactivate"
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

    createAccount():void {
        this.ref = this.dialogService.open(CreateAccountComponent, {
            header: 'Create Account',
            width: '25%',
            contentStyle: {"overflow": "auto"},
            baseZIndex: 10000,
            maximizable: false
        })

        this.ref.onClose.subscribe((res: any) => {
            if (res) {

            }
        })
    }


}
