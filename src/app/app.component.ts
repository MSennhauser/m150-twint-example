import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Observable, pipe, Subscriber, take } from 'rxjs';

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
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private REFNO = 'Twint-example';

  currencyCtrl = new FormControl('CHF');
  amountCtrl = new FormControl('100');

  constructor(private httpClient: HttpClient){

  }

  ngOnInit(): void {
  }

  onPay(): void {
    const settings: TransactionSettings = { 
      currency: 'CHF',
      refno: this.REFNO,
      amount: this.amountCtrl.value as number,
      paymentMethods: ['TWI'], // TWI = Twint
     };

    this.httpClient.post<TransactionLocation>('http://localhost:8080/transaction', settings)
    .pipe(take(1)).subscribe((datatrans) => {
      // redirect to datatrans location in same tab
      window.open(datatrans.location, "_self");
    });
  }
}
