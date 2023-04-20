import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {OperationComptableService} from 'src/app/controller/service/OperationComptable.service';
import {OperationComptableDto} from 'src/app/controller/model/OperationComptable.model';
import {OperationComptableCriteria} from 'src/app/controller/criteria/OperationComptableCriteria.model';

import {CompteComptableDto} from 'src/app/controller/model/CompteComptable.model';
import {CompteComptableService} from 'src/app/controller/service/CompteComptable.service';
import {SocieteDto} from 'src/app/controller/model/Societe.model';
import {SocieteService} from 'src/app/controller/service/Societe.service';
@Component({
  selector: 'app-operation-comptable-view-admin',
  templateUrl: './operation-comptable-view-admin.component.html'
})
export class OperationComptableViewAdminComponent extends AbstractViewController<OperationComptableDto, OperationComptableCriteria, OperationComptableService> implements OnInit {


    constructor(private datePipe: DatePipe, private operationComptableService: OperationComptableService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private compteComptableService: CompteComptableService, private societeService: SocieteService
    ){
        super(datePipe, operationComptableService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.societe = new SocieteDto();
        this.societeService.findAll().subscribe((data) => this.societes = data);
        this.compteComptable = new CompteComptableDto();
        this.compteComptableService.findAll().subscribe((data) => this.compteComptables = data);
    }


    get compteComptable(): CompteComptableDto {
       return this.compteComptableService.item;
    }
    set compteComptable(value: CompteComptableDto) {
        this.compteComptableService.item = value;
    }
    get compteComptables():Array<CompteComptableDto> {
       return this.compteComptableService.items;
    }
    set compteComptables(value: Array<CompteComptableDto>) {
        this.compteComptableService.items = value;
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


}
