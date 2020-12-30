package pl.damkac.doctor;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/doctor")
@RequiredArgsConstructor
@Slf4j
class DoctorController {

    private final DoctorService doctorService;

    @GetMapping("/facility/{facilityId}")
    public ResponseEntity<List<DoctorWithAvailableHours>> getDoctorsForFacility(@PathVariable Long facilityId,
                                                                                @RequestParam String date){
        LocalDate dateNew = LocalDate.parse(date);
        log.info(date);
        log.info(String.valueOf(dateNew));
        return ResponseEntity.ok(doctorService.findDoctorsByFacilityIdAvailableForGivenDay(facilityId, dateNew));
    }
}
