import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { CreateExpenseComponent } from './create-expense/create-expense.component';
import { UpdateExpenseComponent } from './update-expense/update-expense.component';


@NgModule({
  declarations: [
    ExpenseListComponent,
    CreateExpenseComponent,
    UpdateExpenseComponent
  ],
  imports: [
    CommonModule,
    ExpensesRoutingModule
  ]
})
export class ExpensesModule { }
