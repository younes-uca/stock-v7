import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {AvoirAchatService} from 'src/app/controller/service/AvoirAchat.service';
import {AvoirAchatDto} from 'src/app/controller/model/AvoirAchat.model';
import {AvoirAchatCriteria} from 'src/app/controller/criteria/AvoirAchatCriteria.model';
import {ProduitDto} from 'src/app/controller/model/Produit.model';
import {ProduitService} from 'src/app/controller/service/Produit.service';
import {AchatDto} from 'src/app/controller/model/Achat.model';
import {AchatService} from 'src/app/controller/service/Achat.service';
import {AvoirAchatItemDto} from 'src/app/controller/model/AvoirAchatItem.model';
import {AvoirAchatItemService} from 'src/app/controller/service/AvoirAchatItem.service';
@Component({
  selector: 'app-avoir-achat-create-admin',
  templateUrl: './avoir-achat-create-admin.component.html'
})
export class AvoirAchatCreateAdminComponent extends AbstractCreateController<AvoirAchatDto, AvoirAchatCriteria, AvoirAchatService>  implements OnInit {

    private _avoirAchatItemsElement = new AvoirAchatItemDto();


    private _validAchatReference = true;

    constructor(private datePipe: DatePipe, private avoirAchatService: AvoirAchatService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  
, private produitService: ProduitService, private achatService: AchatService, private avoirAchatItemService: AvoirAchatItemService
    ) {
        super(datePipe, avoirAchatService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.avoirAchatItemsElement.produit = new ProduitDto();
        this.produitService.findAll().subscribe((data) => this.produits = data);
    this.achat = new AchatDto();
    this.achatService.findAll().subscribe((data) => this.achats = data);
}



    validateAvoirAchatItems(){
        this.errorMessages = new Array();
    }


    public setValidation(value: boolean){
    }

    public addAvoirAchatItems() {
        if( this.item.avoirAchatItems == null )
            this.item.avoirAchatItems = new Array<AvoirAchatItemDto>();
       this.validateAvoirAchatItems();
       if (this.errorMessages.length === 0) {
              this.item.avoirAchatItems.push({... this.avoirAchatItemsElement});
              this.avoirAchatItemsElement = new AvoirAchatItemDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
       }
    }


    public deleteAvoirAchatItem(p: AvoirAchatItemDto) {
        this.item.avoirAchatItems.forEach((element, index) => {
            if (element === p) { this.item.avoirAchatItems.splice(index, 1); }
        });
    }

    public editAvoirAchatItem(p: AvoirAchatItemDto) {
        this.avoirAchatItemsElement = {... p};
        this.activeTab = 0;
    }


    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }



    public async openCreateAchat(achat: string) {
    const isPermistted = await this.roleService.isPermitted('Achat', 'add');
    if(isPermistted) {
         this.achat = new AchatDto();
         this.createAchatDialog = true;
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
    get achat(): AchatDto {
        return this.achatService.item;
    }
    set achat(value: AchatDto) {
        this.achatService.item = value;
    }
    get achats(): Array<AchatDto> {
        return this.achatService.items;
    }
    set achats(value: Array<AchatDto>) {
        this.achatService.items = value;
    }
    get createAchatDialog(): boolean {
       return this.achatService.createDialog;
    }
    set createAchatDialog(value: boolean) {
        this.achatService.createDialog= value;
    }




    get validAchatReference(): boolean {
        return this._validAchatReference;
    }
    set validAchatReference(value: boolean) {
        this._validAchatReference = value;
    }

    get avoirAchatItemsElement(): AvoirAchatItemDto {
        if( this._avoirAchatItemsElement == null )
            this._avoirAchatItemsElement = new AvoirAchatItemDto();
        return this._avoirAchatItemsElement;
    }

    set avoirAchatItemsElement(value: AvoirAchatItemDto) {
        this._avoirAchatItemsElement = value;
    }

}
