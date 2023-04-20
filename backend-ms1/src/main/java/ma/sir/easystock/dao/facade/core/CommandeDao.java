package ma.sir.easystock.dao.facade.core;


import ma.sir.easystock.zynerator.repository.AbstractRepository;
import ma.sir.easystock.bean.core.Commande;
import org.springframework.stereotype.Repository;
import ma.sir.easystock.bean.core.Commande;
import java.util.List;


@Repository
public interface CommandeDao extends AbstractRepository<Commande,Long>  {
    Commande findByReference(String reference);
    int deleteByReference(String reference);

    List<Commande> findByClientId(Long id);
    int deleteByClientId(Long id);
    List<Commande> findByStoreId(Long id);
    int deleteByStoreId(Long id);
    List<Commande> findByEtatCommandeId(Long id);
    int deleteByEtatCommandeId(Long id);

}
