using System;

namespace DoctorsOffice.DbModels
{
    public class Schedule
    {
        public int Id { get; set; }
        
        public DateTime Date { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }

        public Doctor Doctor { get; set; }

    }
}