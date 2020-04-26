//TODO make the testing work with sub folders
import {expect} from "chai";
import {infectPatient, incrementInfectionRateByAge} from "../src/domain/InfectSimulation";
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

describe('Given age specification to increment infection rate', () => {
    it('should right increment infection rate <= 70', () => {
        let infectResult = incrementInfectionRateByAge(70);
        expect(infectResult).eq(0);
    });
    it('should right increment infection rate > 70', () => {
        let infectResult = incrementInfectionRateByAge(71);
        expect(infectResult).eq(0.229);
    });
    it('should right increment infection rate = 80', () => {
        let infectResult = incrementInfectionRateByAge(80);
        expect(infectResult).eq(0.229);
    });
    it('should right increment infection rate > 80', () => {
        let infectResult = incrementInfectionRateByAge(81);
        expect(infectResult).eq(0.35);
    });
});