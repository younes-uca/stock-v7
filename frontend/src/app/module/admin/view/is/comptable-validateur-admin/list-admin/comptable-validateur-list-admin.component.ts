import {Component, OnInit} from '@angular/core';
import {ComptableValidateurService} from 'src/app/controller/service/ComptableValidateur.service';
import {ComptableValidateurDto} from 'src/app/controller/model/ComptableValidateur.model';
import {ComptableValidateurCriteria} from 'src/app/controller/criteria/ComptableValidateurCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';



import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-comptable-validateur-list-admin',
  templateUrl: './comptable-validateur-list-admin.component.html'
})
export class ComptableValidateurListAdminComponent extends AbstractListController<ComptableValidateurDto, ComptableValidateurCriteria, ComptableValidateurService>  implements OnInit {

    fileName = 'ComptableValidateur';

  
    constructor(datePipe: DatePipe, comptableValidateurService: ComptableValidateurService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
) {
        super(datePipe, comptableValidateurService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadComptableValidateurs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ComptableValidateur', 'list');
        isPermistted ? this.service.findAll().subscribe(comptableValidateurs => this.items = comptableValidateurs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'nom', header: 'Nom'},
            {field: 'prenom', header: 'Prenom'},
        ];
    }



	public initDuplicate(res: ComptableValidateurDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Nom': e.nom ,
                 'Prenom': e.prenom ,
            }
        });

        this.criteriaData = [{
            'Nom': this.criteria.nom ? this.criteria.nom : environment.emptyForExport ,
            'Prenom': this.criteria.prenom ? this.criteria.prenom : environment.emptyForExport ,
        }];
      }
}
