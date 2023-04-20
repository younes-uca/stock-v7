package ma.sir.easystock.dao.facade.core;


import ma.sir.easystock.zynerator.repository.AbstractRepository;
import ma.sir.easystock.bean.core.PaiementCommande;
import org.springframework.stereotype.Repository;
import ma.sir.easystock.bean.core.PaiementCommande;
import java.util.List;


@Repository
public interface PaiementCommandeDao extends AbstractRepository<PaiementCommande,Long>  {
    PaiementCommande findByReference(String reference);
    int deleteByReference(String reference);

    List<PaiementCommande> findByCommandeId(Long id);
    int deleteByCommandeId(Long id);
    List<PaiementCommande> findByModePaiementId(Long id);
    int deleteByModePaiementId(Long id);

}
