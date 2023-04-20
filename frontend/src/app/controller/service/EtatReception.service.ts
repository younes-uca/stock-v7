import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {EtatReceptionDto} from '../model/EtatReception.model';
import {EtatReceptionCriteria} from '../criteria/EtatReceptionCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class EtatReceptionService extends AbstractService<EtatReceptionDto, EtatReceptionCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/etatReception/');
    }

    public constrcutDto(): EtatReceptionDto {
        return new EtatReceptionDto();
    }

    public constrcutCriteria(): EtatReceptionCriteria {
        return new EtatReceptionCriteria();
    }
}
