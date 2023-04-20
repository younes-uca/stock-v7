import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {DeclarationIsService} from 'src/app/controller/service/DeclarationIs.service';
import {DeclarationIsDto} from 'src/app/controller/model/DeclarationIs.model';
import {DeclarationIsCriteria} from 'src/app/controller/criteria/DeclarationIsCriteria.model';
import {SocieteDto} from 'src/app/controller/model/Societe.model';
import {SocieteService} from 'src/app/controller/service/Societe.service';
import {TauxIsDto} from 'src/app/controller/model/TauxIs.model';
import {TauxIsService} from 'src/app/controller/service/TauxIs.service';
import {ComptableValidateurDto} from 'src/app/controller/model/ComptableValidateur.model';
import {ComptableValidateurService} from 'src/app/controller/service/ComptableValidateur.service';
import {ComptableTraitantDto} from 'src/app/controller/model/ComptableTraitant.model';
import {ComptableTraitantService} from 'src/app/controller/service/ComptableTraitant.service';
@Component({
  selector: 'app-declaration-is-create-admin',
  templateUrl: './declaration-is-create-admin.component.html'
})
export class DeclarationIsCreateAdminComponent extends AbstractCreateController<DeclarationIsDto, DeclarationIsCriteria, DeclarationIsService>  implements OnInit {



    private _validSocieteIce = true;

    constructor(private datePipe: DatePipe, private declarationIsService: DeclarationIsService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  
, private societeService: SocieteService, private tauxIsService: TauxIsService, private comptableValidateurService: ComptableValidateurService, private comptableTraitantService: ComptableTraitantService
    ) {
        super(datePipe, declarationIsService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    this.societe = new SocieteDto();
    this.societeService.findAll().subscribe((data) => this.societes = data);
    this.tauxIs = new TauxIsDto();
    this.tauxIsService.findAll().subscribe((data) => this.tauxIss = data);
    this.comptableTraitant = new ComptableTraitantDto();
    this.comptableTraitantService.findAll().subscribe((data) => this.comptableTraitants = data);
    this.comptableValidateur = new ComptableValidateurDto();
    this.comptableValidateurService.findAll().subscribe((data) => this.comptableValidateurs = data);
}





    public setValidation(value: boolean){
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }



    public async openCreateComptableTraitant(comptableTraitant: string) {
    const isPermistted = await this.roleService.isPermitted('ComptableTraitant', 'add');
    if(isPermistted) {
         this.comptableTraitant = new ComptableTraitantDto();
         this.createComptableTraitantDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }
    public async openCreateComptableValidateur(comptableValidateur: string) {
    const isPermistted = await this.roleService.isPermitted('ComptableValidateur', 'add');
    if(isPermistted) {
         this.comptableValidateur = new ComptableValidateurDto();
         this.createComptableValidateurDialog = true;
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
    get tauxIs(): TauxIsDto {
        return this.tauxIsService.item;
    }
    set tauxIs(value: TauxIsDto) {
        this.tauxIsService.item = value;
    }
    get tauxIss(): Array<TauxIsDto> {
        return this.tauxIsService.items;
    }
    set tauxIss(value: Array<TauxIsDto>) {
        this.tauxIsService.items = value;
    }
    get createTauxIsDialog(): boolean {
       return this.tauxIsService.createDialog;
    }
    set createTauxIsDialog(value: boolean) {
        this.tauxIsService.createDialog= value;
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
