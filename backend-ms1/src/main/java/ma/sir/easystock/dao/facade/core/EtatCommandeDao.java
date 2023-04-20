package ma.sir.easystock.dao.facade.core;


import ma.sir.easystock.zynerator.repository.AbstractRepository;
import ma.sir.easystock.bean.core.EtatCommande;
import org.springframework.stereotype.Repository;
import ma.sir.easystock.bean.core.EtatCommande;
import java.util.List;


@Repository
public interface EtatCommandeDao extends AbstractRepository<EtatCommande,Long>  {
    EtatCommande findByCode(String code);
    int deleteByCode(String code);


}
