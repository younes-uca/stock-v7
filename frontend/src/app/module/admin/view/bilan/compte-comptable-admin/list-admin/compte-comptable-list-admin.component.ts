import {Component, OnInit} from '@angular/core';
import {CompteComptableService} from 'src/app/controller/service/CompteComptable.service';
import {CompteComptableDto} from 'src/app/controller/model/CompteComptable.model';
import {CompteComptableCriteria} from 'src/app/controller/criteria/CompteComptableCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { SousClassComptableService } from 'src/app/controller/service/SousClassComptable.service';

import {SousClassComptableDto} from 'src/app/controller/model/SousClassComptable.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-compte-comptable-list-admin',
  templateUrl: './compte-comptable-list-admin.component.html'
})
export class CompteComptableListAdminComponent extends AbstractListController<CompteComptableDto, CompteComptableCriteria, CompteComptableService>  implements OnInit {

    fileName = 'CompteComptable';

    sousClassComptables :Array<SousClassComptableDto>;
  
    constructor(datePipe: DatePipe, compteComptableService: CompteComptableService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private sousClassComptableService: SousClassComptableService) {
        super(datePipe, compteComptableService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadSousClassComptable();
    }

    public async loadCompteComptables(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('CompteComptable', 'list');
        isPermistted ? this.service.findAll().subscribe(compteComptables => this.items = compteComptables,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'code', header: 'Code'},
            {field: 'sousClassComptable?.libelle', header: 'Sous class comptable'},
        ];
    }


    public async loadSousClassComptable(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('CompteComptable', 'list');
        isPermistted ? this.sousClassComptableService.findAll().subscribe(sousClassComptables => this.sousClassComptables = sousClassComptables,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: CompteComptableDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                 'Code': e.code ,
                'Sous class comptable': e.sousClassComptable?.libelle ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
        //'Sous class comptable': this.criteria.sousClassComptable?.libelle ? this.criteria.sousClassComptable?.libelle : environment.emptyForExport ,
        }];
      }
}
