package  ma.sir.easystock.dao.specification.core;

import ma.sir.easystock.zynerator.specification.AbstractSpecification;
import ma.sir.easystock.dao.criteria.core.VenteCriteria;
import ma.sir.easystock.bean.core.Vente;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

public class VenteSpecification extends  AbstractSpecification<VenteCriteria, Vente>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicate("reference", criteria.getReference(),criteria.getReferenceLike());
        addPredicate("dateVente", criteria.getDateVente(), criteria.getDateVenteFrom(), criteria.getDateVenteTo());
        addPredicateBigDecimal("total", criteria.getTotal(), criteria.getTotalMin(), criteria.getTotalMax());
        addPredicateBigDecimal("totalPaye", criteria.getTotalPaye(), criteria.getTotalPayeMin(), criteria.getTotalPayeMax());
        addPredicateFk("store","id", criteria.getStore()==null?null:criteria.getStore().getId());
        addPredicateFk("store","reference", criteria.getStore()==null?null:criteria.getStore().getReference());
        addPredicateFk("client","id", criteria.getClient()==null?null:criteria.getClient().getId());
        addPredicateFk("client","cin", criteria.getClient()==null?null:criteria.getClient().getCin());
    }

    public VenteSpecification(VenteCriteria criteria) {
        super(criteria);
    }

    public VenteSpecification(VenteCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
