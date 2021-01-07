using System.Collections.Generic;
using System.Linq;
using DoctorsOffice.Db;

namespace DoctorsOffice.Facilities
{
    public class FacilityRepository
    {
        private readonly MyDbContext _context;

        public FacilityRepository(MyDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Facility> FindAll()
        {
            return _context.Facilities;
        }

        public Facility FindById(int id)
        {
            return _context.Facilities.First(facility => facility.Id == id);
        }
    }
}