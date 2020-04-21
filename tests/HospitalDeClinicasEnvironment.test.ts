import { HospitalDeClinicasEnvironment } from '../src/HospitalDeClinicasEnvironment';
import { expect } from 'chai';
import 'mocha';
import { Patient } from '../src/domain/Patient';
import {Virus} from "../src/domain/Virus";
 
describe('Given a Hospital', () => {
  let patientA = new Patient("John Snow A", 80);
  let patientB = new Patient("John Snow B", 81);
  let patientC = new Patient("John Snow C", 82);
  const hospital = new HospitalDeClinicasEnvironment();
  it('should add patients', () => {
    hospital
      .addPatient(patientA)
      .addPatient(patientB)
      .addPatient(patientC);
    expect(hospital.allPatients().length).to.equal(3);
  });
  it('should infect with virus', () => {
    let virus = new Virus("test", 0.2);
    expect(hospital.infect(virus));
  });
 
});