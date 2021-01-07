using System.Collections.Generic;
using DoctorsOffice.Visits;
using Microsoft.AspNetCore.Mvc;

namespace DoctorsOffice.Controllers
{
    [Route("[controller]")]
    public class VisitController : Controller
    {
        private readonly VisitService _visitService;

        public VisitController(VisitService visitService)
        {
            _visitService = visitService;
        }

        [HttpPost]
        public int CreateVisit([FromBody] VisitCreate visitCreate)
        {
            return _visitService.CreateVisit(visitCreate);
        }

        [HttpGet]
        public List<Visit> GetVisitsForPatient(string identityNumber, string firstName, string lastName)
        {
            return _visitService.GetVisitsForPatient(identityNumber, firstName, lastName);
        }
    }
}