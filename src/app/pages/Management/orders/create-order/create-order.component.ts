import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrl: './create-order.component.scss'
})
export class CreateOrderComponent implements OnInit {
    formData: FormGroup;
    isLoading: boolean = false;
    eventType: any[] = [];
    template: any[] = [];
    status: any[] = [];
    paymentMethod: any[] = [];
    package: any
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
            groomName: [null, Validators.required], // اسم العريس
            brideName: [null, Validators.required], // اسم العروسة
            eventType: [null, Validators.required], // نوع المناسبة
            template: [null, Validators.required], // القالب
            hallName: [null, Validators.required], // اسم قاعة الفرح
            location: [null, Validators.required], // الوكيشن
            eventDate: [null, Validators.required], // موعد المناسبة
            eventTime: [null, Validators.required], // وقت المناسبة
            description: [null, Validators.required], // وصف المناسبة
            price: [null, Validators.required], // السعر
            status: [null, Validators.required], // الحالة
            paymentMethod: [null, Validators.required], // طريقة الدفع
            package: [null, Validators.required], // الباقة
            address: [null, Validators.required], // العنوان

          });

    }



    formSubmit(form: FormGroup): void {


    }


}
