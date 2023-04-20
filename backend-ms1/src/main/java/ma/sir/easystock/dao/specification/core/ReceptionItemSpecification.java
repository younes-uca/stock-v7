package  ma.sir.easystock.dao.specification.core;

import ma.sir.easystock.zynerator.specification.AbstractSpecification;
import ma.sir.easystock.dao.criteria.core.ReceptionItemCriteria;
import ma.sir.easystock.bean.core.ReceptionItem;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

public class ReceptionItemSpecification extends  AbstractSpecification<ReceptionItemCriteria, ReceptionItem>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicateBigDecimal("quantite", criteria.getQuantite(), criteria.getQuantiteMin(), criteria.getQuantiteMax());
        addPredicateFk("produit","id", criteria.getProduit()==null?null:criteria.getProduit().getId());
        addPredicateFk("produit","reference", criteria.getProduit()==null?null:criteria.getProduit().getReference());
        addPredicateFk("magasin","id", criteria.getMagasin()==null?null:criteria.getMagasin().getId());
        addPredicateFk("reception","id", criteria.getReception()==null?null:criteria.getReception().getId());
    }

    public ReceptionItemSpecification(ReceptionItemCriteria criteria) {
        super(criteria);
    }

    public ReceptionItemSpecification(ReceptionItemCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
