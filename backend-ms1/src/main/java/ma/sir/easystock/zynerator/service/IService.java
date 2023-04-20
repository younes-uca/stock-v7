package ma.sir.easystock.zynerator.service;

import ma.sir.easystock.zynerator.bean.BusinessObject;
import ma.sir.easystock.zynerator.criteria.BaseCriteria;
import ma.sir.easystock.zynerator.dto.AuditEntityDto;
import ma.sir.easystock.zynerator.security.bean.User;

import java.util.List;

public interface IService<T extends BusinessObject, Criteria extends BaseCriteria, HistoryCriteria> {

    T create(T t);

    T update(T t);

    List<T> update(List<T> ts,boolean createIfNotExist);

    T findById(Long id);

    T findOrSave(T t);

    void findOrSaveAssociatedObject(T t);

    T findByReferenceEntity(T t);

    T findWithAssociatedLists(Long id);

    void deleteWithAssociatedLists(T t);

    List<T> findByCriteria(Criteria critera);

    List<T> findPaginatedByCriteria(Criteria critera, int page, int pageSize, String order, String sortField);

    int getDataSize(Criteria criteria);

    void delete(List<T> ts);

    void deleteByIdIn(List<Long> ids);

    void deleteById(Long id);

    List<List<T>> getToBeSavedAndToBeDeleted(List<T> oldList, List<T> newList);

    User getCurrentUser();


    // History

    AuditEntityDto findHistoryById(Long id);

    List<AuditEntityDto> findHistoryByCriteria(HistoryCriteria historyCriteria);

    List<AuditEntityDto> findHistoryPaginatedByCriteria(HistoryCriteria historyCriteria, int page, int pageSize, String order, String sortField);

    int getHistoryDataSize(HistoryCriteria historyCriteria);

    List<T> importerData(List<T> items);



}
