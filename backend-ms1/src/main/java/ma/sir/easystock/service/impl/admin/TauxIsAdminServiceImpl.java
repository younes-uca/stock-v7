package ma.sir.easystock.service.impl.admin;

import ma.sir.easystock.bean.core.TauxIs;
import ma.sir.easystock.bean.history.TauxIsHistory;
import ma.sir.easystock.dao.criteria.core.TauxIsCriteria;
import ma.sir.easystock.dao.criteria.history.TauxIsHistoryCriteria;
import ma.sir.easystock.dao.facade.core.TauxIsDao;
import ma.sir.easystock.dao.facade.history.TauxIsHistoryDao;
import ma.sir.easystock.dao.specification.core.TauxIsSpecification;
import ma.sir.easystock.service.facade.admin.TauxIsAdminService;
import ma.sir.easystock.zynerator.service.AbstractServiceImpl;
import ma.sir.easystock.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;






import java.util.List;
@Service
public class TauxIsAdminServiceImpl extends AbstractServiceImpl<TauxIs,TauxIsHistory, TauxIsCriteria, TauxIsHistoryCriteria, TauxIsDao,
TauxIsHistoryDao> implements TauxIsAdminService {




    public void configure() {
        super.configure(TauxIs.class,TauxIsHistory.class, TauxIsHistoryCriteria.class, TauxIsSpecification.class);
    }

    public TauxIsAdminServiceImpl(TauxIsDao dao, TauxIsHistoryDao historyDao) {
        super(dao, historyDao);
    }

}