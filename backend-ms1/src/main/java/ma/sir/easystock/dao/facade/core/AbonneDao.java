package ma.sir.easystock.dao.facade.core;


import ma.sir.easystock.zynerator.repository.AbstractRepository;
import ma.sir.easystock.bean.core.Abonne;
import org.springframework.stereotype.Repository;
import ma.sir.easystock.bean.core.Abonne;
import java.util.List;


@Repository
public interface AbonneDao extends AbstractRepository<Abonne,Long>  {
    Abonne findByCode(String code);
    int deleteByCode(String code);


}
