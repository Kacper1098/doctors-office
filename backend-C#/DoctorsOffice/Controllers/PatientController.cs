using DoctorsOffice.DbModels;
using DoctorsOffice.Services;
using Microsoft.AspNetCore.Mvc;

namespace DoctorsOffice.Controllers
{
    [Route("[controller]")]
    public class PatientController : Controller
    {
        private readonly PatientService _patientService;

        public PatientController(PatientService patientService)
        {
            _patientService = patientService;
        }
        
        [HttpPost]
        public string Create([FromBody]Patient patient)
        {
            return _patientService.CreatePatient(patient);
        }


        [HttpGet("{identityNumber}")]
        public Patient GetOne(string identityNumber)
        {
            return _patientService.FindOne(identityNumber);
        }
    }
}