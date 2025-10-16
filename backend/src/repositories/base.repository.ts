import { PrismaClient } from "@prisma/client";
import db from "@/config/db";

abstract class BaseRepository<TModel, TCreate, TUpdate, Twhere>
{
    protected db: PrismaClient;
    // protected model:Prisma.ModelNam

    protected constructor()
    {
        this.db = db;
    }

    public async create(data: TCreate): Promise<TModel>
    {
        return db.create(data);
    }
}

export default BaseRepository;
