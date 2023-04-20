import {Component, OnInit} from '@angular/core';
import {StoreService} from 'src/app/controller/service/Store.service';
import {StoreDto} from 'src/app/controller/model/Store.model';
import {StoreCriteria} from 'src/app/controller/criteria/StoreCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { SocieteService } from 'src/app/controller/service/Societe.service';

import {SocieteDto} from 'src/app/controller/model/Societe.model';
import {MagasinDto} from 'src/app/controller/model/Magasin.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-store-list-admin',
  templateUrl: './store-list-admin.component.html'
})
export class StoreListAdminComponent extends AbstractListController<StoreDto, StoreCriteria, StoreService>  implements OnInit {

    fileName = 'Store';

    societes :Array<SocieteDto>;
  
    constructor(datePipe: DatePipe, storeService: StoreService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private societeService: SocieteService) {
        super(datePipe, storeService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadSociete();
    }

    public async loadStores(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Store', 'list');
        isPermistted ? this.service.findAll().subscribe(stores => this.items = stores,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'reference', header: 'Reference'},
            {field: 'societe?.ice', header: 'Societe'},
        ];
    }


    public async loadSociete(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Store', 'list');
        isPermistted ? this.societeService.findAll().subscribe(societes => this.societes = societes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: StoreDto) {
        if (res.magasins != null) {
             res.magasins.forEach(d => { d.store = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                 'Reference': e.reference ,
                'Societe': e.societe?.ice ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
        //'Societe': this.criteria.societe?.ice ? this.criteria.societe?.ice : environment.emptyForExport ,
        }];
      }
}
