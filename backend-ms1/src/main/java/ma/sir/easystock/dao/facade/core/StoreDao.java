package ma.sir.easystock.dao.facade.core;


import ma.sir.easystock.zynerator.repository.AbstractRepository;
import ma.sir.easystock.bean.core.Store;
import org.springframework.stereotype.Repository;
import ma.sir.easystock.bean.core.Store;
import java.util.List;


@Repository
public interface StoreDao extends AbstractRepository<Store,Long>  {
    Store findByReference(String reference);
    int deleteByReference(String reference);

    List<Store> findBySocieteId(Long id);
    int deleteBySocieteId(Long id);

}
