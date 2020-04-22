
import { HospitalDeClinicasEnvironment } from './HospitalDeClinicasEnvironment';
import {JSONDataSimulationLoader} from "./external/JSONDataSimulationLoader";
const dataSimulation = new JSONDataSimulationLoader();

let patients = dataSimulation.loadPatients();
console.log("Number of patients: "  + patients.length)
let virusList = dataSimulation.loadVirus();
const hospital = new HospitalDeClinicasEnvironment();
hospital.addPatients(patients);
virusList.forEach(virus => {
    console.log("Processing infecting virus: " + virus.name)
    hospital.infect(virus);
});
console.log(hospital.infectedPatients())
console.log("END")
