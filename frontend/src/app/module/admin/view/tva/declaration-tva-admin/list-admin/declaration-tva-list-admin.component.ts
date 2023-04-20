import {Component, OnInit} from '@angular/core';
import {DeclarationTvaService} from 'src/app/controller/service/DeclarationTva.service';
import {DeclarationTvaDto} from 'src/app/controller/model/DeclarationTva.model';
import {DeclarationTvaCriteria} from 'src/app/controller/criteria/DeclarationTvaCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { SocieteService } from 'src/app/controller/service/Societe.service';
import { TauxRetardTvaService } from 'src/app/controller/service/TauxRetardTva.service';
import { ComptableTraitantService } from 'src/app/controller/service/ComptableTraitant.service';
import { ComptableValidateurService } from 'src/app/controller/service/ComptableValidateur.service';

import {SocieteDto} from 'src/app/controller/model/Societe.model';
import {ComptableValidateurDto} from 'src/app/controller/model/ComptableValidateur.model';
import {ComptableTraitantDto} from 'src/app/controller/model/ComptableTraitant.model';
import {TauxRetardTvaDto} from 'src/app/controller/model/TauxRetardTva.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-declaration-tva-list-admin',
  templateUrl: './declaration-tva-list-admin.component.html'
})
export class DeclarationTvaListAdminComponent extends AbstractListController<DeclarationTvaDto, DeclarationTvaCriteria, DeclarationTvaService>  implements OnInit {

    fileName = 'DeclarationTva';

    societes :Array<SocieteDto>;
    tauxRetardTvas :Array<TauxRetardTvaDto>;
    comptableTraitants :Array<ComptableTraitantDto>;
    comptableValidateurs :Array<ComptableValidateurDto>;
  
    constructor(datePipe: DatePipe, declarationTvaService: DeclarationTvaService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private societeService: SocieteService, private tauxRetardTvaService: TauxRetardTvaService, private comptableTraitantService: ComptableTraitantService, private comptableValidateurService: ComptableValidateurService) {
        super(datePipe, declarationTvaService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadSociete();
      this.loadTauxRetardTva();
      this.loadComptableTraitant();
      this.loadComptableValidateur();
    }

    public async loadDeclarationTvas(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('DeclarationTva', 'list');
        isPermistted ? this.service.findAll().subscribe(declarationTvas => this.items = declarationTvas,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'dateDeclaration', header: 'Date declaration'},
            {field: 'trimistre', header: 'Trimistre'},
            {field: 'annee', header: 'Annee'},
            {field: 'societe?.ice', header: 'Societe'},
            {field: 'totalTvaCollecte', header: 'Total tva collecte'},
            {field: 'totalTvaDue', header: 'Total tva due'},
            {field: 'differenceTva', header: 'Difference tva'},
            {field: 'tauxRetardTva?.id', header: 'Taux retard tva'},
            {field: 'montantTva', header: 'Montant tva'},
            {field: 'comptableTraitant?.id', header: 'Comptable traitant'},
            {field: 'comptableValidateur?.id', header: 'Comptable validateur'},
        ];
    }


    public async loadSociete(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('DeclarationTva', 'list');
        isPermistted ? this.societeService.findAll().subscribe(societes => this.societes = societes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadTauxRetardTva(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('DeclarationTva', 'list');
        isPermistted ? this.tauxRetardTvaService.findAll().subscribe(tauxRetardTvas => this.tauxRetardTvas = tauxRetardTvas,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadComptableTraitant(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('DeclarationTva', 'list');
        isPermistted ? this.comptableTraitantService.findAll().subscribe(comptableTraitants => this.comptableTraitants = comptableTraitants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadComptableValidateur(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('DeclarationTva', 'list');
        isPermistted ? this.comptableValidateurService.findAll().subscribe(comptableValidateurs => this.comptableValidateurs = comptableValidateurs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: DeclarationTvaDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                'Date declaration': this.datePipe.transform(e.dateDeclaration , 'dd/MM/yyyy hh:mm'),
                 'Trimistre': e.trimistre ,
                 'Annee': e.annee ,
                'Societe': e.societe?.ice ,
                 'Total tva collecte': e.totalTvaCollecte ,
                 'Total tva due': e.totalTvaDue ,
                 'Difference tva': e.differenceTva ,
                'Taux retard tva': e.tauxRetardTva?.id ,
                 'Montant tva': e.montantTva ,
                'Comptable traitant': e.comptableTraitant?.id ,
                'Comptable validateur': e.comptableValidateur?.id ,
            }
        });

        this.criteriaData = [{
            'Date declaration Min': this.criteria.dateDeclarationFrom ? this.datePipe.transform(this.criteria.dateDeclarationFrom , this.dateFormat) : environment.emptyForExport ,
            'Date declaration Max': this.criteria.dateDeclarationTo ? this.datePipe.transform(this.criteria.dateDeclarationTo , this.dateFormat) : environment.emptyForExport ,
            'Trimistre Min': this.criteria.trimistreMin ? this.criteria.trimistreMin : environment.emptyForExport ,
            'Trimistre Max': this.criteria.trimistreMax ? this.criteria.trimistreMax : environment.emptyForExport ,
            'Annee Min': this.criteria.anneeMin ? this.criteria.anneeMin : environment.emptyForExport ,
            'Annee Max': this.criteria.anneeMax ? this.criteria.anneeMax : environment.emptyForExport ,
        //'Societe': this.criteria.societe?.ice ? this.criteria.societe?.ice : environment.emptyForExport ,
            'Total tva collecte Min': this.criteria.totalTvaCollecteMin ? this.criteria.totalTvaCollecteMin : environment.emptyForExport ,
            'Total tva collecte Max': this.criteria.totalTvaCollecteMax ? this.criteria.totalTvaCollecteMax : environment.emptyForExport ,
            'Total tva due Min': this.criteria.totalTvaDueMin ? this.criteria.totalTvaDueMin : environment.emptyForExport ,
            'Total tva due Max': this.criteria.totalTvaDueMax ? this.criteria.totalTvaDueMax : environment.emptyForExport ,
            'Difference tva Min': this.criteria.differenceTvaMin ? this.criteria.differenceTvaMin : environment.emptyForExport ,
            'Difference tva Max': this.criteria.differenceTvaMax ? this.criteria.differenceTvaMax : environment.emptyForExport ,
        //'Taux retard tva': this.criteria.tauxRetardTva?.id ? this.criteria.tauxRetardTva?.id : environment.emptyForExport ,
            'Montant tva Min': this.criteria.montantTvaMin ? this.criteria.montantTvaMin : environment.emptyForExport ,
            'Montant tva Max': this.criteria.montantTvaMax ? this.criteria.montantTvaMax : environment.emptyForExport ,
        //'Comptable traitant': this.criteria.comptableTraitant?.id ? this.criteria.comptableTraitant?.id : environment.emptyForExport ,
        //'Comptable validateur': this.criteria.comptableValidateur?.id ? this.criteria.comptableValidateur?.id : environment.emptyForExport ,
        }];
      }
}
