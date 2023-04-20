package ma.sir.easystock.service.impl.admin;

import ma.sir.easystock.bean.core.PaiementCommande;
import ma.sir.easystock.bean.history.PaiementCommandeHistory;
import ma.sir.easystock.dao.criteria.core.PaiementCommandeCriteria;
import ma.sir.easystock.dao.criteria.history.PaiementCommandeHistoryCriteria;
import ma.sir.easystock.dao.facade.core.PaiementCommandeDao;
import ma.sir.easystock.dao.facade.history.PaiementCommandeHistoryDao;
import ma.sir.easystock.dao.specification.core.PaiementCommandeSpecification;
import ma.sir.easystock.service.facade.admin.PaiementCommandeAdminService;
import ma.sir.easystock.zynerator.service.AbstractServiceImpl;
import ma.sir.easystock.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;


import ma.sir.easystock.service.facade.admin.ModePaiementAdminService ;
import ma.sir.easystock.service.facade.admin.CommandeAdminService ;


import java.util.List;
@Service
public class PaiementCommandeAdminServiceImpl extends AbstractServiceImpl<PaiementCommande,PaiementCommandeHistory, PaiementCommandeCriteria, PaiementCommandeHistoryCriteria, PaiementCommandeDao,
PaiementCommandeHistoryDao> implements PaiementCommandeAdminService {


    public PaiementCommande findByReferenceEntity(PaiementCommande t){
        return  dao.findByReference(t.getReference());
    }

    public List<PaiementCommande> findByCommandeId(Long id){
        return dao.findByCommandeId(id);
    }
    public int deleteByCommandeId(Long id){
        return dao.deleteByCommandeId(id);
    }
    public List<PaiementCommande> findByModePaiementId(Long id){
        return dao.findByModePaiementId(id);
    }
    public int deleteByModePaiementId(Long id){
        return dao.deleteByModePaiementId(id);
    }

    public void configure() {
        super.configure(PaiementCommande.class,PaiementCommandeHistory.class, PaiementCommandeHistoryCriteria.class, PaiementCommandeSpecification.class);
    }

    @Autowired
    private ModePaiementAdminService modePaiementService ;
    @Autowired
    private CommandeAdminService commandeService ;
    public PaiementCommandeAdminServiceImpl(PaiementCommandeDao dao, PaiementCommandeHistoryDao historyDao) {
        super(dao, historyDao);
    }

}