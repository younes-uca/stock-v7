package  ma.sir.easystock.dao.specification.core;

import ma.sir.easystock.zynerator.specification.AbstractSpecification;
import ma.sir.easystock.dao.criteria.core.SocieteCriteria;
import ma.sir.easystock.bean.core.Societe;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

public class SocieteSpecification extends  AbstractSpecification<SocieteCriteria, Societe>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicate("ice", criteria.getIce(),criteria.getIceLike());
        addPredicate("siege", criteria.getSiege(),criteria.getSiegeLike());
        addPredicateBool("bloqued", criteria.getBloqued());
        addPredicateFk("abonne","id", criteria.getAbonne()==null?null:criteria.getAbonne().getId());
        addPredicateFk("abonne","code", criteria.getAbonne()==null?null:criteria.getAbonne().getCode());
    }

    public SocieteSpecification(SocieteCriteria criteria) {
        super(criteria);
    }

    public SocieteSpecification(SocieteCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
