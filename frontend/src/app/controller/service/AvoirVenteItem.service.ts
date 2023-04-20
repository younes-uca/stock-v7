import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {AvoirVenteItemDto} from '../model/AvoirVenteItem.model';
import {AvoirVenteItemCriteria} from '../criteria/AvoirVenteItemCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {AvoirVenteDto} from '../model/AvoirVente.model';
import {ProduitDto} from '../model/Produit.model';

@Injectable({
  providedIn: 'root'
})
export class AvoirVenteItemService extends AbstractService<AvoirVenteItemDto, AvoirVenteItemCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/avoirVenteItem/');
    }

    public constrcutDto(): AvoirVenteItemDto {
        return new AvoirVenteItemDto();
    }

    public constrcutCriteria(): AvoirVenteItemCriteria {
        return new AvoirVenteItemCriteria();
    }
}
