import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
    selector: 'app-create-role',
    templateUrl: './create-role.component.html',
    styleUrl: './create-role.component.scss'
})
export class CreateRoleComponent implements OnInit {
    formData: FormGroup;
    isLoading: boolean = false;
    roles: any[] = [];
    constructor(
        private fb: FormBuilder,
        private messageService: MessageService,
        private dialogService: DialogService,
        private dialogConfig: DynamicDialogConfig,
        private dialogRef: DynamicDialogRef,
    ) { }

    ngOnInit(): void {
        this.initForm();
    }

    initForm(): void {
        this.formData = this.fb.group({
            name: [null, Validators.required],
            date: [new Date(), Validators.required],

        })
    }



    formSubmit(form: FormGroup): void {


    }


}
