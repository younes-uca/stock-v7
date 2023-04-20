package ma.sir.easystock.bean.core;

import java.util.Objects;
import java.util.List;

import java.time.LocalDateTime;


import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;



import com.fasterxml.jackson.annotation.JsonInclude;
import ma.sir.easystock.zynerator.audit.AuditBusinessObject;
import javax.persistence.*;
import java.util.Objects;


import java.math.BigDecimal;


@Entity
@Table(name = "achat")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="achat_seq",sequenceName="achat_seq",allocationSize=1, initialValue = 1)
public class Achat   extends AuditBusinessObject     {

    private Long id;

    @Column(length = 500)
    private String reference;
    private LocalDateTime dateAchat ;
    private BigDecimal total = BigDecimal.ZERO;
    private BigDecimal totalPaye = BigDecimal.ZERO;
    @Column(length = 500)
    private String description;

    private Fournisseur fournisseur ;
    
    private Store store ;
    

    private List<PaiementAchat> paiementAchats ;
    private List<AchatItem> achatItems ;
    private List<AvoirAchat> avoirAchats ;

    public Achat(){
        super();
    }




    @Id
    @Column(name = "id")
        @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="achat_seq")
    public Long getId(){
        return this.id;
    }
    public void setId(Long id){
        this.id = id;
    }
    public String getReference(){
        return this.reference;
    }
    public void setReference(String reference){
        this.reference = reference;
    }
    public LocalDateTime getDateAchat(){
        return this.dateAchat;
    }
    public void setDateAchat(LocalDateTime dateAchat){
        this.dateAchat = dateAchat;
    }
    public BigDecimal getTotal(){
        return this.total;
    }
    public void setTotal(BigDecimal total){
        this.total = total;
    }
    public BigDecimal getTotalPaye(){
        return this.totalPaye;
    }
    public void setTotalPaye(BigDecimal totalPaye){
        this.totalPaye = totalPaye;
    }
    public String getDescription(){
        return this.description;
    }
    public void setDescription(String description){
        this.description = description;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    public Fournisseur getFournisseur(){
        return this.fournisseur;
    }
    public void setFournisseur(Fournisseur fournisseur){
        this.fournisseur = fournisseur;
    }
    @OneToMany(mappedBy = "achat")
    public List<PaiementAchat> getPaiementAchats(){
        return this.paiementAchats;
    }
    public void setPaiementAchats(List<PaiementAchat> paiementAchats){
        this.paiementAchats = paiementAchats;
    }
    @OneToMany(mappedBy = "achat")
    public List<AchatItem> getAchatItems(){
        return this.achatItems;
    }
    public void setAchatItems(List<AchatItem> achatItems){
        this.achatItems = achatItems;
    }
    @OneToMany(mappedBy = "achat")
    public List<AvoirAchat> getAvoirAchats(){
        return this.avoirAchats;
    }
    public void setAvoirAchats(List<AvoirAchat> avoirAchats){
        this.avoirAchats = avoirAchats;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    public Store getStore(){
        return this.store;
    }
    public void setStore(Store store){
        this.store = store;
    }

    @Transient
    public String getLabel() {
        label = reference;
        return label;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Achat achat = (Achat) o;
        return id != null && id.equals(achat.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

