package  ma.sir.easystock.ws.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ma.sir.easystock.bean.core.Abonne;

import ma.sir.easystock.zynerator.util.StringUtil;
import ma.sir.easystock.zynerator.converter.AbstractConverter;
import ma.sir.easystock.zynerator.util.DateUtil;
import ma.sir.easystock.bean.history.SocieteHistory;
import ma.sir.easystock.bean.core.Societe;
import ma.sir.easystock.ws.dto.SocieteDto;

@Component
public class SocieteConverter extends AbstractConverter<Societe, SocieteDto, SocieteHistory> {

    @Autowired
    private AbonneConverter abonneConverter ;
    private boolean abonne;

    public  SocieteConverter(){
        super(Societe.class, SocieteDto.class, SocieteHistory.class);
    }

    @Override
    public Societe toItem(SocieteDto dto) {
        if (dto == null) {
            return null;
        } else {
        Societe item = new Societe();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getIce()))
                item.setIce(dto.getIce());
            if(StringUtil.isNotEmpty(dto.getSiege()))
                item.setSiege(dto.getSiege());
            if(dto.getBloqued() != null)
                item.setBloqued(dto.getBloqued());
            if(dto.getAbonne() != null && dto.getAbonne().getId() != null){
                item.setAbonne(new Abonne());
                item.getAbonne().setId(dto.getAbonne().getId());
            }



        return item;
        }
    }

    @Override
    public SocieteDto toDto(Societe item) {
        if (item == null) {
            return null;
        } else {
            SocieteDto dto = new SocieteDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getIce()))
                dto.setIce(item.getIce());
            if(StringUtil.isNotEmpty(item.getSiege()))
                dto.setSiege(item.getSiege());
                dto.setBloqued(item.getBloqued());
        if(this.abonne && item.getAbonne()!=null) {
            dto.setAbonne(abonneConverter.toDto(item.getAbonne())) ;
        }


        return dto;
        }
    }


    public void initObject(boolean value) {
        this.abonne = value;
    }


    public AbonneConverter getAbonneConverter(){
        return this.abonneConverter;
    }
    public void setAbonneConverter(AbonneConverter abonneConverter ){
        this.abonneConverter = abonneConverter;
    }
    public boolean  isAbonne(){
        return this.abonne;
    }
    public void  setAbonne(boolean abonne){
        this.abonne = abonne;
    }
}
