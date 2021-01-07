using System.Collections;
using System.Collections.Generic;

namespace DoctorsOffice.Doctors
{
    public class DoctorWithAvailableHours
    {
        public Doctor Doctor { get; set; }
        public List<string> AvailableHours { get; set; }
    }
}