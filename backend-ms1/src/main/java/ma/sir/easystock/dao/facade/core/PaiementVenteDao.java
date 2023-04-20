package ma.sir.easystock.dao.facade.core;


import ma.sir.easystock.zynerator.repository.AbstractRepository;
import ma.sir.easystock.bean.core.PaiementVente;
import org.springframework.stereotype.Repository;
import ma.sir.easystock.bean.core.PaiementVente;
import java.util.List;


@Repository
public interface PaiementVenteDao extends AbstractRepository<PaiementVente,Long>  {
    PaiementVente findByReference(String reference);
    int deleteByReference(String reference);

    List<PaiementVente> findByVenteId(Long id);
    int deleteByVenteId(Long id);
    List<PaiementVente> findByModePaiementId(Long id);
    int deleteByModePaiementId(Long id);

}
