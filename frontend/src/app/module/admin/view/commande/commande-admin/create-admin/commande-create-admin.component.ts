import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {CommandeService} from 'src/app/controller/service/Commande.service';
import {CommandeDto} from 'src/app/controller/model/Commande.model';
import {CommandeCriteria} from 'src/app/controller/criteria/CommandeCriteria.model';
import {ReceptionDto} from 'src/app/controller/model/Reception.model';
import {ReceptionService} from 'src/app/controller/service/Reception.service';
import {StoreDto} from 'src/app/controller/model/Store.model';
import {StoreService} from 'src/app/controller/service/Store.service';
import {ReceptionItemDto} from 'src/app/controller/model/ReceptionItem.model';
import {ReceptionItemService} from 'src/app/controller/service/ReceptionItem.service';
import {ProduitDto} from 'src/app/controller/model/Produit.model';
import {ProduitService} from 'src/app/controller/service/Produit.service';
import {EtatReceptionDto} from 'src/app/controller/model/EtatReception.model';
import {EtatReceptionService} from 'src/app/controller/service/EtatReception.service';
import {EtatCommandeDto} from 'src/app/controller/model/EtatCommande.model';
import {EtatCommandeService} from 'src/app/controller/service/EtatCommande.service';
import {CommandeItemDto} from 'src/app/controller/model/CommandeItem.model';
import {CommandeItemService} from 'src/app/controller/service/CommandeItem.service';
import {ClientDto} from 'src/app/controller/model/Client.model';
import {ClientService} from 'src/app/controller/service/Client.service';
@Component({
  selector: 'app-commande-create-admin',
  templateUrl: './commande-create-admin.component.html'
})
export class CommandeCreateAdminComponent extends AbstractCreateController<CommandeDto, CommandeCriteria, CommandeService>  implements OnInit {

    private _receptionsElement = new ReceptionDto();
    private _commandeItemsElement = new CommandeItemDto();


   private _validCommandeReference = true;
    private _validClientCin = true;
    private _validClientNom = true;
    private _validStoreLibelle = true;
    private _validStoreReference = true;
    private _validEtatCommandeLibelle = true;
    private _validEtatCommandeCode = true;

    constructor(private datePipe: DatePipe, private commandeService: CommandeService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  
, private produitService: ProduitService, private etatReceptionService: EtatReceptionService, private receptionService: ReceptionService, private etatCommandeService: EtatCommandeService, private storeService: StoreService, private commandeItemService: CommandeItemService, private clientService: ClientService
    ) {
        super(datePipe, commandeService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.receptionsElement.etatReception = new EtatReceptionDto();
        this.etatReceptionService.findAll().subscribe((data) => this.etatReceptions = data);
        this.commandeItemsElement.produit = new ProduitDto();
        this.produitService.findAll().subscribe((data) => this.produits = data);
        this.commandeItemsElement.etatCommande = new EtatCommandeDto();
        this.etatCommandeService.findAll().subscribe((data) => this.etatCommandes = data);
    this.client = new ClientDto();
    this.clientService.findAll().subscribe((data) => this.clients = data);
    this.store = new StoreDto();
    this.storeService.findAll().subscribe((data) => this.stores = data);
    this.etatCommande = new EtatCommandeDto();
    this.etatCommandeService.findAll().subscribe((data) => this.etatCommandes = data);
}



    validateReceptions(){
        this.errorMessages = new Array();
    }
    validateCommandeItems(){
        this.errorMessages = new Array();
    }


    public setValidation(value: boolean){
        this.validCommandeReference = value;
    }

    public addReceptions() {
        if( this.item.receptions == null )
            this.item.receptions = new Array<ReceptionDto>();
       this.validateReceptions();
       if (this.errorMessages.length === 0) {
              this.item.receptions.push({... this.receptionsElement});
              this.receptionsElement = new ReceptionDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
       }
    }


    public deleteReception(p: ReceptionDto) {
        this.item.receptions.forEach((element, index) => {
            if (element === p) { this.item.receptions.splice(index, 1); }
        });
    }

    public editReception(p: ReceptionDto) {
        this.receptionsElement = {... p};
        this.activeTab = 0;
    }
    public addCommandeItems() {
        if( this.item.commandeItems == null )
            this.item.commandeItems = new Array<CommandeItemDto>();
       this.validateCommandeItems();
       if (this.errorMessages.length === 0) {
              this.item.commandeItems.push({... this.commandeItemsElement});
              this.commandeItemsElement = new CommandeItemDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
       }
    }


    public deleteCommandeItem(p: CommandeItemDto) {
        this.item.commandeItems.forEach((element, index) => {
            if (element === p) { this.item.commandeItems.splice(index, 1); }
        });
    }

    public editCommandeItem(p: CommandeItemDto) {
        this.commandeItemsElement = {... p};
        this.activeTab = 0;
    }


    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateCommandeReference();
    }

    public validateCommandeReference(){
        if (this.stringUtilService.isEmpty(this.item.reference)) {
        this.errorMessages.push('Reference non valide');
        this.validCommandeReference = false;
        } else {
            this.validCommandeReference = true;
        }
    }


