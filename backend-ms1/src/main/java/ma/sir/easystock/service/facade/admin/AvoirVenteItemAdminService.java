package ma.sir.easystock.service.facade.admin;

import java.util.List;
import ma.sir.easystock.bean.core.AvoirVenteItem;
import ma.sir.easystock.dao.criteria.core.AvoirVenteItemCriteria;
import ma.sir.easystock.dao.criteria.history.AvoirVenteItemHistoryCriteria;
import ma.sir.easystock.zynerator.service.IService;

public interface AvoirVenteItemAdminService extends  IService<AvoirVenteItem,AvoirVenteItemCriteria, AvoirVenteItemHistoryCriteria>  {

    List<AvoirVenteItem> findByProduitId(Long id);
    int deleteByProduitId(Long id);
    List<AvoirVenteItem> findByAvoirVenteId(Long id);
    int deleteByAvoirVenteId(Long id);



}
