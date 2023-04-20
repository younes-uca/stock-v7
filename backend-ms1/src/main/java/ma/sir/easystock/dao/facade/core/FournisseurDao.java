package ma.sir.easystock.dao.facade.core;


import ma.sir.easystock.zynerator.repository.AbstractRepository;
import ma.sir.easystock.bean.core.Fournisseur;
import org.springframework.stereotype.Repository;
import ma.sir.easystock.bean.core.Fournisseur;
import java.util.List;


@Repository
public interface FournisseurDao extends AbstractRepository<Fournisseur,Long>  {
    Fournisseur findByIce(String ice);
    int deleteByIce(String ice);


}
