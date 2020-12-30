using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using DoctorsOffice.DbModels;

namespace DoctorsOffice.Repositories
{
    public class VisitRepository
    {
        private readonly MyDbContext _context;

        public VisitRepository(MyDbContext context)
        {
            _context = context;
        }

        public ICollection<Visit> FindAllByDoctorPwzAndDates(string pwz, DateTime dateFrom, DateTime dateTo)
        {
            return _context.Visits
                .Where(visit =>
                    visit.Doctor.Pwz == pwz && visit.DateTime > dateFrom && visit.DateTime < dateTo)
                .ToList();
        }

        public Visit Save(Visit visit)
        {
            return _context.Visits.Add(visit).Entity;
        }

        public List<Visit> FindForPatient(string identityNumber, string firstName, string lastName)
        {
            return _context.Visits
                .Where(visit =>
                    visit.Patient.IdentityNumber == identityNumber &&
                    visit.Patient.FirstName == firstName &&
                    visit.Patient.LastName == lastName)
                .ToList();
        }
    }
}