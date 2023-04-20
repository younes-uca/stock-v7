package ma.sir.easystock.dao.facade.core;


import ma.sir.easystock.zynerator.repository.AbstractRepository;
import ma.sir.easystock.bean.core.EtatDemande;
import org.springframework.stereotype.Repository;
import ma.sir.easystock.bean.core.EtatDemande;
import java.util.List;


@Repository
public interface EtatDemandeDao extends AbstractRepository<EtatDemande,Long>  {
    EtatDemande findByCode(String code);
    int deleteByCode(String code);


}
