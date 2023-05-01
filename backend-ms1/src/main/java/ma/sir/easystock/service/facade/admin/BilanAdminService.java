package ma.sir.easystock.service.facade.admin;

import java.io.IOException;
import java.util.List;
import ma.sir.easystock.bean.core.Bilan;
import ma.sir.easystock.dao.criteria.core.BilanCriteria;
import ma.sir.easystock.dao.criteria.history.BilanHistoryCriteria;
import ma.sir.easystock.zynerator.service.IService;
import org.springframework.http.HttpEntity;

public interface BilanAdminService extends  IService<Bilan,BilanCriteria, BilanHistoryCriteria>  {

    List<Bilan> findBySocieteId(Long id);
    int deleteBySocieteId(Long id);


}
