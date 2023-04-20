import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';

import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { RoleService } from 'src/app/zynerator/security/Role.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
  animations: [
    trigger('inline', [
      state(
        'hidden',
        style({
          height: '0px',
          overflow: 'hidden',
        })
      ),
      state(
        'visible',
        style({
          height: '*',
        })
      ),
      state(
        'hiddenAnimated',
        style({
          height: '0px',
          overflow: 'hidden',
        })
      ),
      state(
        'visibleAnimated',
        style({
          height: '*',
        })
      ),
      transition(
        'visibleAnimated => hiddenAnimated',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
      transition(
        'hiddenAnimated => visibleAnimated',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
    ]),
  ],
})
export class AppMenuComponent implements OnInit {
  model: any[];
  modelsuperadmin:any[];
  modelanonymous: any[];
    modeladmin : any[];
  constructor(public app: AppComponent,
   public appMain: AppMainComponent,
   private roleService: RoleService,
   private authService:AuthService,
  private router: Router) {}

  ngOnInit() {


    this.modeladmin =
      [
              {
                label: 'Gestion Collaborateur',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste fournisseur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/collaborateur/fournisseur/list']
                    },
                    {
                      label: 'Liste client',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/collaborateur/client/list']
                    },
                ]
              },
              {
                label: 'Gestion Vente',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste comptable traitant',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/is/comptable-traitant/list']
                    },
                    {
                      label: 'Liste comptable validateur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/is/comptable-validateur/list']
                    },
                    {
                      label: 'Liste devis fournisseur',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/devis/devis-fournisseur/list']
                    },
                    {
                      label: 'Liste taux retard tva',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/tva/taux-retard-tva/list']
                    },
                    {
                      label: 'Liste declaration tva',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/tva/declaration-tva/list']
                    },
                    {
                      label: 'Liste paiement vente',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/vente/paiement-vente/list']
                    },
                    {
                      label: 'Liste avoir vente',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/vente/avoir-vente/list']
                    },
                    {
                      label: 'Liste taux is',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/is/taux-is/list']
                    },
                    {
                      label: 'Liste declaration is',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/is/declaration-is/list']
                    },
                    {
                      label: 'Liste vente',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/vente/vente/list']
                    },
                ]
              },
              {
                label: 'Referentiel Bilan',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste class comptable',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/bilan/class-comptable/list']
                    },
                    {
                      label: 'Liste sous class comptable',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/bilan/sous-class-comptable/list']
                    },
                    {
                      label: 'Liste compte comptable',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/bilan/compte-comptable/list']
                    },
                ]
              },
              {
                label: 'Configuration',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste etat paiement',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/referentiel/etat-paiement/list']
                    },
                    {
                      label: 'Liste marque',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/referentiel/marque/list']
                    },
                    {
                      label: 'Liste unite mesure',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/referentiel/unite-mesure/list']
                    },
                    {
                      label: 'Liste mode paiement',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/referentiel/mode-paiement/list']
                    },
                ]
              },
              {
                label: 'Gestion Demande',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste livraison',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/demande/livraison/list']
                    },
                    {
                      label: 'Liste paiement demande',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/demande/paiement-demande/list']
                    },
                    {
                      label: 'Liste etat livraison',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/demande/etat-livraison/list']
                    },
                    {
                      label: 'Liste etat demande',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/demande/etat-demande/list']
                    },
                    {
                      label: 'Liste paiement livraison',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/demande/paiement-livraison/list']
                    },
                    {
                      label: 'Liste demande',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/demande/demande/list']
                    },
                ]
              },
              {
                label: 'Gestion Abonne',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste societe',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/abonne/societe/list']
                    },
                    {
                      label: 'Liste abonne',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/abonne/abonne/list']
                    },
                    {
                      label: 'Liste store',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/abonne/store/list']
                    },
                    {
                      label: 'Liste magasin',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/abonne/magasin/list']
                    },
                ]
              },
              {
                label: 'Gestion Commande',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste reception',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/commande/reception/list']
                    },
                    {
                      label: 'Liste etat commande',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/commande/etat-commande/list']
                    },
                    {
                      label: 'Liste etat reception',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/commande/etat-reception/list']
                    },
                    {
                      label: 'Liste commande',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/commande/commande/list']
                    },
                    {
                      label: 'Liste paiement commande',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/commande/paiement-commande/list']
                    },
                ]
              },
              {
                label: 'Gestion Bilan',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste bilan',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/bilan/bilan/list']
                    },
                    {
                      label: 'Liste operation comptable',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/bilan/operation-comptable/list']
                    },
                ]
              },
              {
                label: 'Gestion Produit',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste stock produit',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/referentiel/stock-produit/list']
                    },
                    {
                      label: 'Liste categorie produit',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/referentiel/categorie-produit/list']
                    },
                    {
                      label: 'Liste produit',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/referentiel/produit/list']
                    },
                ]
              },
              {
                label: 'Gestion Cheque',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste banque',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/cheque/banque/list']
                    },
                    {
                      label: 'Liste proprietaire cheque banque',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/cheque/proprietaire-cheque-banque/list']
                    },
                    {
                      label: 'Liste proprietaire cheque',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/cheque/proprietaire-cheque/list']
                    },
                ]
              },
              {
                label: 'Gestion Achat',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste achat',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/achat/achat/list']
                    },
                    {
                      label: 'Liste paiement achat',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/achat/paiement-achat/list']
                    },
                    {
                      label: 'Liste avoir achat',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/achat/avoir-achat/list']
                    },
                ]
              },
    ]
        if (this.authService.authenticated) {
      if (this.authService.authenticatedUser.roles) {

        this.authService.authenticatedUser.roles.forEach(role => {
          const roleName: string = this.getRole(role);
          this.roleService._role.next(roleName.toUpperCase());
          eval('this.model = this.model' + this.getRole(role));
        })
      }

    }
  }
  getRole(text){
  const [role, ...rest] = text.split('_');
  return rest.join('').toLowerCase();
}
  onMenuClick(event) {
    this.appMain.onMenuClick(event);
  }
}
