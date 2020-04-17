# TypeScript-Virus-Simulation
A TypeScript study project to simulate a virus infecting in hospital patients

- Criar uma classe Vírus que tem um nome e uma probabilidade de infecção (Ex: TSCRIPTVID-2020)
- Criar uma classe Paciente que tem Nome, idade e uma lista de patologias (Ex: John Snow, 82)
- Uma Doeça tem um nome e uma taxa de risco complicador (Diabetes, 8.8%)
- Criar uma interface AmbienteHospitalar com os seguintes métodos
- --- Adicionar paciente com suas patologias (Adiciona pacientes)
- --- Gerar infecções recebendo um Virus como parâmetro (Define se um paciente será contaminado ou não)
- Relatório de contaminação
- Deve mostrar um relatório de todos os pacientes contaminados pelo virus em questão e suas patologias idades
- Deve mostrar a taxa de contaminação geral
- Criar uma implementação da interface AmbienteHospitalar chamada HospitalDeClinicas
- Implementar gerar infecções com as seguintes características
- Para cada paciente definir se será contaminado ou não
- Exemplo de como funciona a contaminação:
- Vírus "Gripe" probabilidade de infecção 43.9%
- Então adicionar esta probabilidade de virus infectar
- Se paciente maior que 70 anos adicionar 22.9%
- Então adicionar esta probabilidade de virus infectar
- Se paciente tiver Patologias exe: Turbeculose 5.8%
- Então adicionar esta probabilidade de virus infectar


Requisitos

Montar um conjunto de 2000 pacientes
Com 10 patologias e taxas complicadas realistas
Com um Virus chamado "CUZAOVID-29" taxa: 2%
Gerar um relatório para essa entrada em print 
