import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { BankCardComponent } from './components/bank-card/bank-card.component';
import { TransactionViewComponent } from './components/transaction-view/transaction-view.component';

import { ApiService } from './service/api.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent, BankCardComponent, TransactionViewComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  providers: [ApiService],
})
export class HomeModule {}
