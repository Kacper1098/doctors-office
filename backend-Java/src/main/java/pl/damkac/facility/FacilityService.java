package pl.damkac.facility;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
class FacilityService {

    private final FacilityRepository facilityRepository;

    public List<Facility> getAll(){
        return  facilityRepository.findAll();
    }
}
