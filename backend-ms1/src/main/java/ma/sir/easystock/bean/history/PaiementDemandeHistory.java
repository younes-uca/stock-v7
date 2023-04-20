package ma.sir.easystock.bean.history;

import com.fasterxml.jackson.annotation.JsonInclude;
import ma.sir.easystock.zynerator.history.HistBusinessObject;
import javax.persistence.*;


@Entity
@Table(name = "paiement_demande")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="paiement_demande_seq",sequenceName="paiement_demande_seq",allocationSize=1, initialValue = 1)
public class PaiementDemandeHistory extends HistBusinessObject  {


    public PaiementDemandeHistory() {
    super();
    }

    public PaiementDemandeHistory (Long id) {
    super(id);
    }

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="paiement_demande_seq")
    public Long getId() {
    return id;
    }
}

