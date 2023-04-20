import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import {TranslateModule} from '@ngx-translate/core';

import { ProprietaireChequeBanqueCreateAdminComponent } from './proprietaire-cheque-banque-admin/create-admin/proprietaire-cheque-banque-create-admin.component';
import { ProprietaireChequeBanqueEditAdminComponent } from './proprietaire-cheque-banque-admin/edit-admin/proprietaire-cheque-banque-edit-admin.component';
import { ProprietaireChequeBanqueViewAdminComponent } from './proprietaire-cheque-banque-admin/view-admin/proprietaire-cheque-banque-view-admin.component';
import { ProprietaireChequeBanqueListAdminComponent } from './proprietaire-cheque-banque-admin/list-admin/proprietaire-cheque-banque-list-admin.component';
import { ProprietaireChequeCreateAdminComponent } from './proprietaire-cheque-admin/create-admin/proprietaire-cheque-create-admin.component';
import { ProprietaireChequeEditAdminComponent } from './proprietaire-cheque-admin/edit-admin/proprietaire-cheque-edit-admin.component';
import { ProprietaireChequeViewAdminComponent } from './proprietaire-cheque-admin/view-admin/proprietaire-cheque-view-admin.component';
import { ProprietaireChequeListAdminComponent } from './proprietaire-cheque-admin/list-admin/proprietaire-cheque-list-admin.component';
import { DevisFournisseurCreateAdminComponent } from './devis-fournisseur-admin/create-admin/devis-fournisseur-create-admin.component';
import { DevisFournisseurEditAdminComponent } from './devis-fournisseur-admin/edit-admin/devis-fournisseur-edit-admin.component';
import { DevisFournisseurViewAdminComponent } from './devis-fournisseur-admin/view-admin/devis-fournisseur-view-admin.component';
import { DevisFournisseurListAdminComponent } from './devis-fournisseur-admin/list-admin/devis-fournisseur-list-admin.component';
import { TauxIsCreateAdminComponent } from './taux-is-admin/create-admin/taux-is-create-admin.component';
import { TauxIsEditAdminComponent } from './taux-is-admin/edit-admin/taux-is-edit-admin.component';
import { TauxIsViewAdminComponent } from './taux-is-admin/view-admin/taux-is-view-admin.component';
import { TauxIsListAdminComponent } from './taux-is-admin/list-admin/taux-is-list-admin.component';
import { StockProduitCreateAdminComponent } from './stock-produit-admin/create-admin/stock-produit-create-admin.component';
import { StockProduitEditAdminComponent } from './stock-produit-admin/edit-admin/stock-produit-edit-admin.component';
import { StockProduitViewAdminComponent } from './stock-produit-admin/view-admin/stock-produit-view-admin.component';
import { StockProduitListAdminComponent } from './stock-produit-admin/list-admin/stock-produit-list-admin.component';
import { BanqueCreateAdminComponent } from './banque-admin/create-admin/banque-create-admin.component';
import { BanqueEditAdminComponent } from './banque-admin/edit-admin/banque-edit-admin.component';
import { BanqueViewAdminComponent } from './banque-admin/view-admin/banque-view-admin.component';
import { BanqueListAdminComponent } from './banque-admin/list-admin/banque-list-admin.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {PaginatorModule} from 'primeng/paginator';



@NgModule({
  declarations: [

    ProprietaireChequeBanqueCreateAdminComponent,
    ProprietaireChequeBanqueListAdminComponent,
    ProprietaireChequeBanqueViewAdminComponent,
    ProprietaireChequeBanqueEditAdminComponent,
    ProprietaireChequeCreateAdminComponent,
    ProprietaireChequeListAdminComponent,
    ProprietaireChequeViewAdminComponent,
    ProprietaireChequeEditAdminComponent,
    DevisFournisseurCreateAdminComponent,
    DevisFournisseurListAdminComponent,
    DevisFournisseurViewAdminComponent,
    DevisFournisseurEditAdminComponent,
    TauxIsCreateAdminComponent,
    TauxIsListAdminComponent,
    TauxIsViewAdminComponent,
    TauxIsEditAdminComponent,
    StockProduitCreateAdminComponent,
    StockProduitListAdminComponent,
    StockProduitViewAdminComponent,
    StockProduitEditAdminComponent,
    BanqueCreateAdminComponent,
    BanqueListAdminComponent,
    BanqueViewAdminComponent,
    BanqueEditAdminComponent,
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    BadgeModule,
    MultiSelectModule,
    PaginatorModule,
    TranslateModule,
  ],
  exports: [
  ProprietaireChequeBanqueCreateAdminComponent,
  ProprietaireChequeBanqueListAdminComponent,
  ProprietaireChequeBanqueViewAdminComponent,
  ProprietaireChequeBanqueEditAdminComponent,
  ProprietaireChequeCreateAdminComponent,
  ProprietaireChequeListAdminComponent,
  ProprietaireChequeViewAdminComponent,
  ProprietaireChequeEditAdminComponent,
  DevisFournisseurCreateAdminComponent,
  DevisFournisseurListAdminComponent,
  DevisFournisseurViewAdminComponent,
  DevisFournisseurEditAdminComponent,
  TauxIsCreateAdminComponent,
  TauxIsListAdminComponent,
  TauxIsViewAdminComponent,
  TauxIsEditAdminComponent,
  StockProduitCreateAdminComponent,
  StockProduitListAdminComponent,
  StockProduitViewAdminComponent,
  StockProduitEditAdminComponent,
  BanqueCreateAdminComponent,
  BanqueListAdminComponent,
  BanqueViewAdminComponent,
  BanqueEditAdminComponent,
  ],
  entryComponents: [],
})
export class StockAdminModule { }