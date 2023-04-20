package ma.sir.easystock.dao.facade.core;


import ma.sir.easystock.zynerator.repository.AbstractRepository;
import ma.sir.easystock.bean.core.ModePaiement;
import org.springframework.stereotype.Repository;
import ma.sir.easystock.bean.core.ModePaiement;
import java.util.List;


@Repository
public interface ModePaiementDao extends AbstractRepository<ModePaiement,Long>  {
    ModePaiement findByCode(String code);
    int deleteByCode(String code);


}
