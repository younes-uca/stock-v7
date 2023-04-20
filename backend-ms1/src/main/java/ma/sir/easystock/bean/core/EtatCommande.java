package ma.sir.easystock.bean.core;

import java.util.Objects;






import com.fasterxml.jackson.annotation.JsonInclude;
import ma.sir.easystock.zynerator.audit.AuditBusinessObject;
import javax.persistence.*;
import java.util.Objects;




@Entity
@Table(name = "etat_commande")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="etat_commande_seq",sequenceName="etat_commande_seq",allocationSize=1, initialValue = 1)
public class EtatCommande   extends AuditBusinessObject     {

    private Long id;

    @Column(length = 500)
    private String libelle;
    @Column(length = 500)
    private String code;
    @Column(length = 500)
    private String style;



    public EtatCommande(){
        super();
    }




    @Id
    @Column(name = "id")
        @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="etat_commande_seq")
    public Long getId(){
        return this.id;
    }
    public void setId(Long id){
        this.id = id;
    }
    public String getLibelle(){
        return this.libelle;
    }
    public void setLibelle(String libelle){
        this.libelle = libelle;
    }
    public String getCode(){
        return this.code;
    }
    public void setCode(String code){
        this.code = code;
    }
    public String getStyle(){
        return this.style;
    }
    public void setStyle(String style){
        this.style = style;
    }

    @Transient
    public String getLabel() {
        label = libelle;
        return label;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        EtatCommande etatCommande = (EtatCommande) o;
        return id != null && id.equals(etatCommande.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

