//TODO make the testing work with sub folders
import {expect} from "chai";
import {infectPatient} from "../src/domain/InfectSimulation";
import {Virus} from "../src/domain/Virus";
import {Patient} from "../src/domain/Patient";

describe('Given a infect simulation with 100%', () => {
    let virus = new Virus("test", 1);
    let patient = new Patient("John Snow", 82)
    it('should infect patient', () => {
        let infectResult = infectPatient(patient, virus);
        expect(infectResult).eq(true);
    });
});