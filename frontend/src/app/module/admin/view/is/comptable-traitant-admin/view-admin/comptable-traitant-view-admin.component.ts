import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {ComptableTraitantService} from 'src/app/controller/service/ComptableTraitant.service';
import {ComptableTraitantDto} from 'src/app/controller/model/ComptableTraitant.model';
import {ComptableTraitantCriteria} from 'src/app/controller/criteria/ComptableTraitantCriteria.model';

@Component({
  selector: 'app-comptable-traitant-view-admin',
  templateUrl: './comptable-traitant-view-admin.component.html'
})
export class ComptableTraitantViewAdminComponent extends AbstractViewController<ComptableTraitantDto, ComptableTraitantCriteria, ComptableTraitantService> implements OnInit {


    constructor(private datePipe: DatePipe, private comptableTraitantService: ComptableTraitantService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, comptableTraitantService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
