package ma.sir.easystock.dao.facade.core;


import ma.sir.easystock.zynerator.repository.AbstractRepository;
import ma.sir.easystock.bean.core.EtatLivraison;
import org.springframework.stereotype.Repository;
import ma.sir.easystock.bean.core.EtatLivraison;
import java.util.List;


@Repository
public interface EtatLivraisonDao extends AbstractRepository<EtatLivraison,Long>  {
    EtatLivraison findByCode(String code);
    int deleteByCode(String code);


}
