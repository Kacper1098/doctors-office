using System.Collections.Generic;
using System.Linq;
using DoctorsOffice.DbModels;
using DoctorsOffice.Repositories;

namespace DoctorsOffice.Services
{
    public class FacilityService
    {
        private readonly FacilityRepository _facilityRepository;

        public FacilityService(FacilityRepository facilityRepository)
        {
            _facilityRepository = facilityRepository;
        }

        public List<Facility> GetAll()
        {
            return _facilityRepository.FindAll().ToList();
        }
    }
}