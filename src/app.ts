
import { HospitalEnvironmentDefault } from './domain/HospitalEnvironmentDefault';
import {JSONDataSimulationLoader} from "./external/JSONDataSimulationLoader";
const dataSimulation = new JSONDataSimulationLoader();

console.log("\n" +
    "____   ____.__                        _________.__              .__          __  .__               \n" +
    "\\   \\ /   /|__|______ __ __  ______  /   _____/|__| _____  __ __|  | _____ _/  |_|__| ____   ____  \n" +
    " \\   Y   / |  \\_  __ \\  |  \\/  ___/  \\_____  \\ |  |/     \\|  |  \\  | \\__  \\\\   __\\  |/  _ \\ /    \\ \n" +
    "  \\     /  |  ||  | \\/  |  /\\___ \\   /        \\|  |  Y Y  \\  |  /  |__/ __ \\|  | |  (  <_> )   |  \\\n" +
    "   \\___/   |__||__|  |____//____  > /_______  /|__|__|_|  /____/|____(____  /__| |__|\\____/|___|  /\n" +
    "                                \\/          \\/          \\/                \\/                    \\/ \n")
let patients = dataSimulation.loadPatients();
console.log("* Number of patients: "  + patients.length)
let virusList = dataSimulation.loadVirus();
const hospital = new HospitalEnvironmentDefault();
hospital.addPatients(patients);
virusList.forEach(virus => {
    console.log("* Processing infecting virus: " + virus.name)
    hospital.infect(virus);
});
console.log("* Total infected patients: " + hospital.infectedPatients().length/2)
console.log("END")
