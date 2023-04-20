package ma.sir.easystock.dao.facade.core;


import ma.sir.easystock.zynerator.repository.AbstractRepository;
import ma.sir.easystock.bean.core.Marque;
import org.springframework.stereotype.Repository;
import ma.sir.easystock.bean.core.Marque;
import java.util.List;


@Repository
public interface MarqueDao extends AbstractRepository<Marque,Long>  {
    Marque findByCode(String code);
    int deleteByCode(String code);


}
