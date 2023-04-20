import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {EtatCommandeDto} from '../model/EtatCommande.model';
import {EtatCommandeCriteria} from '../criteria/EtatCommandeCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class EtatCommandeService extends AbstractService<EtatCommandeDto, EtatCommandeCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/etatCommande/');
    }

    public constrcutDto(): EtatCommandeDto {
        return new EtatCommandeDto();
    }

    public constrcutCriteria(): EtatCommandeCriteria {
        return new EtatCommandeCriteria();
    }
}
