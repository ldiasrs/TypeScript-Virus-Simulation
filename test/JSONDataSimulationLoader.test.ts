import { expect } from 'chai';
import 'mocha';
import { JSONDataSimulationLoader } from '../src/external/JSONDataSimulationLoader';
import { Virus } from '../src/domain/Virus';

describe('Given a JSON file loaded', () => {
    let dataLoader = new JSONDataSimulationLoader();
    it('should load all the virus', () => {
        let virus = dataLoader.loadVirus();
        expect(virus.length).to.equal(1);
    });
    it('should have the right virus definition', () => {
        let virus = dataLoader.loadVirus();
        expect(virus[0].name).to.equal("TSCRIPTVID-2020");
        expect(virus[0].infectionRate).to.equal(0.2);
    });
    it('should load all the patients', () => {
        let patients = dataLoader.loadPatients();
        expect(patients.length).to.equal(200);
    });
});