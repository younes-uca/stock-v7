import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {TauxRetardTvaService} from 'src/app/controller/service/TauxRetardTva.service';
import {TauxRetardTvaDto} from 'src/app/controller/model/TauxRetardTva.model';
import {TauxRetardTvaCriteria} from 'src/app/controller/criteria/TauxRetardTvaCriteria.model';
@Component({
  selector: 'app-taux-retard-tva-create-admin',
  templateUrl: './taux-retard-tva-create-admin.component.html'
})
export class TauxRetardTvaCreateAdminComponent extends AbstractCreateController<TauxRetardTvaDto, TauxRetardTvaCriteria, TauxRetardTvaService>  implements OnInit {




    constructor(private datePipe: DatePipe, private tauxRetardTvaService: TauxRetardTvaService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, tauxRetardTvaService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }










}
