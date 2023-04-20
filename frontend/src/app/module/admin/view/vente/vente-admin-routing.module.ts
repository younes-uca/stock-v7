
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { PaiementVenteListAdminComponent } from './paiement-vente-admin/list-admin/paiement-vente-list-admin.component';
import { AvoirVenteListAdminComponent } from './avoir-vente-admin/list-admin/avoir-vente-list-admin.component';
import { VenteListAdminComponent } from './vente-admin/list-admin/vente-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'paiement-vente',
                            children: [
                                {
                                    path: 'list',
                                    component: PaiementVenteListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'avoir-vente',
                            children: [
                                {
                                    path: 'list',
                                    component: AvoirVenteListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'vente',
                            children: [
                                {
                                    path: 'list',
                                    component: VenteListAdminComponent ,
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
export class VenteAdminRoutingModule { }
