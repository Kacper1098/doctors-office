package pl.damkac.doctor;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface DoctorRepository extends JpaRepository<Doctor, String>{
     Optional<List<Doctor>> findAllByFacilityId(Long facilityId);
}
