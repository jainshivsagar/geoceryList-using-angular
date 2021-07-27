export class Item{
    private _id:number;
    private _name:string;
    private _units:number;
    private _pricePerUnit:number;


	constructor(){
		this._id=0;//defau
		this._name="";
		this._units=0;
		this._pricePerUnit=0;
	}
    
	public get id(): number { 
		return this._id;
	}

	public set id(value: number) {
		this._id = value;
	}

	public get name(): string {
		return this._name;
	}

	public set name(value: string) {

		this._name = value;
	}

	public get units(): number {
		return this._units;
	}

	public set units(value: number) {
		this._units = value;
	}

	public get pricePerUnit(): number {
		return this._pricePerUnit;
	}

	public set pricePerUnit(value: number) {
		this._pricePerUnit = value;
	}

	public get getTotal():number{
        return this._units*this._pricePerUnit;
    }
}