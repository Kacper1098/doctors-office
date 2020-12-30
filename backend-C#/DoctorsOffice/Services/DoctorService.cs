using System;
using System.Collections.Generic;
using System.Linq;
using DoctorsOffice.DbModels;
using DoctorsOffice.Dto;
using DoctorsOffice.Repositories;

namespace DoctorsOffice.Services
{
    public class DoctorService 
    {
        private readonly DoctorRepository _doctorRepository;
        private readonly VisitService _visitService;

        public DoctorService(DoctorRepository doctorRepository, VisitService visitService)
        {
            _doctorRepository = doctorRepository;
            _visitService = visitService;
        }
        
        public List<DoctorWithAvailableHours> FindDoctorsByFacilityIdAvailableForGivenDay(int facilityId, DateTime date)
        {
            return _doctorRepository
                .FindAllByFacilityId(facilityId)
                .Select(doctor => GetDoctorWithAvailableDaysForGivenDate(doctor, date))
                .ToList();
        }


        private DoctorWithAvailableHours GetDoctorWithAvailableDaysForGivenDate(Doctor doctor, DateTime date)
        {
            var visitsForDoctor = _visitService.GetVisitsForDoctor(doctor.Pwz, date);

            if (visitsForDoctor.Count == 0)
            {
                return new DoctorWithAvailableHours()
                    {Doctor = doctor, AvailableHours = _visitService.CreateNoVisitHours()};
            }
            else
            {
                return new DoctorWithAvailableHours()
                {
                    Doctor = doctor,
                    AvailableHours = _visitService.AvailableHoursFromGivenVisits(visitsForDoctor)
                };
            }
        }
    }
}