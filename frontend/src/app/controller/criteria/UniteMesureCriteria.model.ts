import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class UniteMesureCriteria  extends   BaseCriteria  {

    public id: number;
    public libelle: string;
    public libelleLike: string;
    public code: string;
    public codeLike: string;

}
