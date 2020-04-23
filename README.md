# TypeScript-Virus-Simulation

A TypeScript study project to simulate patients virus infecting in hospital 

## How to use

### 1) Prepare the input data
- Edit data simulation input file (**_data_simulation.json_**)
- Inform the types (age and prefix name) of patients
- Inform how many should be created
- Inform the diseases that the type will have
- You can create how many types you wish

**Example:**

```
{
    "virus" : [
        {
            "name" : "TSCRIPTVID-2020",
            "infectRatePercentage" : 0.2
        }
    ],
    "patients" : [
        {
            "totalNumber" : 100,
            "prefixName" : "Patient with 82 years old",
            "age" : 82,
            "diseases" : [
                {
                    "name" : "Diabetes",
                    "complicationRatePercentage" : 0.2
                }
            ]
        },
        {
            "totalNumber" : 50,
            "prefixName" : "Patient with 56 years old",
            "age" : 56,
            "diseases" : [
                {
                    "name" : "Diabetes",
                    "complicationRatePercentage" : 0.2
                }
            ]
        },
        {
            "totalNumber" : 50,
            "prefixName" : "Patient with 45 years old",
            "age" : 45
        }
    ]
}
```

### 2) Run the simulation
```
npm start
```
**Output example:**
```
Simulation report of infection
* Virus: {"_name":"TSCRIPTVID-2020","_infectionRate":0.2}
* Total patients: 200
* Not infected patients: 84 (42%)
* Infected patients: 116 (57%)
* ---- age > 70: 78 (67%)
* ---- age < 70: 38 (32%)
END

```

## Specification

 Create a virus class with a name and a probability of infection (eg: TSCRIPTVID-2020)
- Create a Patient class with name, age and a list of diseases (Ex: John Snow, 82)
- A disease has a name and a complicating risk rate (eg: Diabetes, 8.8%)
- Create a HospitalEnvironment interface with the following methods
- --- Add patients with their diseases
- --- Generate infections by receiving a virus as a parameter (Will define if the patients will be infected or not)
- Must show a report of all patients infected by the virus
- Must show general contamination rates
- Create an implementation of the HospitalEnvironment interface called HospitalEnvironmentDefault
- Implementation should have the following characteristics:
- For each patient, define whether to be contaminated or not
- Example of how contamination works:
- "Flu" virus probability of infection 43.9%
- Then add this probability of virus infection
- If patient older than 70 years add 22.9%
- Then add this probability of virus infection
- If patient has diseases eg: Diabetes 5.8%
- Then add this probability of virus infection
