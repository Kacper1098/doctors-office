using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DoctorsOffice.DbModels
{
    public class Doctor
    {
        [Key] 
        public string Pwz { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string PhoneNumber { get; set; }

        public Facility Facility { get; set; }

        public ICollection<Schedule> Schedules { get; set; }
    }
}