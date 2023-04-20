import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {TauxIsService} from 'src/app/controller/service/TauxIs.service';
import {TauxIsDto} from 'src/app/controller/model/TauxIs.model';
import {TauxIsCriteria} from 'src/app/controller/criteria/TauxIsCriteria.model';

@Component({
  selector: 'app-taux-is-view-admin',
  templateUrl: './taux-is-view-admin.component.html'
})
export class TauxIsViewAdminComponent extends AbstractViewController<TauxIsDto, TauxIsCriteria, TauxIsService> implements OnInit {


    constructor(private datePipe: DatePipe, private tauxIsService: TauxIsService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, tauxIsService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
