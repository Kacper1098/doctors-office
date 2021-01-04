package pl.kacste.visit;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import pl.kacste.patient.Patient;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VisitCreateDTO {
    private LocalDateTime dateTime;
    private String doctorId;
    private Patient patient;
    private Long facilityId;
}
