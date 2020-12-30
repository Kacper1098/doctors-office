using System;
using System.Collections.Generic;
using System.Linq;
using DoctorsOffice.DbModels;
using DoctorsOffice.Dto;
using DoctorsOffice.Repositories;

namespace DoctorsOffice.Services
{
    public class VisitService
    {
        private readonly VisitRepository _visitRepository;
        private readonly DoctorRepository _doctorRepository;
        private readonly PatientRepository _patientRepository;
        private readonly FacilityRepository _facilityRepository;

        public VisitService(VisitRepository visitRepository, FacilityRepository facilityRepository,
            PatientRepository patientRepository, DoctorRepository doctorRepository)
        {
            _visitRepository = visitRepository;
            _facilityRepository = facilityRepository;
            _patientRepository = patientRepository;
            _doctorRepository = doctorRepository;
        }

        private readonly List<string> _visitStartHours = new List<string>()
        {
            "8:00", "8:30",
            "9:00", "9:30",
            "10:00", "10:30",
            "11:00", "11:30",
            "12:00", "12:30",
            "13:00", "13:30",
            "14:00", "14:30",
            "15:00", "15:30"
        };

        private readonly List<string> _visitEndHours = new List<string>()
        {
            "8:30", "9:00",
            "9:30", "10:00",
            "10:30", "11:00",
            "11:30", "12:00",
            "12:30", "13:00",
            "13:30", "14:00",
            "14:30", "15:00",
            "15:30", "16:00"
        };

        public ICollection<Visit> GetVisitsForDoctor(string pwz, DateTime date)
        {
            return _visitRepository.FindAllByDoctorPwzAndDates(pwz, date.Date, date.Date.AddHours(23));
        }

        public List<string> CreateNoVisitHours()
        {
            return _visitStartHours
                .Select(visitStartHour =>
                {
                    var idx = _visitStartHours.IndexOf(visitStartHour);
                    return string.Concat(visitStartHour, "-", _visitEndHours[idx]);
                })
                .ToList();
        }

        public List<string> AvailableHoursFromGivenVisits(ICollection<Visit> visits)
        {
            var visitHours = visits.Select(visit =>
                    string
                        .Concat(visit.DateTime.Hour.ToString(), ":",
                            visit.DateTime.Minute == 0 ? "00" : visit.DateTime.Minute.ToString())
                )
                .ToList();

            return _visitStartHours
                .Select(visitStartHour =>
                {
                    var idx = _visitStartHours.IndexOf(visitStartHour);
                    return string.Concat(visitStartHour, "-", _visitEndHours[idx]);
                })
                .Where((visitHour => !visitHours.Contains(visitHour?.Split("-")[0])))
                .ToList();
        }

        public int CreateVisit(VisitCreate visitCreate)
        {
            return _visitRepository.Save(VisitCreateToVisit(visitCreate)).Id;
        }


        private Visit VisitCreateToVisit(VisitCreate visitCreate)
        {
            return new Visit
            {
                DateTime = visitCreate.DateTime, 
                Doctor = _doctorRepository.FindById(visitCreate.DoctorId),
                Patient = _patientRepository.Save(visitCreate.Patient),
                Facility = _facilityRepository.FindById(visitCreate.FacilityId)
            };
        }

        public List<Visit> GetVisitsForPatient(string identityNumber, string firstName, string lastName)
        {
            return _visitRepository.FindForPatient(identityNumber, firstName, lastName);
        }
    }
}