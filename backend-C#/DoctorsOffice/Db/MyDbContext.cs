using Microsoft.EntityFrameworkCore;
using DoctorsOffice.Doctors;
using DoctorsOffice.Facilities;
using DoctorsOffice.Patients;
using DoctorsOffice.Schedules;
using DoctorsOffice.Visits;

namespace DoctorsOffice.Db
{
    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {
        }

        public DbSet<Doctor> Doctors { get; set; }
        public DbSet<Facility> Facilities { get; set; }
        public DbSet<Patient> Patients { get; set; }
        public DbSet<Schedule> Schedules { get; set; }
        public DbSet<Visit> Visits { get; set; }
    }
}