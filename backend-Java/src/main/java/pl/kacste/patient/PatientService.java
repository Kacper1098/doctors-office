package pl.kacste.patient;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;

@Service
@RequiredArgsConstructor
class PatientService {

    private final PatientRepository patientRepository;

    public String createPatient(Patient patient){
        return patientRepository.save(patient).getIdentityNumber();
    }

    public Patient findOne(String identityNumber){
        return patientRepository
                .findById(identityNumber)
                .orElseThrow(() -> new EntityNotFoundException("Could not found patient with idenity number " + identityNumber));
    }
}
