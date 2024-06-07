import mongoose from "mongoose";

type Connection = {
    connection :{
     isConnection: boolean;
    }
}
export const dbConnect = async () => {
  const connection: any = {};

  if (connection?.isConnected) {
    console.log("Already connected to the database");
    return;
  }

  try {
    mongoose.connect(process.env.MONGO_URI!).then((db) => {
      connection.isConnected = db.connections[0].readyState;
      console.log('connection: ', connection);
      console.log("Database connected successfully");
    });
  } catch (error) {
    console.log("Database connection failed: ", error);
    process.exit(1);
  }
};

export default dbConnect;