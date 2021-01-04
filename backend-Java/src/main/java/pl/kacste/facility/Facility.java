package pl.kacste.facility;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import pl.kacste.doctor.Doctor;

import javax.persistence.*;
import java.util.Set;

import static org.hibernate.annotations.FetchMode.SELECT;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Facility {
    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String street;
    private String postalCode;
    private String city;
    private String phoneNumber;

    @OneToMany(mappedBy = "facility")
    @Fetch(value = SELECT)
    @JsonIgnore
    private Set<Doctor> doctors;
}
