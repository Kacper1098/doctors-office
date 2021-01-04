package pl.kacste.doctor;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Fetch;
import pl.kacste.facility.Facility;
import pl.kacste.schedule.Schedule;

import javax.persistence.*;
import java.util.Set;

import static org.hibernate.annotations.FetchMode.SELECT;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Doctor {

    @Id
    private String pwz;

    private String firstName;
    private String lastName;
    private String phoneNumber;

    @ManyToOne(cascade = CascadeType.ALL)
    @Fetch(value = SELECT)
    @JoinColumn(name = "facility_id")
    private Facility facility;

    @OneToMany(mappedBy = "doctor")
    @Fetch(value = SELECT)
    @JsonIgnore
    private Set<Schedule> schedules;
}
