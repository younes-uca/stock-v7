package ma.sir.easystock.dao.facade.core;


import ma.sir.easystock.zynerator.repository.AbstractRepository;
import ma.sir.easystock.bean.core.Achat;
import org.springframework.stereotype.Repository;
import ma.sir.easystock.bean.core.Achat;
import java.util.List;


@Repository
public interface AchatDao extends AbstractRepository<Achat,Long>  {
    Achat findByReference(String reference);
    int deleteByReference(String reference);

    List<Achat> findByFournisseurId(Long id);
    int deleteByFournisseurId(Long id);
    List<Achat> findByStoreId(Long id);
    int deleteByStoreId(Long id);

}
