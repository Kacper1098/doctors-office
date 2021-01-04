package pl.kacste.patient;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/patient")
@RequiredArgsConstructor
class PatientController {

    private final PatientService patientService;

    @PostMapping
    public ResponseEntity<String> create(@RequestBody Patient patient){
        return ResponseEntity.ok(patientService.createPatient(patient));
    }

    @GetMapping("{identityNumber}")
    public ResponseEntity<Patient> getOne(@PathVariable String identityNumber){
        return ResponseEntity.ok(patientService.findOne(identityNumber));
    }
}
