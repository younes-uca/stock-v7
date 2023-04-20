package ma.sir.easystock.service.impl.admin;

import ma.sir.easystock.bean.core.PaiementAchat;
import ma.sir.easystock.bean.history.PaiementAchatHistory;
import ma.sir.easystock.dao.criteria.core.PaiementAchatCriteria;
import ma.sir.easystock.dao.criteria.history.PaiementAchatHistoryCriteria;
import ma.sir.easystock.dao.facade.core.PaiementAchatDao;
import ma.sir.easystock.dao.facade.history.PaiementAchatHistoryDao;
import ma.sir.easystock.dao.specification.core.PaiementAchatSpecification;
import ma.sir.easystock.service.facade.admin.PaiementAchatAdminService;
import ma.sir.easystock.zynerator.service.AbstractServiceImpl;
import ma.sir.easystock.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;


import ma.sir.easystock.service.facade.admin.ModePaiementAdminService ;
import ma.sir.easystock.service.facade.admin.AchatAdminService ;


import java.util.List;
@Service
public class PaiementAchatAdminServiceImpl extends AbstractServiceImpl<PaiementAchat,PaiementAchatHistory, PaiementAchatCriteria, PaiementAchatHistoryCriteria, PaiementAchatDao,
PaiementAchatHistoryDao> implements PaiementAchatAdminService {


    public PaiementAchat findByReferenceEntity(PaiementAchat t){
        return  dao.findByReference(t.getReference());
    }

    public List<PaiementAchat> findByAchatId(Long id){
        return dao.findByAchatId(id);
    }
    public int deleteByAchatId(Long id){
        return dao.deleteByAchatId(id);
    }
    public List<PaiementAchat> findByModePaiementId(Long id){
        return dao.findByModePaiementId(id);
    }
    public int deleteByModePaiementId(Long id){
        return dao.deleteByModePaiementId(id);
    }

    public void configure() {
        super.configure(PaiementAchat.class,PaiementAchatHistory.class, PaiementAchatHistoryCriteria.class, PaiementAchatSpecification.class);
    }

    @Autowired
    private ModePaiementAdminService modePaiementService ;
    @Autowired
    private AchatAdminService achatService ;
    public PaiementAchatAdminServiceImpl(PaiementAchatDao dao, PaiementAchatHistoryDao historyDao) {
        super(dao, historyDao);
    }

}