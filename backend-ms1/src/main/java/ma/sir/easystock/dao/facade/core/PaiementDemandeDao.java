package ma.sir.easystock.dao.facade.core;


import ma.sir.easystock.zynerator.repository.AbstractRepository;
import ma.sir.easystock.bean.core.PaiementDemande;
import org.springframework.stereotype.Repository;
import ma.sir.easystock.bean.core.PaiementDemande;
import java.util.List;


@Repository
public interface PaiementDemandeDao extends AbstractRepository<PaiementDemande,Long>  {
    PaiementDemande findByReference(String reference);
    int deleteByReference(String reference);

    List<PaiementDemande> findByDemandeId(Long id);
    int deleteByDemandeId(Long id);
    List<PaiementDemande> findByModePaiementId(Long id);
    int deleteByModePaiementId(Long id);

}
