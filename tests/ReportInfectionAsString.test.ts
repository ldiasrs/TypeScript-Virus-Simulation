import { expect } from 'chai';
import 'mocha';
import { Patient } from '../src/domain/Patient';
import {Virus} from "../src/domain/Virus";
import {HospitalEnvironmentDefault} from "../src/domain/HospitalEnvironmentDefault";
import {ReportInfectionAsString} from "../src/domain/ReportInfectionAsString";

describe('Given a report simulation', () => {
    let virusA = new Virus("test", 0.2)
    let patientA = new Patient("John Snow A", 50);
    let patientB = new Patient("John Snow B", 81);
    let patientC = new Patient("John Snow C", 82);
    let patients = [patientA, patientB, patientC];
    let he = new HospitalEnvironmentDefault();
    he.addPatients(patients);
    he.infect(virusA);
    it('should build report', () => {
        let report = new ReportInfectionAsString(he);
        //TODO improve this test with mock and better asserts
        expect(report.buildReport()).contain("Infected patients");
    });
});