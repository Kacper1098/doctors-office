package pl.kacste.visit;

import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/visit")
@RequiredArgsConstructor
public class VisitController {

    private final VisitService visitService;

    @PostMapping
    public Long createVisit(@RequestBody @DateTimeFormat(pattern = "yyyy-MM-dd hh:mm") VisitCreateDTO visitCreateDTO){
        return visitService.createVisit(visitService.visitCreateToVisit(visitCreateDTO));
    }

    @GetMapping
    public ResponseEntity<List<Visit>> getVisitsForPatient(
            @RequestParam String identityNumber,
            @RequestParam String firstName,
            @RequestParam String lastName){
        return ResponseEntity.ok(visitService.getVisitsForPatient(identityNumber, firstName, lastName));
    }
}
