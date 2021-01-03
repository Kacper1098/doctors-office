package pl.damkac.visit;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import pl.damkac.doctor.Doctor;
import pl.damkac.facility.Facility;
import pl.damkac.patient.Patient;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import java.time.LocalDateTime;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Visit {
    @Id
    @GeneratedValue
    private Long id;

    private LocalDateTime dateTime;

    @OneToOne
    private Patient patient;

    @OneToOne
    private Doctor doctor;

    @OneToOne
    private Facility facility;
}
