import mongoose from "mongoose";

 export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://yogaserver:BZ9i69jN7xw6BQjj@cluster0.3k9a0al.mongodb.net/food_order').then(()=>console.log("DB Connected"))
}
