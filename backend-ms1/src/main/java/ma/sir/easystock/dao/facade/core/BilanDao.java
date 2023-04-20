package ma.sir.easystock.dao.facade.core;


import ma.sir.easystock.zynerator.repository.AbstractRepository;
import ma.sir.easystock.bean.core.Bilan;
import org.springframework.stereotype.Repository;
import ma.sir.easystock.bean.core.Bilan;
import java.util.List;


@Repository
public interface BilanDao extends AbstractRepository<Bilan,Long>  {
    Bilan findByRef(String ref);
    int deleteByRef(String ref);

    List<Bilan> findBySocieteId(Long id);
    int deleteBySocieteId(Long id);

}
