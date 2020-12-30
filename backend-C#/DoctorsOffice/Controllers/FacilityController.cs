using System.Collections.Generic;
using DoctorsOffice.DbModels;
using DoctorsOffice.Services;
using Microsoft.AspNetCore.Mvc;

namespace DoctorsOffice.Controllers
{
    [Route("[controller]")]
    public class FacilityController : Controller
    {
        private readonly FacilityService _facilityService;

        public FacilityController(FacilityService facilityService)
        {
            _facilityService = facilityService;
        }
        public List<Facility> GetAll()
        {
            return _facilityService.GetAll();
        } 
    }
}