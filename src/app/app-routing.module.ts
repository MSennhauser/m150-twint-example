import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CancelComponent } from './cancel/cancel.component';
import { ErrorComponent } from './error/error.component';
import { PaymentComponent } from './payment/payment.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'payment'
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'cancel',
    component: CancelComponent
  },
  {
    path: 'success',
    component: SuccessComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
