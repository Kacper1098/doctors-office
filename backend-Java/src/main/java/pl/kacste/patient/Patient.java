package pl.damkac.patient;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Patient {
    @Id
    private String identityNumber;

    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String postalCode;
    private String city;
    private String street;
}
