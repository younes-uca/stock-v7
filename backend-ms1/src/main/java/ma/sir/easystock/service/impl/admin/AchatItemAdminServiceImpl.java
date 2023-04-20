package ma.sir.easystock.service.impl.admin;

import ma.sir.easystock.bean.core.AchatItem;
import ma.sir.easystock.bean.history.AchatItemHistory;
import ma.sir.easystock.dao.criteria.core.AchatItemCriteria;
import ma.sir.easystock.dao.criteria.history.AchatItemHistoryCriteria;
import ma.sir.easystock.dao.facade.core.AchatItemDao;
import ma.sir.easystock.dao.facade.history.AchatItemHistoryDao;
import ma.sir.easystock.dao.specification.core.AchatItemSpecification;
import ma.sir.easystock.service.facade.admin.AchatItemAdminService;
import ma.sir.easystock.zynerator.service.AbstractServiceImpl;
import ma.sir.easystock.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;


import ma.sir.easystock.service.facade.admin.ProduitAdminService ;
import ma.sir.easystock.service.facade.admin.AchatAdminService ;


import java.util.List;
@Service
public class AchatItemAdminServiceImpl extends AbstractServiceImpl<AchatItem,AchatItemHistory, AchatItemCriteria, AchatItemHistoryCriteria, AchatItemDao,
AchatItemHistoryDao> implements AchatItemAdminService {



    public List<AchatItem> findByProduitId(Long id){
        return dao.findByProduitId(id);
    }
    public int deleteByProduitId(Long id){
        return dao.deleteByProduitId(id);
    }
    public List<AchatItem> findByAchatId(Long id){
        return dao.findByAchatId(id);
    }
    public int deleteByAchatId(Long id){
        return dao.deleteByAchatId(id);
    }

    public void configure() {
        super.configure(AchatItem.class,AchatItemHistory.class, AchatItemHistoryCriteria.class, AchatItemSpecification.class);
    }

    @Autowired
    private ProduitAdminService produitService ;
    @Autowired
    private AchatAdminService achatService ;
    public AchatItemAdminServiceImpl(AchatItemDao dao, AchatItemHistoryDao historyDao) {
        super(dao, historyDao);
    }

}