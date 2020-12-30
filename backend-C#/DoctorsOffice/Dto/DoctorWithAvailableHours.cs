using System.Collections;
using System.Collections.Generic;
using DoctorsOffice.DbModels;

namespace DoctorsOffice.Dto
{
    public class DoctorWithAvailableHours
    {
        public Doctor Doctor { get; set; }
        public List<string> AvailableHours { get; set; }
    }
}