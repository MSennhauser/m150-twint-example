import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { take } from 'rxjs';

// Datatrans URL for payment
interface TransactionLocation {
  location: string;
}

// Settings for Datatrans payment
interface TransactionSettings {
  currency: string;
  refno: string;
  amount: number;
  paymentMethods: string[];
  redirect: {
    successUrl: string;
    cancelUrl: string;
    errorUrl: string;
  };
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  currencyCtrl = new FormControl({value: 'CHF', disabled: true});
  amountCtrl = new FormControl('100');
  refCtrl = new FormControl('Twint-Beispiel');

  constructor(private httpClient: HttpClient){

  }

  ngOnInit(): void {
  }

  onPay(): void {
    const settings: TransactionSettings = { 
      currency: 'CHF',
      refno: this.refCtrl.value,
      amount: this.amountCtrl.value as number,
      paymentMethods: ['TWI'], // TWI = Twint
      redirect: {
        successUrl: window.origin + '/success',
        cancelUrl :  window.origin + '/cancel',
        errorUrl:  window.origin + '/error'
      }
     };

    this.httpClient.post<TransactionLocation>('http://localhost:8080/transaction', settings)
    .pipe(take(1)).subscribe((datatrans) => {
      // redirect to datatrans location in same tab
      window.open(datatrans.location, "_self");
    });
  }
}
