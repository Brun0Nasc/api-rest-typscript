import { MigrationInterface, QueryRunner } from "typeorm";

export class default1666697027366 implements MigrationInterface {
    name = 'default1666697027366'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" ALTER COLUMN "deleted_at" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" ALTER COLUMN "deleted_at" SET NOT NULL`);
    }

}
