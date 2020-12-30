package pl.damkac.visit;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.List;

interface VisitRepository extends JpaRepository<Visit, Long> {

    @Query("select v from Visit v where v.doctor.pwz = :pwz and v.dateTime > :dateFrom and v.dateTime < :dateTo")
    List<Visit> finaAllByDoctorPwzAndDates(String pwz, LocalDateTime dateFrom, LocalDateTime dateTo);

    @Query("SELECT v from Visit v where v.patient.identityNumber = :identityNumber and v.patient.firstName = :firstName and v.patient.lastName = :lastName")
    List<Visit> findForPatient(String identityNumber, String firstName, String lastName);
}
