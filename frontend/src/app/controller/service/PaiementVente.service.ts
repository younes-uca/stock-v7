import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {PaiementVenteDto} from '../model/PaiementVente.model';
import {PaiementVenteCriteria} from '../criteria/PaiementVenteCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {VenteDto} from '../model/Vente.model';
import {ModePaiementDto} from '../model/ModePaiement.model';

@Injectable({
  providedIn: 'root'
})
export class PaiementVenteService extends AbstractService<PaiementVenteDto, PaiementVenteCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/paiementVente/');
    }

    public constrcutDto(): PaiementVenteDto {
        return new PaiementVenteDto();
    }

    public constrcutCriteria(): PaiementVenteCriteria {
        return new PaiementVenteCriteria();
    }
}
