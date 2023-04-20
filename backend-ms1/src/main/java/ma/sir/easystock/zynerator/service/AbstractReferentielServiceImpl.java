package ma.sir.easystock.zynerator.service;

import ma.sir.easystock.zynerator.audit.AuditBusinessObjectEnhanced;
import ma.sir.easystock.zynerator.criteria.BaseCriteria;
import ma.sir.easystock.zynerator.history.HistBusinessObject;
import ma.sir.easystock.zynerator.history.HistCriteria;
import ma.sir.easystock.zynerator.repository.AbstractHistoryRepository;
import ma.sir.easystock.zynerator.repository.AbstractRepository;

public abstract class AbstractReferentielServiceImpl<T extends AuditBusinessObjectEnhanced, H extends HistBusinessObject, CRITERIA extends BaseCriteria, HC extends HistCriteria, REPO extends AbstractRepository<T, Long>, HISTREPO extends AbstractHistoryRepository<H, Long>> extends AbstractServiceImpl<T, H, CRITERIA, HC, REPO, HISTREPO> {

    public AbstractReferentielServiceImpl(REPO dao, HISTREPO historyRepository) {
    super(dao, historyRepository);
    }

}