    public async openCreateEtatCommande(etatCommande: string) {
    const isPermistted = await this.roleService.isPermitted('EtatCommande', 'add');
    if(isPermistted) {
         this.etatCommande = new EtatCommandeDto();
         this.createEtatCommandeDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateEtatReception(etatReception: string) {
    const isPermistted = await this.roleService.isPermitted('EtatReception', 'add');
    if(isPermistted) {
         this.etatReception = new EtatReceptionDto();
         this.createEtatReceptionDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get produit(): ProduitDto {
        return this.produitService.item;
    }
    set produit(value: ProduitDto) {
        this.produitService.item = value;
    }
    get produits(): Array<ProduitDto> {
        return this.produitService.items;
    }
    set produits(value: Array<ProduitDto>) {
        this.produitService.items = value;
    }
    get createProduitDialog(): boolean {
       return this.produitService.createDialog;
    }
    set createProduitDialog(value: boolean) {
        this.produitService.createDialog= value;
    }
    get client(): ClientDto {
        return this.clientService.item;
    }
    set client(value: ClientDto) {
        this.clientService.item = value;
    }
    get clients(): Array<ClientDto> {
        return this.clientService.items;
    }
    set clients(value: Array<ClientDto>) {
        this.clientService.items = value;
    }
    get createClientDialog(): boolean {
       return this.clientService.createDialog;
    }
    set createClientDialog(value: boolean) {
        this.clientService.createDialog= value;
    }
    get etatCommande(): EtatCommandeDto {
        return this.etatCommandeService.item;
    }
    set etatCommande(value: EtatCommandeDto) {
        this.etatCommandeService.item = value;
    }
    get etatCommandes(): Array<EtatCommandeDto> {
        return this.etatCommandeService.items;
    }
    set etatCommandes(value: Array<EtatCommandeDto>) {
        this.etatCommandeService.items = value;
    }
    get createEtatCommandeDialog(): boolean {
       return this.etatCommandeService.createDialog;
    }
    set createEtatCommandeDialog(value: boolean) {
        this.etatCommandeService.createDialog= value;
    }
    get etatReception(): EtatReceptionDto {
        return this.etatReceptionService.item;
    }
    set etatReception(value: EtatReceptionDto) {
        this.etatReceptionService.item = value;
    }
    get etatReceptions(): Array<EtatReceptionDto> {
        return this.etatReceptionService.items;
    }
    set etatReceptions(value: Array<EtatReceptionDto>) {
        this.etatReceptionService.items = value;
    }
    get createEtatReceptionDialog(): boolean {
       return this.etatReceptionService.createDialog;
    }
    set createEtatReceptionDialog(value: boolean) {
        this.etatReceptionService.createDialog= value;
    }
    get store(): StoreDto {
        return this.storeService.item;
    }
    set store(value: StoreDto) {
        this.storeService.item = value;
    }
    get stores(): Array<StoreDto> {
        return this.storeService.items;
    }
    set stores(value: Array<StoreDto>) {
        this.storeService.items = value;
    }
    get createStoreDialog(): boolean {
       return this.storeService.createDialog;
    }
    set createStoreDialog(value: boolean) {
        this.storeService.createDialog= value;
    }



    get validCommandeReference(): boolean {
        return this._validCommandeReference;
    }

    set validCommandeReference(value: boolean) {
         this._validCommandeReference = value;
    }

    get validClientCin(): boolean {
        return this._validClientCin;
    }
    set validClientCin(value: boolean) {
        this._validClientCin = value;
    }
    get validClientNom(): boolean {
        return this._validClientNom;
    }
    set validClientNom(value: boolean) {
        this._validClientNom = value;
    }
    get validStoreLibelle(): boolean {
        return this._validStoreLibelle;
    }
    set validStoreLibelle(value: boolean) {
        this._validStoreLibelle = value;
    }
    get validStoreReference(): boolean {
        return this._validStoreReference;
    }
    set validStoreReference(value: boolean) {
        this._validStoreReference = value;
    }
    get validEtatCommandeLibelle(): boolean {
        return this._validEtatCommandeLibelle;
    }
    set validEtatCommandeLibelle(value: boolean) {
        this._validEtatCommandeLibelle = value;
    }
    get validEtatCommandeCode(): boolean {
        return this._validEtatCommandeCode;
    }
    set validEtatCommandeCode(value: boolean) {
        this._validEtatCommandeCode = value;
    }

    get receptionsElement(): ReceptionDto {
        if( this._receptionsElement == null )
            this._receptionsElement = new ReceptionDto();
        return this._receptionsElement;
    }

    set receptionsElement(value: ReceptionDto) {
        this._receptionsElement = value;
    }
    get commandeItemsElement(): CommandeItemDto {
        if( this._commandeItemsElement == null )
            this._commandeItemsElement = new CommandeItemDto();
        return this._commandeItemsElement;
    }

    set commandeItemsElement(value: CommandeItemDto) {
        this._commandeItemsElement = value;
    }

}
