package pl.damkac.facility;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.damkac.doctor.Doctor;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/facility")
@RequiredArgsConstructor
class FacilityController {
    private final FacilityService facilityService;

    @GetMapping
    public ResponseEntity<List<Facility>> getAll(){
        return ResponseEntity.ok(facilityService.getAll());
    }

}
