using System;
using System.Linq;
using DoctorsOffice.Doctors;
using Microsoft.AspNetCore.Mvc;

namespace DoctorsOffice.Controllers
{
    [Route("[controller]")]
    public class DoctorController : Controller
    {
        private readonly DoctorService _doctorService;

        public DoctorController(DoctorService doctorService)
        {
            _doctorService = doctorService;
        }
        
        
        [HttpGet("facility/{facilityId}")]
        public JsonResult GetDoctorsForFacility(int facilityId, string date)
        {
            return Json(_doctorService.FindDoctorsByFacilityIdAvailableForGivenDay(facilityId, DateTime.Parse(date)).ToList());
        }
    }
}