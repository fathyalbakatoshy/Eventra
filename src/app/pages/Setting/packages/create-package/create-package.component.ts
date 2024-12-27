import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-create-package',
  templateUrl: './create-package.component.html',
  styleUrl: './create-package.component.scss'
})
export class CreatePackageComponent implements OnInit {
    formData: FormGroup;
    isLoading: boolean = false;
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
