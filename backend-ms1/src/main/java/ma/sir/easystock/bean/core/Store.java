package ma.sir.easystock.bean.core;

import java.util.Objects;
import java.util.List;






import com.fasterxml.jackson.annotation.JsonInclude;
import ma.sir.easystock.zynerator.audit.AuditBusinessObject;
import javax.persistence.*;
import java.util.Objects;




@Entity
@Table(name = "store")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="store_seq",sequenceName="store_seq",allocationSize=1, initialValue = 1)
public class Store   extends AuditBusinessObject     {

    private Long id;

    @Column(length = 500)
    private String libelle;
    @Column(length = 500)
    private String reference;

    private Societe societe ;
    

    private List<Magasin> magasins ;

    public Store(){
        super();
    }




    @Id
    @Column(name = "id")
        @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="store_seq")
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
    public String getReference(){
        return this.reference;
    }
    public void setReference(String reference){
        this.reference = reference;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    public Societe getSociete(){
        return this.societe;
    }
    public void setSociete(Societe societe){
        this.societe = societe;
    }
    @OneToMany(mappedBy = "store")
    public List<Magasin> getMagasins(){
        return this.magasins;
    }
    public void setMagasins(List<Magasin> magasins){
        this.magasins = magasins;
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
        Store store = (Store) o;
        return id != null && id.equals(store.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

