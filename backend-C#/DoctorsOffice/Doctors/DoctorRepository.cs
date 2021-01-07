using System.Collections.Generic;
using System.Linq;
using DoctorsOffice.Db;

namespace DoctorsOffice.Doctors
{
    public class DoctorRepository
    {
        private readonly MyDbContext _context;
        public DoctorRepository(MyDbContext context)
        {
            _context = context;
        }
        public List<Doctor> FindAllByFacilityId(int facilityId)
        {
            return _context.Doctors
                .Where(doctor => doctor.Facility.Id == facilityId)
                .ToList();
        }
        public Doctor FindById(string id)
        {
            return _context.Doctors.First(doctor => doctor.Pwz == id);
        }
    }
}