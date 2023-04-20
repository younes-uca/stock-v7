package ma.sir.easystock.dao.facade.core;


import ma.sir.easystock.zynerator.repository.AbstractRepository;
import ma.sir.easystock.bean.core.CompteComptable;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface CompteComptableDao extends AbstractRepository<CompteComptable,Long>  {

    List<CompteComptable> findBySousClassComptableId(Long id);
    int deleteBySousClassComptableId(Long id);

}
