package ma.sir.easystock.bean.core;

import java.util.Objects;






import com.fasterxml.jackson.annotation.JsonInclude;
import ma.sir.easystock.zynerator.audit.AuditBusinessObject;
import javax.persistence.*;
import java.util.Objects;


import java.math.BigDecimal;


@Entity
@Table(name = "fournisseur")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="fournisseur_seq",sequenceName="fournisseur_seq",allocationSize=1, initialValue = 1)
public class Fournisseur   extends AuditBusinessObject     {

    private Long id;

    @Column(length = 500)
    private String ice;
    @Column(length = 500)
    private String nom;
    @Column(length = 500)
    private String tel;
    @Column(length = 500)
    private String email;
    @Column(length = 500)
    private String adresse;
    @Column(length = 500)
    private String description;
    private BigDecimal creance = BigDecimal.ZERO;



    public Fournisseur(){
        super();
    }




    @Id
    @Column(name = "id")
        @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="fournisseur_seq")
    public Long getId(){
        return this.id;
    }
    public void setId(Long id){
        this.id = id;
    }
    public String getIce(){
        return this.ice;
    }
    public void setIce(String ice){
        this.ice = ice;
    }
    public String getNom(){
        return this.nom;
    }
    public void setNom(String nom){
        this.nom = nom;
    }
    public String getTel(){
        return this.tel;
    }
    public void setTel(String tel){
        this.tel = tel;
    }
    public String getEmail(){
        return this.email;
    }
    public void setEmail(String email){
        this.email = email;
    }
    public String getAdresse(){
        return this.adresse;
    }
    public void setAdresse(String adresse){
        this.adresse = adresse;
    }
    public String getDescription(){
        return this.description;
    }
    public void setDescription(String description){
        this.description = description;
    }
    public BigDecimal getCreance(){
        return this.creance;
    }
    public void setCreance(BigDecimal creance){
        this.creance = creance;
    }

    @Transient
    public String getLabel() {
        label = nom;
        return label;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Fournisseur fournisseur = (Fournisseur) o;
        return id != null && id.equals(fournisseur.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

