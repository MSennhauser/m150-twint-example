import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private refno = 'Twint-example';
  private transactionURI = 'https://api.sandbox.datatrans.com/v1/transactions';
  private paymentURI = 'https://pay.sandbox.datatrans.com/v1/start/';

  disablePay = false;
  currencyCtrl = new FormControl('');
  amountCtrl = new FormControl('');

  constructor(private httpClient: HttpClient){

  }

  ngOnInit(): void {
  }

  onPay(): void {
    const body = {
      currency: 'CHF',
      refno: this.refno,
      amount: 100
    }

    this.httpClient.post<number>(this.transactionURI, body).subscribe(console.log);
  }
}
