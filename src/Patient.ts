import { Desease } from "./Desease";

export class Patient {
    private _name : string;
    private _age : number = 0;
    private _deseases : Array<Desease> = new Array();

   constructor(nameArg : string, ageArg : number) {
    this._name = nameArg;
    this._age = ageArg;
   }

   public addDesease(pathology : Desease ) {
    this._deseases.push(pathology);
   }

	public get age(): number  {
		return this._age;
    }
    
	public get name(): string {
		return this._name;
    }
    
	public get deseases(): Array<Desease>  {
		return this._deseases;
	}
}