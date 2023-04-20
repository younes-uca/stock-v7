package  ma.sir.easystock.dao.criteria.core;


import ma.sir.easystock.zynerator.criteria.BaseCriteria;
import java.util.List;

public class ReceptionCriteria extends  BaseCriteria  {

    private String dateReception;
    private String dateReceptionLike;
    private String description;
    private String descriptionLike;

    private CommandeCriteria commande ;
    private List<CommandeCriteria> commandes ;
    private EtatReceptionCriteria etatReception ;
    private List<EtatReceptionCriteria> etatReceptions ;


    public ReceptionCriteria(){}

    public String getDateReception(){
        return this.dateReception;
    }
    public void setDateReception(String dateReception){
        this.dateReception = dateReception;
    }
    public String getDateReceptionLike(){
        return this.dateReceptionLike;
    }
    public void setDateReceptionLike(String dateReceptionLike){
        this.dateReceptionLike = dateReceptionLike;
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


    public CommandeCriteria getCommande(){
        return this.commande;
    }

    public void setCommande(CommandeCriteria commande){
        this.commande = commande;
    }
    public List<CommandeCriteria> getCommandes(){
        return this.commandes;
    }

    public void setCommandes(List<CommandeCriteria> commandes){
        this.commandes = commandes;
    }
    public EtatReceptionCriteria getEtatReception(){
        return this.etatReception;
    }

    public void setEtatReception(EtatReceptionCriteria etatReception){
        this.etatReception = etatReception;
    }
    public List<EtatReceptionCriteria> getEtatReceptions(){
        return this.etatReceptions;
    }

    public void setEtatReceptions(List<EtatReceptionCriteria> etatReceptions){
        this.etatReceptions = etatReceptions;
    }
}
