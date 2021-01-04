package pl.kacste.visit;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pl.kacste.doctor.DoctorRepository;
import pl.kacste.facility.FacilityRepository;
import pl.kacste.patient.PatientRepository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class VisitService {

    private final VisitRepository visitRepository;
    private final DoctorRepository doctorRepository;
    private final FacilityRepository facilityRepository;
    private final PatientRepository patientRepository;

    private final List<String> visitStartHours =
            List.of("8:00", "8:30",
                    "9:00", "9:30",
                    "10:00", "10:30",
                    "11:00", "11:30",
                    "12:00", "12:30",
                    "13:00", "13:30",
                    "14:00", "14:30",
                    "15:00", "15:30");
    private final List<String> visitEndHours =
            List.of("8:30", "9:00",
                    "9:30", "10:00",
                    "10:30", "11:00",
                    "11:30", "12:00",
                    "12:30", "13:00",
                    "13:30", "14:00",
                    "14:30", "15:00",
                    "15:30", "16:00");

    public Long createVisit(Visit visit){
       return visitRepository.save(visit).getId();
    }

    public List<Visit> getVisitsForDoctor(String pwz, LocalDate date) {
        return visitRepository.finaAllByDoctorPwzAndDates(
                pwz,
                LocalDateTime.of(date, LocalTime.MIDNIGHT),
                LocalDateTime.of(date, LocalTime.MIDNIGHT).plus(23, ChronoUnit.HOURS));
    }

    public List<String> availableHoursFromGivenVisits(List<Visit> visits){
        List<String> visitHours = visits
                .stream()
                .map(visit -> new StringBuilder(String.valueOf(visit.getDateTime().getHour()))
                        .append(":")
                        .append(visit.getDateTime().getMinute() == 0 ? "00" : visit.getDateTime().getMinute())
                        .toString())
                .collect(Collectors.toList());



        return visitStartHours
                .stream()
                .map((visitStartHour) -> {
                    int idx = visitStartHours.indexOf(visitStartHour);
                    return visitStartHour.concat("-").concat(visitEndHours.get(idx));
                })
                .filter(visitHourConcat -> !visitHours.contains(visitHourConcat.split("-")[0]))
                .collect(Collectors.toList());
    }

    public List<String> createNoVisitHours(){
        return visitStartHours
                .stream()
                .map(visitStartHour -> {
                    int idx = visitStartHours.indexOf(visitStartHour);
                    return visitStartHour.concat("-").concat(visitEndHours.get(idx));
                })
                .collect(Collectors.toList());
    }

    public Visit visitCreateToVisit(VisitCreateDTO visitCreate){
        return Visit
                .builder()
                .dateTime(visitCreate.getDateTime())
                .doctor(doctorRepository.getOne(visitCreate.getDoctorId()))
                .patient(patientRepository.save(visitCreate.getPatient()))
                .facility(facilityRepository.getOne(visitCreate.getFacilityId()))
                .build();

    }

    public List<Visit> getVisitsForPatient(String identityNumber, String firstName, String lastName){
        return visitRepository.findForPatient(identityNumber, firstName, lastName);
    }
}
