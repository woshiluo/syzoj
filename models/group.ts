import * as TypeORM from "typeorm";
import Model from "./common";

@TypeORM.Entity()
export default class group extends Model {
  static cache = true;

  @TypeORM.PrimaryGeneratedColumn()
  id: number;

  @TypeORM.Index({ unique: true })
  @TypeORM.Column({ nullable: false, type: "varchar", length: 255 })
  group_name: string;
}
