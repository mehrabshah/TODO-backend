import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Schema } from "@nestjs/mongoose";
@Schema({
   timestamps:true
})
export class Task {
   @Prop()
   name:string
   
   @Prop()
   status:string
    
   @Prop()
   date:Date
   
}
export const TaskSchema=SchemaFactory.createForClass(Task);