
import {Patient} from './Patient'
import { Virus } from './Virus';
import { Desease } from './Desease';
import { HospitalDeClinicasEnvironment } from './HospitalDeClinicasEnvironment';

let diabetes = new Desease("Diabetes", 0.3);
let hospitalEnv = new HospitalDeClinicasEnvironment();
for (let index = 0; index < 10000; index++) {
  let benjamim = new Patient("Benjamim Rola Veio" + index, 82);
  benjamim.addDesease(diabetes);
  hospitalEnv.addPatient(benjamim);
  hospitalEnv.addPatient(new Patient("Benjamim Rola Novinho" + index, 56));
}

hospitalEnv.infect(new Virus("CUZAO-29", 0.2));
console.log(hospitalEnv.infectedPatients().length/2)
