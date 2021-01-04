using System.Linq;
using DoctorsOffice.DbModels;

namespace DoctorsOffice.Repositories
{
    public class PatientRepository
    {
        private readonly MyDbContext _context;

        public PatientRepository(MyDbContext context)
        {
            _context = context;
        }

        public Patient Save(Patient patient)
        {
            var addedPatient = _context.Patients.Add(patient).Entity;
            _context.SaveChanges();
            return addedPatient;
        }

        public Patient FindById(string id)
        {
            return _context.Patients.First(patient => patient.IdentityNumber == id);
        }
    }
}