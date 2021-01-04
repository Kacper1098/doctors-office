package pl.kacste.doctor;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DoctorWithAvailableHours {
    private Doctor doctor;
    private List<String> availableHours;
}
