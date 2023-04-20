import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {SocieteService} from 'src/app/controller/service/Societe.service';
import {SocieteDto} from 'src/app/controller/model/Societe.model';
import {SocieteCriteria} from 'src/app/controller/criteria/SocieteCriteria.model';
import {AbonneDto} from 'src/app/controller/model/Abonne.model';
import {AbonneService} from 'src/app/controller/service/Abonne.service';
@Component({
  selector: 'app-societe-create-admin',
  templateUrl: './societe-create-admin.component.html'
})
export class SocieteCreateAdminComponent extends AbstractCreateController<SocieteDto, SocieteCriteria, SocieteService>  implements OnInit {



   private _validSocieteIce = true;
    private _validAbonneCode = true;

    constructor(private datePipe: DatePipe, private societeService: SocieteService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  
, private abonneService: AbonneService
    ) {
        super(datePipe, societeService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    this.abonne = new AbonneDto();
    this.abonneService.findAll().subscribe((data) => this.abonnes = data);
}





    public setValidation(value: boolean){
        this.validSocieteIce = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateSocieteIce();
    }

    public validateSocieteIce(){
        if (this.stringUtilService.isEmpty(this.item.ice)) {
        this.errorMessages.push('Ice non valide');
        this.validSocieteIce = false;
        } else {
            this.validSocieteIce = true;
        }
    }


    public async openCreateAbonne(abonne: string) {
    const isPermistted = await this.roleService.isPermitted('Abonne', 'add');
    if(isPermistted) {
         this.abonne = new AbonneDto();
         this.createAbonneDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get abonne(): AbonneDto {
        return this.abonneService.item;
    }
    set abonne(value: AbonneDto) {
        this.abonneService.item = value;
    }
    get abonnes(): Array<AbonneDto> {
        return this.abonneService.items;
    }
    set abonnes(value: Array<AbonneDto>) {
        this.abonneService.items = value;
    }
    get createAbonneDialog(): boolean {
       return this.abonneService.createDialog;
    }
    set createAbonneDialog(value: boolean) {
        this.abonneService.createDialog= value;
    }



    get validSocieteIce(): boolean {
        return this._validSocieteIce;
    }

    set validSocieteIce(value: boolean) {
         this._validSocieteIce = value;
    }

    get validAbonneCode(): boolean {
        return this._validAbonneCode;
    }
    set validAbonneCode(value: boolean) {
        this._validAbonneCode = value;
    }


}
