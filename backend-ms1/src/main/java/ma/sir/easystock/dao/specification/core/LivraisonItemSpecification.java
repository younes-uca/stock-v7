package  ma.sir.easystock.dao.specification.core;

import ma.sir.easystock.zynerator.specification.AbstractSpecification;
import ma.sir.easystock.dao.criteria.core.LivraisonItemCriteria;
import ma.sir.easystock.bean.core.LivraisonItem;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

public class LivraisonItemSpecification extends  AbstractSpecification<LivraisonItemCriteria, LivraisonItem>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicateBigDecimal("quantite", criteria.getQuantite(), criteria.getQuantiteMin(), criteria.getQuantiteMax());
        addPredicateFk("produit","id", criteria.getProduit()==null?null:criteria.getProduit().getId());
        addPredicateFk("produit","reference", criteria.getProduit()==null?null:criteria.getProduit().getReference());
        addPredicateFk("livraison","id", criteria.getLivraison()==null?null:criteria.getLivraison().getId());
    }

    public LivraisonItemSpecification(LivraisonItemCriteria criteria) {
        super(criteria);
    }

    public LivraisonItemSpecification(LivraisonItemCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
