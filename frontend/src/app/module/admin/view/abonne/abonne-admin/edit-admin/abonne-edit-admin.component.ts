import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {AbonneService} from 'src/app/controller/service/Abonne.service';
import {AbonneDto} from 'src/app/controller/model/Abonne.model';
import {AbonneCriteria} from 'src/app/controller/criteria/AbonneCriteria.model';


import {SocieteDto} from 'src/app/controller/model/Societe.model';
import {SocieteService} from 'src/app/controller/service/Societe.service';
import {StoreDto} from 'src/app/controller/model/Store.model';
import {StoreService} from 'src/app/controller/service/Store.service';

@Component({
  selector: 'app-abonne-edit-admin',
  templateUrl: './abonne-edit-admin.component.html'
})
export class AbonneEditAdminComponent extends AbstractEditController<AbonneDto, AbonneCriteria, AbonneService>   implements OnInit {

    private _societesElement = new SocieteDto();

    private _validAbonneCode = true;

    private _validSocietesIce = true;



    constructor(private datePipe: DatePipe, private abonneService: AbonneService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  
, private societeService: SocieteService
    ) {
        super(datePipe, abonneService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {

}

    public validateSocietes(){
        this.errorMessages = new Array();
        this.validateSocietesIce();
    }
    public setValidation(value : boolean){
        this.validAbonneCode = value;
        this.validSocietesIce = value;
        }
   public addSocietes() {
        if( this.item.societes == null )
            this.item.societes = new Array<SocieteDto>();
       this.validateSocietes();
       if (this.errorMessages.length === 0) {
            if(this.societesElement.id == null){
                this.item.societes.push(this.societesElement);
            }else{
                const index = this.item.societes.findIndex(e => e.id == this.societesElement.id);
                this.item.societes[index] = this.societesElement;
            }
          this.societesElement = new SocieteDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deleteSociete(p: SocieteDto) {
        this.item.societes.forEach((element, index) => {
            if (element === p) { this.item.societes.splice(index, 1); }
        });
    }

    public editSociete(p: SocieteDto) {
        this.societesElement = {... p};
        this.activeTab = 0;
    }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateAbonneCode();
    }
    public validateAbonneCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validAbonneCode = false;
        } else {
            this.validAbonneCode = true;
        }
    }


    private validateSocietesIce(){
        if (this.societesElement.ice == null) {
        this.errorMessages.push('Ice de la societe est  invalide');
            this.validSocietesIce = false;
        } else {
            this.validSocietesIce = true;
        }
    }



    get societesElement(): SocieteDto {
        if( this._societesElement == null )
            this._societesElement = new SocieteDto();
         return this._societesElement;
    }

    set societesElement(value: SocieteDto) {
        this._societesElement = value;
    }

    get validAbonneCode(): boolean {
        return this._validAbonneCode;
    }
    set validAbonneCode(value: boolean) {
        this._validAbonneCode = value;
    }

    get validSocietesIce(): boolean {
        return this._validSocietesIce;
    }
    set validSocietesIce(value: boolean) {
        this._validSocietesIce = value;
    }
}
