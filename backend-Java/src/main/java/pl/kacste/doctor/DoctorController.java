package pl.kacste.doctor;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/doctor")
@RequiredArgsConstructor
class DoctorController {

    private final DoctorService doctorService;

    @GetMapping("/facility/{facilityId}")
    public ResponseEntity<List<DoctorWithAvailableHours>> getDoctorsForFacility(@PathVariable Long facilityId,
                                                                                @RequestParam String date) {
        return ResponseEntity.ok(doctorService.findDoctorsByFacilityIdAvailableForGivenDay(facilityId, LocalDate.parse(date)));
    }
}
