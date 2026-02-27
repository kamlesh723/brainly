import mongoose, {model, Schema} from 'mongoose';

mongoose.connect("mongodb+srv://kamlesh-db-user:admin123@cluster0.wnyvkq8.mongodb.net/brainly")
const UserSchema = new Schema({
    username:{type:String, unique:true},
    password:String
})

export const UserModel = model("User",UserSchema,);

