import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {SocieteService} from 'src/app/controller/service/Societe.service';
import {SocieteDto} from 'src/app/controller/model/Societe.model';
import {SocieteCriteria} from 'src/app/controller/criteria/SocieteCriteria.model';

import {AbonneDto} from 'src/app/controller/model/Abonne.model';
import {AbonneService} from 'src/app/controller/service/Abonne.service';
@Component({
  selector: 'app-societe-view-admin',
  templateUrl: './societe-view-admin.component.html'
})
export class SocieteViewAdminComponent extends AbstractViewController<SocieteDto, SocieteCriteria, SocieteService> implements OnInit {


    constructor(private datePipe: DatePipe, private societeService: SocieteService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private abonneService: AbonneService
    ){
        super(datePipe, societeService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.abonne = new AbonneDto();
        this.abonneService.findAll().subscribe((data) => this.abonnes = data);
    }


    get abonne(): AbonneDto {
       return this.abonneService.item;
    }
    set abonne(value: AbonneDto) {
        this.abonneService.item = value;
    }
    get abonnes():Array<AbonneDto> {
       return this.abonneService.items;
    }
    set abonnes(value: Array<AbonneDto>) {
        this.abonneService.items = value;
    }


}
