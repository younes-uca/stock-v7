package  ma.sir.easystock.dao.criteria.core;


import ma.sir.easystock.zynerator.criteria.BaseCriteria;
import java.util.List;

public class DevisFournisseurCriteria extends  BaseCriteria  {

    private String reference;
    private String referenceLike;
    private LocalDate dateDevis;
    private LocalDate dateDevisFrom;
    private LocalDate dateDevisTo;
    private String total;
    private String totalMin;
    private String totalMax;
    private String description;
    private String descriptionLike;

    private FournisseurCriteria fournisseur ;
    private List<FournisseurCriteria> fournisseurs ;


    public DevisFournisseurCriteria(){}

    public String getReference(){
        return this.reference;
    }
    public void setReference(String reference){
        this.reference = reference;
    }
    public String getReferenceLike(){
        return this.referenceLike;
    }
    public void setReferenceLike(String referenceLike){
        this.referenceLike = referenceLike;
    }

    public LocalDate getDateDevis(){
        return this.dateDevis;
    }
    public void setDateDevis(LocalDate dateDevis){
        this.dateDevis = dateDevis;
    }
    public LocalDate getDateDevisFrom(){
        return this.dateDevisFrom;
    }
    public void setDateDevisFrom(LocalDate dateDevisFrom){
        this.dateDevisFrom = dateDevisFrom;
    }
    public LocalDate getDateDevisTo(){
        return this.dateDevisTo;
    }
    public void setDateDevisTo(LocalDate dateDevisTo){
        this.dateDevisTo = dateDevisTo;
    }
    public String getTotal(){
        return this.total;
    }
    public void setTotal(String total){
        this.total = total;
    }   
    public String getTotalMin(){
        return this.totalMin;
    }
    public void setTotalMin(String totalMin){
        this.totalMin = totalMin;
    }
    public String getTotalMax(){
        return this.totalMax;
    }
    public void setTotalMax(String totalMax){
        this.totalMax = totalMax;
    }
      
    public String getDescription(){
        return this.description;
    }
    public void setDescription(String description){
        this.description = description;
    }
    public String getDescriptionLike(){
        return this.descriptionLike;
    }
    public void setDescriptionLike(String descriptionLike){
        this.descriptionLike = descriptionLike;
    }


    public FournisseurCriteria getFournisseur(){
        return this.fournisseur;
    }

    public void setFournisseur(FournisseurCriteria fournisseur){
        this.fournisseur = fournisseur;
    }
    public List<FournisseurCriteria> getFournisseurs(){
        return this.fournisseurs;
    }

    public void setFournisseurs(List<FournisseurCriteria> fournisseurs){
        this.fournisseurs = fournisseurs;
    }
}
