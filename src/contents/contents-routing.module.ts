import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CareLogComponent } from './care-log/care-log.component';
import { PaymentComponent } from './payment/payment.component';
import { ClientComponent } from './client/client.component';
const routes: Routes = [
    { path: 'payment', component: PaymentComponent },
    { path: 'careLog', component: CareLogComponent },
    { path: 'careLog/:id', component: CareLogComponent },
    { path: 'client', component: ClientComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContentsRoutingModule {}