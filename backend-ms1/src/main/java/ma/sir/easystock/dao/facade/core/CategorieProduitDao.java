package ma.sir.easystock.dao.facade.core;


import ma.sir.easystock.zynerator.repository.AbstractRepository;
import ma.sir.easystock.bean.core.CategorieProduit;
import org.springframework.stereotype.Repository;
import ma.sir.easystock.bean.core.CategorieProduit;
import java.util.List;


@Repository
public interface CategorieProduitDao extends AbstractRepository<CategorieProduit,Long>  {
    CategorieProduit findByReference(String reference);
    int deleteByReference(String reference);


}
