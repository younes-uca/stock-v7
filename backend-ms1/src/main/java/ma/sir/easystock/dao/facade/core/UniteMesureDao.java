package ma.sir.easystock.dao.facade.core;


import ma.sir.easystock.zynerator.repository.AbstractRepository;
import ma.sir.easystock.bean.core.UniteMesure;
import org.springframework.stereotype.Repository;
import ma.sir.easystock.bean.core.UniteMesure;
import java.util.List;


@Repository
public interface UniteMesureDao extends AbstractRepository<UniteMesure,Long>  {
    UniteMesure findByCode(String code);
    int deleteByCode(String code);


}
