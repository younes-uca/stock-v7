package  ma.sir.easystock.ws.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ma.sir.easystock.bean.core.Demande;

import ma.sir.easystock.zynerator.util.StringUtil;
import ma.sir.easystock.zynerator.converter.AbstractConverter;
import ma.sir.easystock.zynerator.util.DateUtil;
import ma.sir.easystock.bean.history.PaiementDemandeHistory;
import ma.sir.easystock.bean.core.PaiementDemande;
import ma.sir.easystock.ws.dto.PaiementDemandeDto;

@Component
public class PaiementDemandeConverter extends AbstractConverter<PaiementDemande, PaiementDemandeDto, PaiementDemandeHistory> {

    @Autowired
    private ModePaiementConverter modePaiementConverter ;
    @Autowired
    private DemandeConverter demandeConverter ;
    private boolean demande;
    private boolean modePaiement;

    public  PaiementDemandeConverter(){
        super(PaiementDemande.class, PaiementDemandeDto.class, PaiementDemandeHistory.class);
    }

    @Override
    public PaiementDemande toItem(PaiementDemandeDto dto) {
        if (dto == null) {
            return null;
        } else {
        PaiementDemande item = new PaiementDemande();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getReference()))
                item.setReference(dto.getReference());
            if(StringUtil.isNotEmpty(dto.getDatePaiement()))
                item.setDatePaiement(DateUtil.stringEnToDate(dto.getDatePaiement()));
            if(StringUtil.isNotEmpty(dto.getMontant()))
                item.setMontant(dto.getMontant());
            if(StringUtil.isNotEmpty(dto.getDescription()))
                item.setDescription(dto.getDescription());
            if(dto.getDemande() != null && dto.getDemande().getId() != null){
                item.setDemande(new Demande());
                item.getDemande().setId(dto.getDemande().getId());
            }

            if(this.modePaiement && dto.getModePaiement()!=null)
                item.setModePaiement(modePaiementConverter.toItem(dto.getModePaiement())) ;



        return item;
        }
    }

    @Override
    public PaiementDemandeDto toDto(PaiementDemande item) {
        if (item == null) {
            return null;
        } else {
            PaiementDemandeDto dto = new PaiementDemandeDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getReference()))
                dto.setReference(item.getReference());
            if(item.getDatePaiement()!=null)
                dto.setDatePaiement(DateUtil.dateTimeToString(item.getDatePaiement()));
            if(StringUtil.isNotEmpty(item.getMontant()))
                dto.setMontant(item.getMontant());
            if(StringUtil.isNotEmpty(item.getDescription()))
                dto.setDescription(item.getDescription());
        if(this.demande && item.getDemande()!=null) {
            dto.setDemande(demandeConverter.toDto(item.getDemande())) ;
        }
        if(this.modePaiement && item.getModePaiement()!=null) {
            dto.setModePaiement(modePaiementConverter.toDto(item.getModePaiement())) ;
        }


        return dto;
        }
    }


    public void initObject(boolean value) {
        this.demande = value;
        this.modePaiement = value;
    }


    public ModePaiementConverter getModePaiementConverter(){
        return this.modePaiementConverter;
    }
    public void setModePaiementConverter(ModePaiementConverter modePaiementConverter ){
        this.modePaiementConverter = modePaiementConverter;
    }
    public DemandeConverter getDemandeConverter(){
        return this.demandeConverter;
    }
    public void setDemandeConverter(DemandeConverter demandeConverter ){
        this.demandeConverter = demandeConverter;
    }
    public boolean  isDemande(){
        return this.demande;
    }
    public void  setDemande(boolean demande){
        this.demande = demande;
    }
    public boolean  isModePaiement(){
        return this.modePaiement;
    }
    public void  setModePaiement(boolean modePaiement){
        this.modePaiement = modePaiement;
    }
}
