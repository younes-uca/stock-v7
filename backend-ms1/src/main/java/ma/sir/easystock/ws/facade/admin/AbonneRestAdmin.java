package  ma.sir.easystock.ws.facade.admin;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import ma.sir.easystock.bean.core.Abonne;
import ma.sir.easystock.bean.history.AbonneHistory;
import ma.sir.easystock.dao.criteria.core.AbonneCriteria;
import ma.sir.easystock.dao.criteria.history.AbonneHistoryCriteria;
import ma.sir.easystock.service.facade.admin.AbonneAdminService;
import ma.sir.easystock.ws.converter.AbonneConverter;
import ma.sir.easystock.ws.dto.AbonneDto;
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

@Api("Manages abonne services")
@RestController
@RequestMapping("/api/admin/abonne/")
public class AbonneRestAdmin  extends AbstractController<Abonne, AbonneDto, AbonneHistory, AbonneCriteria, AbonneHistoryCriteria, AbonneAdminService, AbonneConverter> {



    @RequestMapping(value = "upload", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<FileTempDto> uploadFileAndGetChecksum(@RequestBody MultipartFile file) throws Exception {
        return super.uploadFileAndGetChecksum(file);
    }

    @RequestMapping(value = "upload-multiple", method = RequestMethod.POST, consumes = "multipart/form-data")
    public ResponseEntity<List<FileTempDto>> uploadMultipleFileAndGetChecksum(@RequestBody MultipartFile[] files) throws Exception {
        return super.uploadMultipleFileAndGetChecksum(files);
    }

    @ApiOperation("Finds a list of all abonnes")
    @GetMapping("")
    public ResponseEntity<List<AbonneDto>> findAll() throws Exception {
        return super.findAll();
    }

    @ApiOperation("Finds a abonne by id")
    @GetMapping("id/{id}")
    public ResponseEntity<AbonneDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }
    @ApiOperation("Saves the specified  abonne")
    @PostMapping("")
    public ResponseEntity<AbonneDto> save(@RequestBody AbonneDto dto) throws Exception {
        return super.save(dto);
    }

    @ApiOperation("Updates the specified  abonne")
    @PutMapping("")
    public ResponseEntity<AbonneDto> update(@RequestBody AbonneDto dto) throws Exception {
        return super.update(dto);
    }

    @ApiOperation("Delete list of abonne")
    @PostMapping("multiple")
    public ResponseEntity<List<AbonneDto>> delete(@RequestBody List<AbonneDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }
    @ApiOperation("Delete the specified abonne")
    @DeleteMapping("")
    public ResponseEntity<AbonneDto> delete(@RequestBody AbonneDto dto) throws Exception {
            return super.delete(dto);
    }

    @ApiOperation("Delete the specified abonne")
    @DeleteMapping("id/{id}")
    public ResponseEntity<Long> deleteById(@PathVariable Long id) throws Exception {
        return super.deleteById(id);
    }
    @ApiOperation("Delete multiple abonnes by ids")
    @DeleteMapping("multiple/id")
    public ResponseEntity<List<Long>> deleteByIdIn(@RequestBody List<Long> ids) throws Exception {
            return super.deleteByIdIn(ids);
     }


    @ApiOperation("Finds a abonne and associated list by id")
    @GetMapping("detail/id/{id}")
    public ResponseEntity<AbonneDto> findWithAssociatedLists(@PathVariable Long id) {
        return super.findWithAssociatedLists(id);
    }

    @ApiOperation("Finds abonnes by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<AbonneDto>> findByCriteria(@RequestBody AbonneCriteria criteria) throws Exception {
        return super.findByCriteria(criteria);
    }

    @ApiOperation("Finds paginated abonnes by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody AbonneCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports abonnes by criteria")
    @PostMapping("export")
    public ResponseEntity<InputStreamResource> export(@RequestBody AbonneCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @ApiOperation("Gets abonne data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody AbonneCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }

    @ApiOperation("Gets abonne history by id")
    @GetMapping("history/id/{id}")
    public ResponseEntity<AuditEntityDto> findHistoryById(@PathVariable("id") Long id) throws Exception {
        return super.findHistoryById(id);
    }

    @ApiOperation("Gets abonne paginated history by criteria")
    @PostMapping("history-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findHistoryPaginatedByCriteria(@RequestBody AbonneHistoryCriteria criteria) throws Exception {
        return super.findHistoryPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports abonne history by criteria")
    @PostMapping("export-history")
    public ResponseEntity<InputStreamResource> exportHistory(@RequestBody AbonneHistoryCriteria criteria) throws Exception {
        return super.exportHistory(criteria);
    }

    @ApiOperation("Gets abonne history data size by criteria")
    @PostMapping("history-data-size")
    public ResponseEntity<Integer> getHistoryDataSize(@RequestBody AbonneHistoryCriteria criteria) throws Exception {
        return super.getHistoryDataSize(criteria);
    }
    public AbonneRestAdmin (AbonneAdminService service, AbonneConverter converter) {
        super(service, converter);
    }


}