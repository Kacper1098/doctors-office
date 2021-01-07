using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoctorsOffice.Facilities;
using DoctorsOffice.Schedules;

namespace DoctorsOffice.Doctors
{
    public class Doctor
    {
        [Key] 
        public string Pwz { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string PhoneNumber { get; set; }

        [JsonIgnore]
        public Facility Facility { get; set; }
        
        [JsonIgnore]
        public ICollection<Schedule> Schedules { get; set; }
    }
}