
namespace DoctorsOffice.Patients
{
    public class PatientService
    {
        private readonly PatientRepository _patientRepository;

        public PatientService(PatientRepository patientRepository)
        {
            _patientRepository = patientRepository;
        }

        public string CreatePatient(Patient patient)
        {
            return _patientRepository.Save(patient).IdentityNumber;
        }

        public Patient FindOne(string identityNumber)
        {
            return _patientRepository.FindById(identityNumber);
        }
    }
}