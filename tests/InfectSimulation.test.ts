import {expect} from "chai";
import {infectPatient} from "../src/domain/InfectSimulation";
import {Virus} from "../src/domain/Virus";
import {Patient} from "../src/domain/Patient";

describe('Given a infect simulation', () => {

    let virus = new Virus("test", 0.2);
    let patient = new Patient("John Snow", 82)
    it('should load all the virus', () => {
        infectPatient(patient, virus);
    });
});