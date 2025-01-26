import { isBlanck, User, Position } from "..";
import { dbPool } from "../../db/config";
import bcryptjs from "bcryptjs";
export abstract class UserFuncs {
  static async FindUser({
    Email,
    Password,
  }: Omit<User, "ID" | "Position" | "Name">): Promise<User | null> {
    try {
      if (isBlanck(Email, Password)) throw new Error("String is blanck");
      const connection = await dbPool.connect();
      const data = await connection.query("select * from Password_User($1)", [
        Email,
      ]);
      connection.release();
      const { id, name, position } = data.rows[0];
      const Hash = data.rows[0].password;
      if (bcryptjs.compare(Password, Hash))
        return new User(id, name, position, Email);
      return null;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  static async CreateUser({
    Name,
    Email,
    Password,
  }: Omit<User, "ID" | "Position">): Promise<void> {
    try {
      if (isBlanck(Name, Email, Password)) throw new Error("String is blanck");
      const Hash = bcryptjs.hash(
        Password,
        Number.parseInt(process.env.hash_number)
      );
      const connection = await dbPool.connect();
      await connection.query("call Users('create',null,$1,$2,$3,'USER')", [
        Name,
        Email,
        Hash,
      ]);
      connection.release();
      return;
    } catch (err) {
      console.log(err);
      return;
    }
  }
  static async ListUsers({
    ID,
  }: Omit<User, "Name" | "Position">): Promise<User[]> {
    const connection = await dbPool.connect();
    const data = await connection.query("select * from Read_Users($1)", [
      `ID != ${ID}`,
    ]);
    connection.release();
    const Users: User[] = [];
    data.rows.map((row) => {
      Users.push(new User(row.id, row.name, row.position, row.email));
    });
    return Users;
  }
  static async EditPosition({
    ID,
    GET,
    Position,
  }: {
    ID: number;
    Position?: Position;
    GET?: boolean;
  }): Promise<User | null> {
    const connection = await dbPool.connect();
    if (GET) {
      try {
        const data = await connection.query("select * from Read_Users($1)", [
          `ID = ${ID}`,
        ]);
        connection.release();
        const { id, name, position } = data.rows[0];
        return new User(id, name, position);
      } catch (err) {
        console.log(err);
        throw new Error("EditUser err!");
      }
    }
    try {
      await connection.query("call Users('EditPosition',$1,'','','',$2)", [
        ID,
        Position,
      ]);
      connection.release();
      return null;
    } catch (err) {
      console.log(err);
      throw new Error("Update err in UserFuncs.EditPosition");
    }
  }
  static async EditUser({
    ID,
    Name,
    Password,
    Email,
  }: Omit<User, "Position">): Promise<void> {
    if (isBlanck(ID.toString(), Name, Password, Email))
      throw new Error("string is blanck on EditUser");
    const connection = await dbPool.connect();
    const hash = bcryptjs.hash(
      Password,
      Number.parseInt(process.env.hash_number)
    );
    await connection.query("call Users('update',$1,$2,$3,$4)", [
      ID,
      Name,
      Email,
      hash,
    ]);
    connection.release();
    return;
  }
}
