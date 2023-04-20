package ma.sir.easystock.dao.facade.core;


import ma.sir.easystock.zynerator.repository.AbstractRepository;
import ma.sir.easystock.bean.core.PaiementAchat;
import org.springframework.stereotype.Repository;
import ma.sir.easystock.bean.core.PaiementAchat;
import java.util.List;


@Repository
public interface PaiementAchatDao extends AbstractRepository<PaiementAchat,Long>  {
    PaiementAchat findByReference(String reference);
    int deleteByReference(String reference);

    List<PaiementAchat> findByAchatId(Long id);
    int deleteByAchatId(Long id);
    List<PaiementAchat> findByModePaiementId(Long id);
    int deleteByModePaiementId(Long id);

}
