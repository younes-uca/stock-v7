import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class ModePaiementCriteria  extends   BaseCriteria  {

    public id: number;
    public libelle: string;
    public libelleLike: string;
    public code: string;
    public codeLike: string;
    public style: string;
    public styleLike: string;

}
