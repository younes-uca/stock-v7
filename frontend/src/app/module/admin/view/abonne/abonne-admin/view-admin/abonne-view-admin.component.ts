import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {AbonneService} from 'src/app/controller/service/Abonne.service';
import {AbonneDto} from 'src/app/controller/model/Abonne.model';
import {AbonneCriteria} from 'src/app/controller/criteria/AbonneCriteria.model';

import {StoreDto} from 'src/app/controller/model/Store.model';
import {StoreService} from 'src/app/controller/service/Store.service';
import {SocieteDto} from 'src/app/controller/model/Societe.model';
import {SocieteService} from 'src/app/controller/service/Societe.service';
import {MagasinDto} from 'src/app/controller/model/Magasin.model';
import {MagasinService} from 'src/app/controller/service/Magasin.service';
@Component({
  selector: 'app-abonne-view-admin',
  templateUrl: './abonne-view-admin.component.html'
})
export class AbonneViewAdminComponent extends AbstractViewController<AbonneDto, AbonneCriteria, AbonneService> implements OnInit {

    stores = new StoreDto();
    storess: Array<StoreDto> = [];
    societes = new SocieteDto();
    societess: Array<SocieteDto> = [];

    constructor(private datePipe: DatePipe, private abonneService: AbonneService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private storeService: StoreService, private societeService: SocieteService
    ){
        super(datePipe, abonneService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.stores.societe = new SocieteDto();
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
