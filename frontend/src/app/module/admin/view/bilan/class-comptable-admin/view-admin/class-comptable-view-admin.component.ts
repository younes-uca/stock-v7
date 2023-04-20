import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {ClassComptableService} from 'src/app/controller/service/ClassComptable.service';
import {ClassComptableDto} from 'src/app/controller/model/ClassComptable.model';
import {ClassComptableCriteria} from 'src/app/controller/criteria/ClassComptableCriteria.model';

import {SousClassComptableDto} from 'src/app/controller/model/SousClassComptable.model';
import {SousClassComptableService} from 'src/app/controller/service/SousClassComptable.service';
import {CompteComptableDto} from 'src/app/controller/model/CompteComptable.model';
import {CompteComptableService} from 'src/app/controller/service/CompteComptable.service';
@Component({
  selector: 'app-class-comptable-view-admin',
  templateUrl: './class-comptable-view-admin.component.html'
})
export class ClassComptableViewAdminComponent extends AbstractViewController<ClassComptableDto, ClassComptableCriteria, ClassComptableService> implements OnInit {

    sousClassComptables = new SousClassComptableDto();
    sousClassComptabless: Array<SousClassComptableDto> = [];

    constructor(private datePipe: DatePipe, private classComptableService: ClassComptableService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private sousClassComptableService: SousClassComptableService
    ){
        super(datePipe, classComptableService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
