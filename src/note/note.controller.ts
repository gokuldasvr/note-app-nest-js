import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Note } from './dto/note.dto';
import { NoteService } from './note.service';

@Controller('note')
export class NoteController {

    constructor(
        private noteService:NoteService
    ){}

    @Get('getAll')
    async getAllNotes(){
        return {
            data: await this.noteService.getAll(),
        };
    }

    @Post('create')
    async createNote(@Body() note:Note)
    {
        return this.noteService.create(note);
    }

    @Put('update')
    async updateNote(@Body() note:Note){
        return  this.noteService.update(note);
    }

    @Delete('delete/:id')
    async deleteNote(@Param('id') id:string){
        if(!id)
        {
            return 'id required';
        }
        return {
            'status':await this.noteService.delete(id)
        };
    }
}
