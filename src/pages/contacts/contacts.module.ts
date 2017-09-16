import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contacts } from './contacts';
import { InternalAddressModule } from './internal-address/internal-address.module';
import { ExternalAddressModule } from './external-address/external-address.module';
import { BusinessAddressModule } from './business-address/business-address.module';

@NgModule({
  declarations: [
    Contacts,
  ],
  imports: [
    IonicPageModule.forChild(Contacts),
    InternalAddressModule,
    ExternalAddressModule,
    BusinessAddressModule
  ],
  exports: [
    Contacts
  ]
})
export class ContactsModule {}