import {Component, OnInit} from '@angular/core';
import {DevisFournisseurService} from 'src/app/controller/service/DevisFournisseur.service';
import {DevisFournisseurDto} from 'src/app/controller/model/DevisFournisseur.model';
import {DevisFournisseurCriteria} from 'src/app/controller/criteria/DevisFournisseurCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { FournisseurService } from 'src/app/controller/service/Fournisseur.service';

import {DevisItemFournisseurDto} from 'src/app/controller/model/DevisItemFournisseur.model';
import {FournisseurDto} from 'src/app/controller/model/Fournisseur.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-devis-fournisseur-list-admin',
  templateUrl: './devis-fournisseur-list-admin.component.html'
})
export class DevisFournisseurListAdminComponent extends AbstractListController<DevisFournisseurDto, DevisFournisseurCriteria, DevisFournisseurService>  implements OnInit {

    fileName = 'DevisFournisseur';

    fournisseurs :Array<FournisseurDto>;
  
    constructor(datePipe: DatePipe, devisFournisseurService: DevisFournisseurService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private fournisseurService: FournisseurService) {
        super(datePipe, devisFournisseurService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadFournisseur();
    }

    public async loadDevisFournisseurs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('DevisFournisseur', 'list');
        isPermistted ? this.service.findAll().subscribe(devisFournisseurs => this.items = devisFournisseurs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'reference', header: 'Reference'},
            {field: 'dateDevis', header: 'Date devis'},
            {field: 'total', header: 'Total'},
            {field: 'fournisseur?.nom', header: 'Fournisseur'},
        ];
    }


    public async loadFournisseur(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('DevisFournisseur', 'list');
        isPermistted ? this.fournisseurService.findAll().subscribe(fournisseurs => this.fournisseurs = fournisseurs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: DevisFournisseurDto) {
        if (res.devisItemFournisseurs != null) {
             res.devisItemFournisseurs.forEach(d => { d.devisFournisseur = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Reference': e.reference ,
                 'Date devis': e.dateDevis ,
                 'Total': e.total ,
                 'Description': e.description ,
                'Fournisseur': e.fournisseur?.nom ,
            }
        });

        this.criteriaData = [{
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
            'Date devis': this.criteria.dateDevis ? this.criteria.dateDevis : environment.emptyForExport ,
            'Total Min': this.criteria.totalMin ? this.criteria.totalMin : environment.emptyForExport ,
            'Total Max': this.criteria.totalMax ? this.criteria.totalMax : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
        //'Fournisseur': this.criteria.fournisseur?.nom ? this.criteria.fournisseur?.nom : environment.emptyForExport ,
        }];
      }
}
