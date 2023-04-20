package  ma.sir.easystock.ws.facade.admin;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import ma.sir.easystock.bean.core.DeclarationTva;
import ma.sir.easystock.bean.history.DeclarationTvaHistory;
import ma.sir.easystock.dao.criteria.core.DeclarationTvaCriteria;
import ma.sir.easystock.dao.criteria.history.DeclarationTvaHistoryCriteria;
import ma.sir.easystock.service.facade.admin.DeclarationTvaAdminService;
import ma.sir.easystock.ws.converter.DeclarationTvaConverter;
import ma.sir.easystock.ws.dto.DeclarationTvaDto;
import ma.sir.easystock.zynerator.controller.AbstractController;
import ma.sir.easystock.zynerator.dto.AuditEntityDto;
import ma.sir.easystock.zynerator.util.PaginatedList;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import ma.sir.easystock.zynerator.process.Result;

import org.springframework.web.multipart.MultipartFile;
import ma.sir.easystock.zynerator.dto.FileTempDto;

@Api("Manages declarationTva services")
@RestController
@RequestMapping("/api/admin/declarationTva/")
public class DeclarationTvaRestAdmin  extends AbstractController<DeclarationTva, DeclarationTvaDto, DeclarationTvaHistory, DeclarationTvaCriteria, DeclarationTvaHistoryCriteria, DeclarationTvaAdminService, DeclarationTvaConverter> {



    @RequestMapping(value = "upload", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<FileTempDto> uploadFileAndGetChecksum(@RequestBody MultipartFile file) throws Exception {
        return super.uploadFileAndGetChecksum(file);
    }

    @RequestMapping(value = "upload-multiple", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<List<FileTempDto>> uploadMultipleFileAndGetChecksum(@RequestBody MultipartFile[] files) throws Exception {
        return super.uploadMultipleFileAndGetChecksum(files);
    }

    @ApiOperation("Finds a list of all declarationTvas")
    @GetMapping("")
    public ResponseEntity<List<DeclarationTvaDto>> findAll() throws Exception {
        return super.findAll();
    }

    @ApiOperation("Finds a declarationTva by id")
    @GetMapping("id/{id}")
    public ResponseEntity<DeclarationTvaDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }
    @ApiOperation("Saves the specified  declarationTva")
    @PostMapping("")
    public ResponseEntity<DeclarationTvaDto> save(@RequestBody DeclarationTvaDto dto) throws Exception {
        return super.save(dto);
    }

    @ApiOperation("Updates the specified  declarationTva")
    @PutMapping("")
    public ResponseEntity<DeclarationTvaDto> update(@RequestBody DeclarationTvaDto dto) throws Exception {
        return super.update(dto);
    }

    @ApiOperation("Delete list of declarationTva")
    @PostMapping("multiple")
    public ResponseEntity<List<DeclarationTvaDto>> delete(@RequestBody List<DeclarationTvaDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }
    @ApiOperation("Delete the specified declarationTva")
    @DeleteMapping("")
    public ResponseEntity<DeclarationTvaDto> delete(@RequestBody DeclarationTvaDto dto) throws Exception {
            return super.delete(dto);
    }

    @ApiOperation("Delete the specified declarationTva")
    @DeleteMapping("id/{id}")
    public ResponseEntity<Long> deleteById(@PathVariable Long id) throws Exception {
        return super.deleteById(id);
    }
    @ApiOperation("Delete multiple declarationTvas by ids")
    @DeleteMapping("multiple/id")
    public ResponseEntity<List<Long>> deleteByIdIn(@RequestBody List<Long> ids) throws Exception {
            return super.deleteByIdIn(ids);
     }


    @ApiOperation("find by societe id")
    @GetMapping("societe/id/{id}")
    public List<DeclarationTva> findBySocieteId(@PathVariable Long id){
        return service.findBySocieteId(id);
    }
    @ApiOperation("delete by societe id")
    @DeleteMapping("societe/id/{id}")
    public int deleteBySocieteId(@PathVariable Long id){
        return service.deleteBySocieteId(id);
    }
    @ApiOperation("find by tauxRetardTva id")
    @GetMapping("tauxRetardTva/id/{id}")
    public List<DeclarationTva> findByTauxRetardTvaId(@PathVariable Long id){
        return service.findByTauxRetardTvaId(id);
    }
    @ApiOperation("delete by tauxRetardTva id")
    @DeleteMapping("tauxRetardTva/id/{id}")
    public int deleteByTauxRetardTvaId(@PathVariable Long id){
        return service.deleteByTauxRetardTvaId(id);
    }
    @ApiOperation("find by comptableTraitant id")
    @GetMapping("comptableTraitant/id/{id}")
    public List<DeclarationTva> findByComptableTraitantId(@PathVariable Long id){
        return service.findByComptableTraitantId(id);
    }
    @ApiOperation("delete by comptableTraitant id")
    @DeleteMapping("comptableTraitant/id/{id}")
    public int deleteByComptableTraitantId(@PathVariable Long id){
        return service.deleteByComptableTraitantId(id);
    }
    @ApiOperation("find by comptableValidateur id")
    @GetMapping("comptableValidateur/id/{id}")
    public List<DeclarationTva> findByComptableValidateurId(@PathVariable Long id){
        return service.findByComptableValidateurId(id);
    }
    @ApiOperation("delete by comptableValidateur id")
    @DeleteMapping("comptableValidateur/id/{id}")
    public int deleteByComptableValidateurId(@PathVariable Long id){
        return service.deleteByComptableValidateurId(id);
    }
    @ApiOperation("Finds declarationTvas by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<DeclarationTvaDto>> findByCriteria(@RequestBody DeclarationTvaCriteria criteria) throws Exception {
        return super.findByCriteria(criteria);
    }

    @ApiOperation("Finds paginated declarationTvas by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody DeclarationTvaCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports declarationTvas by criteria")
    @PostMapping("export")
    public ResponseEntity<InputStreamResource> export(@RequestBody DeclarationTvaCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @ApiOperation("Gets declarationTva data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody DeclarationTvaCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }

    @ApiOperation("Gets declarationTva history by id")
    @GetMapping("history/id/{id}")
    public ResponseEntity<AuditEntityDto> findHistoryById(@PathVariable("id") Long id) throws Exception {
        return super.findHistoryById(id);
    }

    @ApiOperation("Gets declarationTva paginated history by criteria")
    @PostMapping("history-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findHistoryPaginatedByCriteria(@RequestBody DeclarationTvaHistoryCriteria criteria) throws Exception {
        return super.findHistoryPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports declarationTva history by criteria")
    @PostMapping("export-history")
    public ResponseEntity<InputStreamResource> exportHistory(@RequestBody DeclarationTvaHistoryCriteria criteria) throws Exception {
        return super.exportHistory(criteria);
    }

    @ApiOperation("Gets declarationTva history data size by criteria")
    @PostMapping("history-data-size")
    public ResponseEntity<Integer> getHistoryDataSize(@RequestBody DeclarationTvaHistoryCriteria criteria) throws Exception {
        return super.getHistoryDataSize(criteria);
    }
    public DeclarationTvaRestAdmin (DeclarationTvaAdminService service, DeclarationTvaConverter converter) {
        super(service, converter);
    }


}