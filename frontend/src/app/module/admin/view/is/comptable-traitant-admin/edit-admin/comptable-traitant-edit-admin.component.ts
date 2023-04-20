import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {ComptableTraitantService} from 'src/app/controller/service/ComptableTraitant.service';
import {ComptableTraitantDto} from 'src/app/controller/model/ComptableTraitant.model';
import {ComptableTraitantCriteria} from 'src/app/controller/criteria/ComptableTraitantCriteria.model';



@Component({
  selector: 'app-comptable-traitant-edit-admin',
  templateUrl: './comptable-traitant-edit-admin.component.html'
})
export class ComptableTraitantEditAdminComponent extends AbstractEditController<ComptableTraitantDto, ComptableTraitantCriteria, ComptableTraitantService>   implements OnInit {






    constructor(private datePipe: DatePipe, private comptableTraitantService: ComptableTraitantService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, comptableTraitantService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}

    public setValidation(value : boolean){
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }







}
