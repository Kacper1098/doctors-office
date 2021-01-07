using System;
using DoctorsOffice.Doctors;
using DoctorsOffice.Facilities;
using DoctorsOffice.Patients;

namespace DoctorsOffice.Visits
{
    public class Visit
    {
        public int Id { get; set; }
        public DateTime DateTime { get; set; }
        public Patient Patient { get; set; }
        public Doctor Doctor { get; set; }
        public Facility Facility { get; set; }
    }
}