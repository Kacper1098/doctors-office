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
            return _context.Patients.Add(patient).Entity;
        }

        public Patient FindById(string id)
        {
            return _context.Patients.First(patient => patient.IdentityNumber == id);
        }
    }
}