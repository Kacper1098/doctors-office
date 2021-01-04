using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace DoctorsOffice.DbModels
{
    public class Facility
    {
        public int Id { get; set; }
        [MaxLength(100)] 
        public string Name { get; set; }
        public string Street { get; set; }
        public string PostalCode { get; set; }
        public string City { get; set; }
        public string PhoneNumber { get; set; }
        
        [JsonIgnore]
        public ICollection<Doctor> Doctors { get; set; }
    }
}