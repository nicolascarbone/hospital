
import * as patientConstants from 'constants/patient.constants';

class PatientsController {
  
  // move into a patients service
  $onInit() {

    this.patients = this
      .FirebaseService
      .getFromCollection(this.patientsCol);

  }

  constructor(FirebaseService) {
    
    'ngInject';

    this.name = 'patients';

    this.patientsCol = patientConstants.PATIENTS_COLLECTION_NAME;
    
    this.FirebaseService = FirebaseService;

  }

}

export default PatientsController;
