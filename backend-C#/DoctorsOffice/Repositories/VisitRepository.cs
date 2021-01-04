using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using DoctorsOffice.DbModels;
using Microsoft.EntityFrameworkCore;

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
            var addedVisit = _context.Visits.Add(visit).Entity;
            _context.SaveChanges();
            return addedVisit;
        }

        public List<Visit> FindForPatient(string identityNumber, string firstName, string lastName)
        {
            return _context.Visits
                .Include(v => v.Doctor)
                .Include(v => v.Facility)
                .Include(v => v.Patient)
                .Where(visit =>
                    visit.Patient.IdentityNumber == identityNumber &&
                    visit.Patient.FirstName == firstName &&
                    visit.Patient.LastName == lastName)
                .ToList();
        }
    }
}