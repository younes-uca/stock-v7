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


import {StoreDto} from 'src/app/controller/model/Store.model';
import {StoreService} from 'src/app/controller/service/Store.service';
import {SocieteDto} from 'src/app/controller/model/Societe.model';
import {SocieteService} from 'src/app/controller/service/Societe.service';
import {MagasinDto} from 'src/app/controller/model/Magasin.model';
import {MagasinService} from 'src/app/controller/service/Magasin.service';

@Component({
  selector: 'app-abonne-edit-admin',
  templateUrl: './abonne-edit-admin.component.html'
})
export class AbonneEditAdminComponent extends AbstractEditController<AbonneDto, AbonneCriteria, AbonneService>   implements OnInit {

    private _storesElement = new StoreDto();
    private _societesElement = new SocieteDto();

    private _validAbonneCode = true;

    private _validStoresLibelle = true;
    private _validStoresReference = true;
    private _validSocietesIce = true;



    constructor(private datePipe: DatePipe, private abonneService: AbonneService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  
, private storeService: StoreService, private societeService: SocieteService
    ) {
        super(datePipe, abonneService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.storesElement.societe = new SocieteDto();
        this.societeService.findAll().subscribe((data) => this.societes = data);


}

    public validateStores(){
        this.errorMessages = new Array();
        this.validateStoresLibelle();
        this.validateStoresReference();
    }
    public validateSocietes(){
        this.errorMessages = new Array();
        this.validateSocietesIce();
    }
    public setValidation(value : boolean){
        this.validAbonneCode = value;
        this.validStoresLibelle = value;
        this.validStoresReference = value;
        this.validSocietesIce = value;
        }
   public addStores() {
        if( this.item.stores == null )
            this.item.stores = new Array<StoreDto>();
       this.validateStores();
       if (this.errorMessages.length === 0) {
            if(this.storesElement.id == null){
                this.item.stores.push(this.storesElement);
            }else{
                const index = this.item.stores.findIndex(e => e.id == this.storesElement.id);
                this.item.stores[index] = this.storesElement;
            }
          this.storesElement = new StoreDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deleteStore(p: StoreDto) {
        this.item.stores.forEach((element, index) => {
            if (element === p) { this.item.stores.splice(index, 1); }
        });
    }

    public editStore(p: StoreDto) {
        this.storesElement = {... p};
        this.activeTab = 0;
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


    private validateStoresLibelle(){
        if (this.storesElement.libelle == null) {
        this.errorMessages.push('Libelle de la store est  invalide');
            this.validStoresLibelle = false;
        } else {
            this.validStoresLibelle = true;
        }
    }
    private validateStoresReference(){
        if (this.storesElement.reference == null) {
        this.errorMessages.push('Reference de la store est  invalide');
            this.validStoresReference = false;
        } else {
            this.validStoresReference = true;
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

   public async openCreateSociete(societe: string) {
        const isPermistted = await this.roleService.isPermitted('Societe', 'edit');
        if(isPermistted) {
             this.societe = new SocieteDto();
             this.createSocieteDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get societe(): SocieteDto {
       return this.societeService.item;
   }
  set societe(value: SocieteDto) {
        this.societeService.item = value;
   }
   get societes(): Array<SocieteDto> {
        return this.societeService.items;
   }
   set societes(value: Array<SocieteDto>) {
        this.societeService.items = value;
   }
   get createSocieteDialog(): boolean {
       return this.societeService.createDialog;
   }
  set createSocieteDialog(value: boolean) {
       this.societeService.createDialog= value;
   }

    get storesElement(): StoreDto {
        if( this._storesElement == null )
            this._storesElement = new StoreDto();
         return this._storesElement;
    }

    set storesElement(value: StoreDto) {
        this._storesElement = value;
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

    get validStoresLibelle(): boolean {
        return this._validStoresLibelle;
    }
    set validStoresLibelle(value: boolean) {
        this._validStoresLibelle = value;
    }
    get validStoresReference(): boolean {
        return this._validStoresReference;
    }
    set validStoresReference(value: boolean) {
        this._validStoresReference = value;
    }
    get validSocietesIce(): boolean {
        return this._validSocietesIce;
    }
    set validSocietesIce(value: boolean) {
        this._validSocietesIce = value;
    }
}
