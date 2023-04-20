import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {TauxIsService} from 'src/app/controller/service/TauxIs.service';
import {TauxIsDto} from 'src/app/controller/model/TauxIs.model';
import {TauxIsCriteria} from 'src/app/controller/criteria/TauxIsCriteria.model';
@Component({
  selector: 'app-taux-is-create-admin',
  templateUrl: './taux-is-create-admin.component.html'
})
export class TauxIsCreateAdminComponent extends AbstractCreateController<TauxIsDto, TauxIsCriteria, TauxIsService>  implements OnInit {




    constructor(private datePipe: DatePipe, private tauxIsService: TauxIsService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, tauxIsService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }










}
