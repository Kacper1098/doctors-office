using System;
using DoctorsOffice.DbModels;

namespace DoctorsOffice.Dto
{
    public class VisitCreate
    {
        public DateTime DateTime { get; set; }
        public string DoctorId { get; set; }
        public Patient Patient { get; set; }
        public int FacilityId { get; set; }
    }
}