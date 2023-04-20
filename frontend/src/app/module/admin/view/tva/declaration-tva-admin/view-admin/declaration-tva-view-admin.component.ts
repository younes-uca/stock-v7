import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DeclarationTvaService} from 'src/app/controller/service/DeclarationTva.service';
import {DeclarationTvaDto} from 'src/app/controller/model/DeclarationTva.model';
import {DeclarationTvaCriteria} from 'src/app/controller/criteria/DeclarationTvaCriteria.model';

import {ComptableValidateurDto} from 'src/app/controller/model/ComptableValidateur.model';
import {ComptableValidateurService} from 'src/app/controller/service/ComptableValidateur.service';
import {SocieteDto} from 'src/app/controller/model/Societe.model';
import {SocieteService} from 'src/app/controller/service/Societe.service';
import {TauxRetardTvaDto} from 'src/app/controller/model/TauxRetardTva.model';
import {TauxRetardTvaService} from 'src/app/controller/service/TauxRetardTva.service';
import {ComptableTraitantDto} from 'src/app/controller/model/ComptableTraitant.model';
import {ComptableTraitantService} from 'src/app/controller/service/ComptableTraitant.service';
@Component({
  selector: 'app-declaration-tva-view-admin',
  templateUrl: './declaration-tva-view-admin.component.html'
})
export class DeclarationTvaViewAdminComponent extends AbstractViewController<DeclarationTvaDto, DeclarationTvaCriteria, DeclarationTvaService> implements OnInit {


    constructor(private datePipe: DatePipe, private declarationTvaService: DeclarationTvaService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private comptableValidateurService: ComptableValidateurService, private societeService: SocieteService, private tauxRetardTvaService: TauxRetardTvaService, private comptableTraitantService: ComptableTraitantService
    ){
        super(datePipe, declarationTvaService, messageService, roleService, router, stringUtilService);
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


    get societe(): SocieteDto {
       return this.societeService.item;
    }
    set societe(value: SocieteDto) {
        this.societeService.item = value;
    }
    get societes():Array<SocieteDto> {
       return this.societeService.items;
    }
    set societes(value: Array<SocieteDto>) {
        this.societeService.items = value;
    }
    get tauxRetardTva(): TauxRetardTvaDto {
       return this.tauxRetardTvaService.item;
    }
    set tauxRetardTva(value: TauxRetardTvaDto) {
        this.tauxRetardTvaService.item = value;
    }
    get tauxRetardTvas():Array<TauxRetardTvaDto> {
       return this.tauxRetardTvaService.items;
    }
    set tauxRetardTvas(value: Array<TauxRetardTvaDto>) {
        this.tauxRetardTvaService.items = value;
    }
    get comptableTraitant(): ComptableTraitantDto {
       return this.comptableTraitantService.item;
    }
    set comptableTraitant(value: ComptableTraitantDto) {
        this.comptableTraitantService.item = value;
    }
    get comptableTraitants():Array<ComptableTraitantDto> {
       return this.comptableTraitantService.items;
    }
    set comptableTraitants(value: Array<ComptableTraitantDto>) {
        this.comptableTraitantService.items = value;
    }
    get comptableValidateur(): ComptableValidateurDto {
       return this.comptableValidateurService.item;
    }
    set comptableValidateur(value: ComptableValidateurDto) {
        this.comptableValidateurService.item = value;
    }
    get comptableValidateurs():Array<ComptableValidateurDto> {
       return this.comptableValidateurService.items;
    }
    set comptableValidateurs(value: Array<ComptableValidateurDto>) {
        this.comptableValidateurService.items = value;
    }


}
