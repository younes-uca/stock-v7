package ma.sir.easystock.service.facade.admin;

import java.util.List;
import ma.sir.easystock.bean.core.DemandeItem;
import ma.sir.easystock.dao.criteria.core.DemandeItemCriteria;
import ma.sir.easystock.dao.criteria.history.DemandeItemHistoryCriteria;
import ma.sir.easystock.zynerator.service.IService;

public interface DemandeItemAdminService extends  IService<DemandeItem,DemandeItemCriteria, DemandeItemHistoryCriteria>  {

    List<DemandeItem> findByProduitId(Long id);
    int deleteByProduitId(Long id);
    List<DemandeItem> findByDemandeId(Long id);
    int deleteByDemandeId(Long id);



}
