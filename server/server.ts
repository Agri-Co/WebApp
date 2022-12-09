import express, { Express, Request, Response } from "express";
import Db from "./db/db";
import meteo from "./routes/meteo";

class Server {
  constructor(port: number, host: string, method: string) {
    this.port = port;
    this.host = host;
    this.method = method;
    this._db = new Db();
    this._app = express();
    this._app.use(express.json());
    this.applyRoutes();
  }

  private applyRoutes(): void {
    this._app.get("/", (req: Request, res: Response) =>
      res.status(200).send("Up")
    );
    this._app.use("/meteo", meteo);
    this._app.use("*", (req: Request, res: Response) =>
      res.status(404).send("Not found")
    );
  }

  public async registerUser(username: string, password: string) {
    try {
      await this._db.registerUsertoDB(username, password);
    } catch (error) {
      console.log(error);
    }
  }

  public async initdb() {
    try {
      await this._db.run();
    } catch {
      console.log("Connection to the database failed.");
    }
  }

  public run(): void {
    this._app.listen(this.port, () => {
      console.log(
        "Listening on",
        this.method + "://" + this.host + ":" + this.port
      );
    });
  }

  private readonly port: number;
  private readonly host: string;
  private readonly method: string;
  private readonly _app: Express;
  private readonly _db: Db;
}

export default Server;
