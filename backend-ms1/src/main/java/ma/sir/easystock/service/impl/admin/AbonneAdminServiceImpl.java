package ma.sir.easystock.service.impl.admin;

import ma.sir.easystock.bean.core.Abonne;
import ma.sir.easystock.bean.history.AbonneHistory;
import ma.sir.easystock.dao.criteria.core.AbonneCriteria;
import ma.sir.easystock.dao.criteria.history.AbonneHistoryCriteria;
import ma.sir.easystock.dao.facade.core.AbonneDao;
import ma.sir.easystock.dao.facade.history.AbonneHistoryDao;
import ma.sir.easystock.dao.specification.core.AbonneSpecification;
import ma.sir.easystock.service.facade.admin.AbonneAdminService;
import ma.sir.easystock.zynerator.service.AbstractServiceImpl;
import ma.sir.easystock.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import ma.sir.easystock.bean.core.Store;
import ma.sir.easystock.bean.core.Societe;

import ma.sir.easystock.service.facade.admin.StoreAdminService ;
import ma.sir.easystock.service.facade.admin.SocieteAdminService ;


import java.util.List;
@Service
public class AbonneAdminServiceImpl extends AbstractServiceImpl<Abonne,AbonneHistory, AbonneCriteria, AbonneHistoryCriteria, AbonneDao,
AbonneHistoryDao> implements AbonneAdminService {

    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public Abonne create(Abonne t) {
        super.create(t);
        if (t.getStores() != null) {
                t.getStores().forEach(element-> {
                    element.setAbonne(t);
                    storeService.create(element);
            });
        }
        if (t.getSocietes() != null) {
                t.getSocietes().forEach(element-> {
                    element.setAbonne(t);
                    societeService.create(element);
            });
        }
        return t;
    }

    public Abonne findWithAssociatedLists(Long id){
        Abonne result = dao.findById(id).orElse(null);
        if(result!=null && result.getId() != null) {
            result.setStores(storeService.findByAbonneId(id));
            result.setSocietes(societeService.findByAbonneId(id));
        }
        return result;
    }
    @Transactional
    public void deleteAssociatedLists(Long id) {
        storeService.deleteByAbonneId(id);
        societeService.deleteByAbonneId(id);
    }


    public void updateWithAssociatedLists(Abonne abonne){
    if(abonne !=null && abonne.getId() != null){
            List<List<Store>> resultStores= storeService.getToBeSavedAndToBeDeleted(storeService.findByAbonneId(abonne.getId()),abonne.getStores());
            storeService.delete(resultStores.get(1));
            ListUtil.emptyIfNull(resultStores.get(0)).forEach(e -> e.setAbonne(abonne));
            storeService.update(resultStores.get(0),true);
            List<List<Societe>> resultSocietes= societeService.getToBeSavedAndToBeDeleted(societeService.findByAbonneId(abonne.getId()),abonne.getSocietes());
            societeService.delete(resultSocietes.get(1));
            ListUtil.emptyIfNull(resultSocietes.get(0)).forEach(e -> e.setAbonne(abonne));
            societeService.update(resultSocietes.get(0),true);
    }
    }

    public Abonne findByReferenceEntity(Abonne t){
        return  dao.findByCode(t.getCode());
    }


    public void configure() {
        super.configure(Abonne.class,AbonneHistory.class, AbonneHistoryCriteria.class, AbonneSpecification.class);
    }

    @Autowired
    private StoreAdminService storeService ;
    @Autowired
    private SocieteAdminService societeService ;
    public AbonneAdminServiceImpl(AbonneDao dao, AbonneHistoryDao historyDao) {
        super(dao, historyDao);
    }

}