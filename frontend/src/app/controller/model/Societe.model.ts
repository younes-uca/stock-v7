import {AbonneDto} from './Abonne.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class SocieteDto  extends BaseDto{

    public id: number;
    public ice: string;
    public siege: string;
   public bloqued: null | boolean;
    public abonne: AbonneDto ;

}
