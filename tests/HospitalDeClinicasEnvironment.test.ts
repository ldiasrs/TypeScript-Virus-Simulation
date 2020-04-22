import sinon from 'sinon';
import * as infectPatient from "../src/domain/InfectSimulation";
import { HospitalDeClinicasEnvironment } from '../src/HospitalDeClinicasEnvironment';
import { expect } from 'chai';
import 'mocha';
import { Patient } from '../src/domain/Patient';
import {Virus} from "../src/domain/Virus";


describe('Given a Hospital', () => {
  const stubInfect = sinon.stub(infectPatient, "infectPatient")
  let patientA = new Patient("John Snow A", 80);
  let patientB = new Patient("John Snow B", 81);
  let patientC = new Patient("John Snow C", 82);
  const hospital = new HospitalDeClinicasEnvironment();
  hospital
      .addPatient(patientA)
      .addPatient(patientB)
      .addPatient(patientC);
  it('should add patients', () => {
    expect(hospital.allPatients().length).to.equal(3);
  });
  it('should infect with virus all the patients', () => {
    let virus = new Virus("test", 0.2);
    hospital.infect(virus)
    expect(stubInfect.calledWith(patientA, virus)).eq(true)
    expect(stubInfect.calledWith(patientB, virus)).eq(true)
    expect(stubInfect.calledWith(patientC, virus)).eq(true)
  });
});