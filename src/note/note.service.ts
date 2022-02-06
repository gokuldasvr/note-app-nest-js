import { Injectable } from '@nestjs/common';
import { Note } from './dto/note.dto';

@Injectable()
export class NoteService {

    private noteList :Note[]=[];


    async create(value:Note):Promise<Note>{
        this.noteList.push(value);
        return value;
    }

    async getAll():Promise<Note[]>{
        return this.noteList;
    }

    async update(value:Note):Promise<Note>{
        this.noteList.forEach((note,index)=>{
            if(note._id === value._id)
            {
                this.noteList.splice(index,1);
            }
        });
        this.noteList.push(value);
        return value;
    }

    async delete(id:string):Promise<boolean>{
        this.noteList= this.noteList.filter((note)=>note._id !== id);
        return true;
    }
}
