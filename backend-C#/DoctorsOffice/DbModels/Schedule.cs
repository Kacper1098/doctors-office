using System;
using System.Text.Json.Serialization;

namespace DoctorsOffice.DbModels
{
    public class Schedule
    {
        public int Id { get; set; }
        
        public DateTime Date { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        
        [JsonIgnore]
        public Doctor Doctor { get; set; }

    }
}