package ma.sir.easystock.bean.core;

import java.util.Objects;






import com.fasterxml.jackson.annotation.JsonInclude;
import ma.sir.easystock.zynerator.audit.AuditBusinessObject;
import javax.persistence.*;
import java.util.Objects;




@Entity
@Table(name = "compte_comptable")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="compte_comptable_seq",sequenceName="compte_comptable_seq",allocationSize=1, initialValue = 1)
public class CompteComptable   extends AuditBusinessObject     {

    private Long id;

    @Column(length = 500)
    private String libelle;
    @Column(length = 500)
    private String code;

    private SousClassComptable sousClassComptable ;
    


    public CompteComptable(){
        super();
    }




    @Id
    @Column(name = "id")
        @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="compte_comptable_seq")
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
    @ManyToOne(fetch = FetchType.LAZY)
    public SousClassComptable getSousClassComptable(){
        return this.sousClassComptable;
    }
    public void setSousClassComptable(SousClassComptable sousClassComptable){
        this.sousClassComptable = sousClassComptable;
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
        CompteComptable compteComptable = (CompteComptable) o;
        return id != null && id.equals(compteComptable.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

