import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {CommandeItemDto} from '../model/CommandeItem.model';
import {CommandeItemCriteria} from '../criteria/CommandeItemCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {EtatCommandeDto} from '../model/EtatCommande.model';
import {CommandeDto} from '../model/Commande.model';
import {ProduitDto} from '../model/Produit.model';

@Injectable({
  providedIn: 'root'
})
export class CommandeItemService extends AbstractService<CommandeItemDto, CommandeItemCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/commandeItem/');
    }

    public constrcutDto(): CommandeItemDto {
        return new CommandeItemDto();
    }

    public constrcutCriteria(): CommandeItemCriteria {
        return new CommandeItemCriteria();
    }
}
