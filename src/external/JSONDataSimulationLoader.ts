//TODO parametrise the input of the file to better test
import dataSimulation from '../../data_simulation.json';
import { Virus } from '../domain/Virus';
import { Patient } from '../domain/Patient';
import { Desease } from '../domain/Desease';
import { DataSimulationLoader } from '../domain/DataSimulationLoader';

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
                this._patients.push(this.buildPatientWithDesease(patientConfig, index));
            } 
        });
        return this._patients;
    }

    private buildPatientWithDesease(patientConfig, index) : Patient {
        var name =`${patientConfig.prefixName} [${index}]`;
        var patient = new Patient(name, patientConfig.age);
        if (patientConfig.diseases != null) {
            patientConfig.diseases.forEach(desease => {
                patient.addDesease(
                    new Desease(desease.name,
                        desease.complicationRatePercentage));
            });
        }
        return patient;
    }
}