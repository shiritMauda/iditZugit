import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from 'src/contents/payment/payment.component';
import { CareLogComponent } from 'src/contents/care-log/care-log.component';
import { ClientComponent } from 'src/contents/client/client.component';


const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
