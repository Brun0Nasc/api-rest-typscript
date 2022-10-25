import { MigrationInterface, QueryRunner } from "typeorm";

export class default1666705822616 implements MigrationInterface {
    name = 'default1666705822616'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_446adfc18b35418aac32ae0b7b" ON "usuarios" ("email") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_ea9405d496a37a518c0c77a173" ON "chaves" ("valor_chave") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_ea9405d496a37a518c0c77a173"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_446adfc18b35418aac32ae0b7b"`);
    }

}
