
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { ProprietaireChequeBanqueListAdminComponent } from './proprietaire-cheque-banque-admin/list-admin/proprietaire-cheque-banque-list-admin.component';
import { ProprietaireChequeListAdminComponent } from './proprietaire-cheque-admin/list-admin/proprietaire-cheque-list-admin.component';
import { DevisFournisseurListAdminComponent } from './devis-fournisseur-admin/list-admin/devis-fournisseur-list-admin.component';
import { TauxIsListAdminComponent } from './taux-is-admin/list-admin/taux-is-list-admin.component';
import { StockProduitListAdminComponent } from './stock-produit-admin/list-admin/stock-produit-list-admin.component';
import { BanqueListAdminComponent } from './banque-admin/list-admin/banque-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'proprietaire-cheque-banque',
                            children: [
                                {
                                    path: 'list',
                                    component: ProprietaireChequeBanqueListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'proprietaire-cheque',
                            children: [
                                {
                                    path: 'list',
                                    component: ProprietaireChequeListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'devis-fournisseur',
                            children: [
                                {
                                    path: 'list',
                                    component: DevisFournisseurListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'taux-is',
                            children: [
                                {
                                    path: 'list',
                                    component: TauxIsListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'stock-produit',
                            children: [
                                {
                                    path: 'list',
                                    component: StockProduitListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'banque',
                            children: [
                                {
                                    path: 'list',
                                    component: BanqueListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class StockAdminRoutingModule { }
