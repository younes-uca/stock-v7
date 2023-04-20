package ma.sir.easystock.service.impl.admin;

import ma.sir.easystock.bean.core.AvoirAchat;
import ma.sir.easystock.bean.history.AvoirAchatHistory;
import ma.sir.easystock.dao.criteria.core.AvoirAchatCriteria;
import ma.sir.easystock.dao.criteria.history.AvoirAchatHistoryCriteria;
import ma.sir.easystock.dao.facade.core.AvoirAchatDao;
import ma.sir.easystock.dao.facade.history.AvoirAchatHistoryDao;
import ma.sir.easystock.dao.specification.core.AvoirAchatSpecification;
import ma.sir.easystock.service.facade.admin.AvoirAchatAdminService;
import ma.sir.easystock.zynerator.service.AbstractServiceImpl;
import ma.sir.easystock.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import ma.sir.easystock.bean.core.AvoirAchatItem;

import ma.sir.easystock.service.facade.admin.AchatAdminService ;
import ma.sir.easystock.service.facade.admin.AvoirAchatItemAdminService ;


import java.util.List;
@Service
public class AvoirAchatAdminServiceImpl extends AbstractServiceImpl<AvoirAchat,AvoirAchatHistory, AvoirAchatCriteria, AvoirAchatHistoryCriteria, AvoirAchatDao,
AvoirAchatHistoryDao> implements AvoirAchatAdminService {

    @Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class, readOnly = false)
    public AvoirAchat create(AvoirAchat t) {
        super.create(t);
        if (t.getAvoirAchatItems() != null) {
                t.getAvoirAchatItems().forEach(element-> {
                    element.setAvoirAchat(t);
                    avoirAchatItemService.create(element);
            });
        }
        return t;
    }

    public AvoirAchat findWithAssociatedLists(Long id){
        AvoirAchat result = dao.findById(id).orElse(null);
        if(result!=null && result.getId() != null) {
            result.setAvoirAchatItems(avoirAchatItemService.findByAvoirAchatId(id));
        }
        return result;
    }
    @Transactional
    public void deleteAssociatedLists(Long id) {
        avoirAchatItemService.deleteByAvoirAchatId(id);
    }


    public void updateWithAssociatedLists(AvoirAchat avoirAchat){
    if(avoirAchat !=null && avoirAchat.getId() != null){
            List<List<AvoirAchatItem>> resultAvoirAchatItems= avoirAchatItemService.getToBeSavedAndToBeDeleted(avoirAchatItemService.findByAvoirAchatId(avoirAchat.getId()),avoirAchat.getAvoirAchatItems());
            avoirAchatItemService.delete(resultAvoirAchatItems.get(1));
            ListUtil.emptyIfNull(resultAvoirAchatItems.get(0)).forEach(e -> e.setAvoirAchat(avoirAchat));
            avoirAchatItemService.update(resultAvoirAchatItems.get(0),true);
    }
    }


    public List<AvoirAchat> findByAchatId(Long id){
        return dao.findByAchatId(id);
    }
    public int deleteByAchatId(Long id){
        return dao.deleteByAchatId(id);
    }

    public void configure() {
        super.configure(AvoirAchat.class,AvoirAchatHistory.class, AvoirAchatHistoryCriteria.class, AvoirAchatSpecification.class);
    }

    @Autowired
    private AchatAdminService achatService ;
    @Autowired
    private AvoirAchatItemAdminService avoirAchatItemService ;
    public AvoirAchatAdminServiceImpl(AvoirAchatDao dao, AvoirAchatHistoryDao historyDao) {
        super(dao, historyDao);
    }

}