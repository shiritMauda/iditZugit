import { NgModule } from '@angular/core';

import { CareLogComponent } from './care-log/care-log.component';
import { PaymentComponent } from './payment/payment.component';
import { ClientComponent } from './client/client.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';

@NgModule({

  declarations: [CareLogComponent, PaymentComponent, ClientComponent, SearchComponent],
  imports: [
  CommonModule,
  FormsModule,],
  providers: []
})
export class ContentsModule { }