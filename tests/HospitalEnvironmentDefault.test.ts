import sinon from 'sinon';
import * as infectPatient from "../src/domain/InfectSimulation";
import { HospitalEnvironmentDefault } from '../src/domain/HospitalEnvironmentDefault';
import { expect } from 'chai';
import 'mocha';
import { Patient } from '../src/domain/Patient';
import {Virus} from "../src/domain/Virus";

describe('Given a Hospital', () => {
  const stubInfect = sinon.stub(infectPatient, "infectPatient")
  let patientA = new Patient("John Snow A", 80);
  let patientB = new Patient("John Snow B", 81);
  let patientC = new Patient("John Snow C", 82);
  let patients = [patientA, patientB, patientC];
  it('should add single patients', () => {
    const hospital = new HospitalEnvironmentDefault();
    hospital
        .addPatient(patientA)
        .addPatient(patientB)
        .addPatient(patientC);
    expect(hospital.allPatients().length).to.equal(3);
  });
  it('should multiple single patients', () => {
    const hospital = new HospitalEnvironmentDefault();
    hospital.addPatients(patients)
    expect(hospital.allPatients().length).to.equal(3);
  });
  it('should infect with virus all the patients', () => {
    const hospital = new HospitalEnvironmentDefault();
    hospital.addPatients(patients)
    let virus = new Virus("test", 0.2);
    hospital.infect(virus)
    expect(stubInfect.calledWith(patientA, virus)).eq(true)
    expect(stubInfect.calledWith(patientB, virus)).eq(true)
    expect(stubInfect.calledWith(patientC, virus)).eq(true)
    expect(stubInfect.callCount).eq(3)
    //restoring the stub to other testings work
    stubInfect.restore();
  });
});