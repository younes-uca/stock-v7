import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {ComptableValidateurService} from 'src/app/controller/service/ComptableValidateur.service';
import {ComptableValidateurDto} from 'src/app/controller/model/ComptableValidateur.model';
import {ComptableValidateurCriteria} from 'src/app/controller/criteria/ComptableValidateurCriteria.model';



@Component({
  selector: 'app-comptable-validateur-edit-admin',
  templateUrl: './comptable-validateur-edit-admin.component.html'
})
export class ComptableValidateurEditAdminComponent extends AbstractEditController<ComptableValidateurDto, ComptableValidateurCriteria, ComptableValidateurService>   implements OnInit {






    constructor(private datePipe: DatePipe, private comptableValidateurService: ComptableValidateurService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, comptableValidateurService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}

    public setValidation(value : boolean){
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }







}
