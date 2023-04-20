import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {TauxRetardTvaService} from 'src/app/controller/service/TauxRetardTva.service';
import {TauxRetardTvaDto} from 'src/app/controller/model/TauxRetardTva.model';
import {TauxRetardTvaCriteria} from 'src/app/controller/criteria/TauxRetardTvaCriteria.model';

@Component({
  selector: 'app-taux-retard-tva-view-admin',
  templateUrl: './taux-retard-tva-view-admin.component.html'
})
export class TauxRetardTvaViewAdminComponent extends AbstractViewController<TauxRetardTvaDto, TauxRetardTvaCriteria, TauxRetardTvaService> implements OnInit {


    constructor(private datePipe: DatePipe, private tauxRetardTvaService: TauxRetardTvaService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, tauxRetardTvaService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
