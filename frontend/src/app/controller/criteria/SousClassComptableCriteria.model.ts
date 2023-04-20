import {ClassComptableCriteria} from './ClassComptableCriteria.model';
import {CompteComptableCriteria} from './CompteComptableCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class SousClassComptableCriteria  extends   BaseCriteria  {

    public id: number;
    public libelle: string;
    public libelleLike: string;
    public code: string;
    public codeLike: string;
  public classComptable: ClassComptableCriteria ;
      public compteComptables: Array<CompteComptableCriteria>;

}
