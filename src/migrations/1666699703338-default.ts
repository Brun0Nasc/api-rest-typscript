import { MigrationInterface, QueryRunner } from "typeorm";

export class default1666699703338 implements MigrationInterface {
    name = 'default1666699703338'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chaves" ALTER COLUMN "deleted_at" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chaves" ALTER COLUMN "deleted_at" SET NOT NULL`);
    }

}
