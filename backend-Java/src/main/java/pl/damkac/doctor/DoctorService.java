package pl.damkac.doctor;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.damkac.visit.Visit;
import pl.damkac.visit.VisitService;

import java.time.LocalDate;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
class DoctorService {

    private final DoctorRepository doctorRepository;
    private final VisitService visitService;

    public List<DoctorWithAvailableHours> findDoctorsByFacilityIdAvailableForGivenDay(Long facilityId, LocalDate date) {
        return doctorRepository
                .findAllByFacilityId(facilityId)
                .orElseThrow(() -> new NoSuchElementException("Could not found doctors for facility with id " + facilityId))
                .stream()
                .map(doctor -> getDoctorWithAvailableDaysForGivenDate(doctor, date))
                .collect(Collectors.toList());
    }

    public DoctorWithAvailableHours getDoctorWithAvailableDaysForGivenDate(Doctor doctor, LocalDate date){
        List<Visit> visitsForDoctor = visitService.getVisitsForDoctor(doctor.getPwz(), date);

        if(visitsForDoctor.isEmpty()){
            return DoctorWithAvailableHours
                    .builder()
                    .doctor(doctor)
                    .availableHours(visitService.createNoVisitHours())
                    .build();
        }
        else {
            return DoctorWithAvailableHours
                    .builder()
                    .doctor(doctor)
                    .availableHours(visitService.availableHoursFromGivenVisits(visitsForDoctor))
                    .build();
        }

    }
}
