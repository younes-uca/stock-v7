import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {DeclarationTvaService} from 'src/app/controller/service/DeclarationTva.service';
import {DeclarationTvaDto} from 'src/app/controller/model/DeclarationTva.model';
import {DeclarationTvaCriteria} from 'src/app/controller/criteria/DeclarationTvaCriteria.model';


import {ComptableValidateurDto} from 'src/app/controller/model/ComptableValidateur.model';
import {ComptableValidateurService} from 'src/app/controller/service/ComptableValidateur.service';
import {TauxRetardTvaDto} from 'src/app/controller/model/TauxRetardTva.model';
import {TauxRetardTvaService} from 'src/app/controller/service/TauxRetardTva.service';
import {ComptableTraitantDto} from 'src/app/controller/model/ComptableTraitant.model';
import {ComptableTraitantService} from 'src/app/controller/service/ComptableTraitant.service';
import {SocieteDto} from 'src/app/controller/model/Societe.model';
import {SocieteService} from 'src/app/controller/service/Societe.service';

@Component({
  selector: 'app-declaration-tva-edit-admin',
  templateUrl: './declaration-tva-edit-admin.component.html'
})
export class DeclarationTvaEditAdminComponent extends AbstractEditController<DeclarationTvaDto, DeclarationTvaCriteria, DeclarationTvaService>   implements OnInit {



    private _validSocieteIce = true;



    constructor(private datePipe: DatePipe, private declarationTvaService: DeclarationTvaService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  
, private comptableValidateurService: ComptableValidateurService, private tauxRetardTvaService: TauxRetardTvaService, private comptableTraitantService: ComptableTraitantService, private societeService: SocieteService
    ) {
        super(datePipe, declarationTvaService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    this.societe = new SocieteDto();
    this.societeService.findAll().subscribe((data) => this.societes = data);
    this.tauxRetardTva = new TauxRetardTvaDto();
    this.tauxRetardTvaService.findAll().subscribe((data) => this.tauxRetardTvas = data);
    this.comptableTraitant = new ComptableTraitantDto();
    this.comptableTraitantService.findAll().subscribe((data) => this.comptableTraitants = data);
    this.comptableValidateur = new ComptableValidateurDto();
    this.comptableValidateurService.findAll().subscribe((data) => this.comptableValidateurs = data);
}

    public setValidation(value : boolean){
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }



   public async openCreateTauxRetardTva(tauxRetardTva: string) {
        const isPermistted = await this.roleService.isPermitted('TauxRetardTva', 'edit');
        if(isPermistted) {
             this.tauxRetardTva = new TauxRetardTvaDto();
             this.createTauxRetardTvaDialog = true;
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
   get tauxRetardTva(): TauxRetardTvaDto {
       return this.tauxRetardTvaService.item;
   }
  set tauxRetardTva(value: TauxRetardTvaDto) {
        this.tauxRetardTvaService.item = value;
   }
   get tauxRetardTvas(): Array<TauxRetardTvaDto> {
        return this.tauxRetardTvaService.items;
   }
   set tauxRetardTvas(value: Array<TauxRetardTvaDto>) {
        this.tauxRetardTvaService.items = value;
   }
   get createTauxRetardTvaDialog(): boolean {
       return this.tauxRetardTvaService.createDialog;
   }
  set createTauxRetardTvaDialog(value: boolean) {
       this.tauxRetardTvaService.createDialog= value;
   }
   get comptableTraitant(): ComptableTraitantDto {
       return this.comptableTraitantService.item;
   }
  set comptableTraitant(value: ComptableTraitantDto) {
        this.comptableTraitantService.item = value;
   }
   get comptableTraitants(): Array<ComptableTraitantDto> {
        return this.comptableTraitantService.items;
   }
   set comptableTraitants(value: Array<ComptableTraitantDto>) {
        this.comptableTraitantService.items = value;
   }
   get createComptableTraitantDialog(): boolean {
       return this.comptableTraitantService.createDialog;
   }
  set createComptableTraitantDialog(value: boolean) {
       this.comptableTraitantService.createDialog= value;
   }
   get comptableValidateur(): ComptableValidateurDto {
       return this.comptableValidateurService.item;
   }
  set comptableValidateur(value: ComptableValidateurDto) {
        this.comptableValidateurService.item = value;
   }
   get comptableValidateurs(): Array<ComptableValidateurDto> {
        return this.comptableValidateurService.items;
   }
   set comptableValidateurs(value: Array<ComptableValidateurDto>) {
        this.comptableValidateurService.items = value;
   }
   get createComptableValidateurDialog(): boolean {
       return this.comptableValidateurService.createDialog;
   }
  set createComptableValidateurDialog(value: boolean) {
       this.comptableValidateurService.createDialog= value;
   }



    get validSocieteIce(): boolean {
        return this._validSocieteIce;
    }
    set validSocieteIce(value: boolean) {
        this._validSocieteIce = value;
    }
}
