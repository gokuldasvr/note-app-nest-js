import { IsNotEmpty, IsString } from "class-validator";

export class Note{

    @IsString()
    @IsNotEmpty()
    _id:string;

    @IsString()
    @IsNotEmpty()
    title:string;

    @IsString()
    @IsNotEmpty()
    content:string;

    constructor(id:string,title:string,content:string)
    {
        this.title = title;
        this.content = content;
        this._id = id;
    }
}