import { ITodo } from "./../types/todo"
import { model, Schema } from "mongoose"

const todoSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true, // TODO: FE when sends empty, app crashes
    },

    description: {
      type: String,
      required: true, // TODO: FE when sends empty, app crashes
    },

    status: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
)

export default model<ITodo>("Todo", todoSchema)