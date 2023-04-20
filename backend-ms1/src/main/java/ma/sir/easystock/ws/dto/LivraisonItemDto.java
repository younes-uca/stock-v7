package  ma.sir.easystock.ws.dto;

import ma.sir.easystock.zynerator.audit.Log;
import ma.sir.easystock.zynerator.dto.AuditBaseDto;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.math.BigDecimal;


@JsonInclude(JsonInclude.Include.NON_NULL)
public class LivraisonItemDto  extends AuditBaseDto {

    private BigDecimal quantite  ;

    private ProduitDto produit ;
    private LivraisonDto livraison ;



    public LivraisonItemDto(){
        super();
    }



    @Log
    public BigDecimal getQuantite(){
        return this.quantite;
    }
    public void setQuantite(BigDecimal quantite){
        this.quantite = quantite;
    }


    public ProduitDto getProduit(){
        return this.produit;
    }

    public void setProduit(ProduitDto produit){
        this.produit = produit;
    }
    public LivraisonDto getLivraison(){
        return this.livraison;
    }

    public void setLivraison(LivraisonDto livraison){
        this.livraison = livraison;
    }




}
