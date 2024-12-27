import { Component, OnInit } from '@angular/core';
import { CreateTemplateComponent } from '../create-template/create-template.component';
import { MenuItem, MessageService, ConfirmationService } from 'primeng/api';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrl: './template-list.component.scss'
})
export class TemplateListComponent implements OnInit {
    templateList: any[];
    menuItems: MenuItem;
    ref: DynamicDialogRef;
    constructor(
        private dialogService: DialogService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
    ) { }

    ngOnInit(): void {
        this.getTemplates();
        this.initMenu();
    }

    getTemplates(): void {
        this.templateList = [
            {
                "name": "Template 1",
                "date": "2024-12-24",
                "eventType": "Wedding",
                "status": true,
            },
            {
                "name": "Template 2",
                "date": "2024-12-20",
                "eventType": "Wedding",
                "status": false,
            },
            {
                "name": "Template 3",
                "date": "2024-12-15",
                "eventType": "Wedding",
                "status": true,
            },
            {
                "name": "Template 4",
                "date": "2024-12-10",
                "eventType": "Wedding",
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

    createTemplate(): void {
        this.ref = this.dialogService.open(CreateTemplateComponent, {
            header: 'Create Template',
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
