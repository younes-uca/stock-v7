import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {BilanService} from 'src/app/controller/service/Bilan.service';
import {BilanDto} from 'src/app/controller/model/Bilan.model';
import {BilanCriteria} from 'src/app/controller/criteria/BilanCriteria.model';

import {SocieteDto} from 'src/app/controller/model/Societe.model';
import {SocieteService} from 'src/app/controller/service/Societe.service';
@Component({
  selector: 'app-bilan-view-admin',
  templateUrl: './bilan-view-admin.component.html'
})
export class BilanViewAdminComponent extends AbstractViewController<BilanDto, BilanCriteria, BilanService> implements OnInit {


    constructor(private datePipe: DatePipe, private bilanService: BilanService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private societeService: SocieteService
    ){
        super(datePipe, bilanService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.societe = new SocieteDto();
        this.societeService.findAll().subscribe((data) => this.societes = data);
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
