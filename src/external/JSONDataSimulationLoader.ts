//TODO parametrise the input of the file to better test
import dataSimulation from '../../data_simulation.json';
import { Virus } from '../domain/Virus';
import { Patient } from '../domain/Patient';
import { Desease } from '../domain/Desease';
import { DataSimulationLoader } from '../domain/DataSimulationLoader';

//TODO use a CDI(Context and Dependency Injection) JS framework to inject this
export class JSONDataSimulationLoader implements DataSimulationLoader {

    private _virus : Virus[] = null;
    private _patients : Patient[] = null;
 
    public loadVirus() : Virus[] {
        if (this._virus != null) {
            return this._virus;
        }
         this._virus = dataSimulation.virus.map(virus => {
            return new Virus(virus.name, virus.infectRatePercentage);
        });
        return this._virus;
    }

    public loadPatients() : Patient[] {
        if (this._patients != null) {
            return this._patients;
        }
        this._patients = new Array<Patient>()
        dataSimulation.patients.forEach(patientConfig => {
            for (let index = 0; index < patientConfig.totalNumber; index++) {
                this._patients.push(this.buildPatientWithDisease(patientConfig, index));
            } 
        });
        return this._patients;
    }

    private buildPatientWithDisease(patientConfig, index) : Patient {
        const name = `${patientConfig.prefixName} [${index}]`;
        const patient = new Patient(name, patientConfig.age);
        if (patientConfig.diseases != null) {
            patientConfig.diseases.forEach(disease => {
                patient.addDesease(
                    new Desease(disease.name,
                        disease.complicationRatePercentage));
            });
        }
        return patient;
    }
}