using System;
using System.ComponentModel.DataAnnotations;

namespace DoctorsOffice.Patients
{
    public class Patient
    {
        [Key]
        public string IdentityNumber { get; set; }
        
        
        
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public string PostalCode { get; set; }
        public string City { get; set; }
        public string Street { get; set; }
    }
}