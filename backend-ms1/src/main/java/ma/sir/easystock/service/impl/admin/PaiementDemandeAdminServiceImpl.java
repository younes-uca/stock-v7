package ma.sir.easystock.service.impl.admin;

import ma.sir.easystock.bean.core.PaiementDemande;
import ma.sir.easystock.bean.history.PaiementDemandeHistory;
import ma.sir.easystock.dao.criteria.core.PaiementDemandeCriteria;
import ma.sir.easystock.dao.criteria.history.PaiementDemandeHistoryCriteria;
import ma.sir.easystock.dao.facade.core.PaiementDemandeDao;
import ma.sir.easystock.dao.facade.history.PaiementDemandeHistoryDao;
import ma.sir.easystock.dao.specification.core.PaiementDemandeSpecification;
import ma.sir.easystock.service.facade.admin.PaiementDemandeAdminService;
import ma.sir.easystock.zynerator.service.AbstractServiceImpl;
import ma.sir.easystock.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;


import ma.sir.easystock.service.facade.admin.ModePaiementAdminService ;
import ma.sir.easystock.service.facade.admin.DemandeAdminService ;


import java.util.List;
@Service
public class PaiementDemandeAdminServiceImpl extends AbstractServiceImpl<PaiementDemande,PaiementDemandeHistory, PaiementDemandeCriteria, PaiementDemandeHistoryCriteria, PaiementDemandeDao,
PaiementDemandeHistoryDao> implements PaiementDemandeAdminService {


    public PaiementDemande findByReferenceEntity(PaiementDemande t){
        return  dao.findByReference(t.getReference());
    }

    public List<PaiementDemande> findByDemandeId(Long id){
        return dao.findByDemandeId(id);
    }
    public int deleteByDemandeId(Long id){
        return dao.deleteByDemandeId(id);
    }
    public List<PaiementDemande> findByModePaiementId(Long id){
        return dao.findByModePaiementId(id);
    }
    public int deleteByModePaiementId(Long id){
        return dao.deleteByModePaiementId(id);
    }

    public void configure() {
        super.configure(PaiementDemande.class,PaiementDemandeHistory.class, PaiementDemandeHistoryCriteria.class, PaiementDemandeSpecification.class);
    }

    @Autowired
    private ModePaiementAdminService modePaiementService ;
    @Autowired
    private DemandeAdminService demandeService ;
    public PaiementDemandeAdminServiceImpl(PaiementDemandeDao dao, PaiementDemandeHistoryDao historyDao) {
        super(dao, historyDao);
    }

}