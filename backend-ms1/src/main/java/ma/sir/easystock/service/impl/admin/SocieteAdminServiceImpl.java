package ma.sir.easystock.service.impl.admin;

import ma.sir.easystock.bean.core.Societe;
import ma.sir.easystock.bean.history.SocieteHistory;
import ma.sir.easystock.dao.criteria.core.SocieteCriteria;
import ma.sir.easystock.dao.criteria.history.SocieteHistoryCriteria;
import ma.sir.easystock.dao.facade.core.SocieteDao;
import ma.sir.easystock.dao.facade.history.SocieteHistoryDao;
import ma.sir.easystock.dao.specification.core.SocieteSpecification;
import ma.sir.easystock.service.facade.admin.SocieteAdminService;
import ma.sir.easystock.zynerator.service.AbstractServiceImpl;
import ma.sir.easystock.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;


import ma.sir.easystock.service.facade.admin.AbonneAdminService ;


import java.util.List;
@Service
public class SocieteAdminServiceImpl extends AbstractServiceImpl<Societe,SocieteHistory, SocieteCriteria, SocieteHistoryCriteria, SocieteDao,
SocieteHistoryDao> implements SocieteAdminService {


    public Societe findByReferenceEntity(Societe t){
        return  dao.findByIce(t.getIce());
    }

    public List<Societe> findByAbonneId(Long id){
        return dao.findByAbonneId(id);
    }
    public int deleteByAbonneId(Long id){
        return dao.deleteByAbonneId(id);
    }

    public void configure() {
        super.configure(Societe.class,SocieteHistory.class, SocieteHistoryCriteria.class, SocieteSpecification.class);
    }

    @Autowired
    private AbonneAdminService abonneService ;
    public SocieteAdminServiceImpl(SocieteDao dao, SocieteHistoryDao historyDao) {
        super(dao, historyDao);
    }

}