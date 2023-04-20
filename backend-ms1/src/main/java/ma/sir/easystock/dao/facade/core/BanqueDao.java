package ma.sir.easystock.dao.facade.core;


import ma.sir.easystock.zynerator.repository.AbstractRepository;
import ma.sir.easystock.bean.core.Banque;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface BanqueDao extends AbstractRepository<Banque,Long>  {


}
