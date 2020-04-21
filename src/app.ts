
import { HospitalDeClinicasEnvironment } from './HospitalDeClinicasEnvironment';
import {JSONDataSimulationLoader} from "./external/JSONDataSimulationLoader";
const dataSimulation = new JSONDataSimulationLoader();

let patients = dataSimulation.loadPatients();
let virusList = dataSimulation.loadVirus();
const hospital = new HospitalDeClinicasEnvironment();
hospital.addPatients(patients);
virusList.forEach(virus => {
    hospital.infect(virus);
});
console.log(hospital.infectedPatients())
console.log("END")
