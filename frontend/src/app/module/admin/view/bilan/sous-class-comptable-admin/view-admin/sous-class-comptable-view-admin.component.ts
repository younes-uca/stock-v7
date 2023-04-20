import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {SousClassComptableService} from 'src/app/controller/service/SousClassComptable.service';
import {SousClassComptableDto} from 'src/app/controller/model/SousClassComptable.model';
import {SousClassComptableCriteria} from 'src/app/controller/criteria/SousClassComptableCriteria.model';

import {CompteComptableDto} from 'src/app/controller/model/CompteComptable.model';
import {CompteComptableService} from 'src/app/controller/service/CompteComptable.service';
import {ClassComptableDto} from 'src/app/controller/model/ClassComptable.model';
import {ClassComptableService} from 'src/app/controller/service/ClassComptable.service';
@Component({
  selector: 'app-sous-class-comptable-view-admin',
  templateUrl: './sous-class-comptable-view-admin.component.html'
})
export class SousClassComptableViewAdminComponent extends AbstractViewController<SousClassComptableDto, SousClassComptableCriteria, SousClassComptableService> implements OnInit {

    compteComptables = new CompteComptableDto();
    compteComptabless: Array<CompteComptableDto> = [];

    constructor(private datePipe: DatePipe, private sousClassComptableService: SousClassComptableService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private compteComptableService: CompteComptableService, private classComptableService: ClassComptableService
    ){
        super(datePipe, sousClassComptableService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.classComptable = new ClassComptableDto();
        this.classComptableService.findAll().subscribe((data) => this.classComptables = data);
    }


    get classComptable(): ClassComptableDto {
       return this.classComptableService.item;
    }
    set classComptable(value: ClassComptableDto) {
        this.classComptableService.item = value;
    }
    get classComptables():Array<ClassComptableDto> {
       return this.classComptableService.items;
    }
    set classComptables(value: Array<ClassComptableDto>) {
        this.classComptableService.items = value;
    }


}
