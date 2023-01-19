import "reflect-metadata"
import app from "./apps"
import { AppDataSource } from "./databases/db"

async function main(){
    try {
        await AppDataSource.initialize();
        console.log("database conected");
        app.listen(3000)
        console.log("server is listening on port",3000)
    } catch (error) {
        console.log(error);
    }
   
}

main()