package ma.sir.easystock.bean.core;

import java.util.Objects;
import java.util.List;






import com.fasterxml.jackson.annotation.JsonInclude;
import ma.sir.easystock.zynerator.audit.AuditBusinessObject;
import javax.persistence.*;
import java.util.Objects;




@Entity
@Table(name = "reception")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="reception_seq",sequenceName="reception_seq",allocationSize=1, initialValue = 1)
public class Reception   extends AuditBusinessObject     {

    private Long id;

    private LocaleDateTime dateReception ;
    @Column(length = 500)
    private String description;

    private Commande commande ;
    
    private EtatReception etatReception ;
    

    private List<ReceptionItem> receptionItems ;

    public Reception(){
        super();
    }




    @Id
    @Column(name = "id")
        @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="reception_seq")
    public Long getId(){
        return this.id;
    }
    public void setId(Long id){
        this.id = id;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    public Commande getCommande(){
        return this.commande;
    }
    public void setCommande(Commande commande){
        this.commande = commande;
    }
    public LocaleDateTime getDateReception(){
        return this.dateReception;
    }
    public void setDateReception(LocaleDateTime dateReception){
        this.dateReception = dateReception;
    }
    public String getDescription(){
        return this.description;
    }
    public void setDescription(String description){
        this.description = description;
    }
    @OneToMany(mappedBy = "reception")
    public List<ReceptionItem> getReceptionItems(){
        return this.receptionItems;
    }
    public void setReceptionItems(List<ReceptionItem> receptionItems){
        this.receptionItems = receptionItems;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    public EtatReception getEtatReception(){
        return this.etatReception;
    }
    public void setEtatReception(EtatReception etatReception){
        this.etatReception = etatReception;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Reception reception = (Reception) o;
        return id != null && id.equals(reception.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

