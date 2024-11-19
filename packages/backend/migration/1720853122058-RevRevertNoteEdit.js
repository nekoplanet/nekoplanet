/*
 * SPDX-FileCopyrightText: syuilo and misskey-project
 * SPDX-License-Identifier: AGPL-3.0-only
 */

export class RevRevertNoteEdit1720853122058 {
    name = 'RevRevertNoteEdit1720853122058'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "note" ADD IF NOT EXISTS "updatedAt" TIMESTAMP WITH TIME ZONE`);
        await queryRunner.query(`ALTER TABLE "note" ADD IF NOT EXISTS "updatedAtHistory" TIMESTAMP WITH TIME ZONE ARRAY`);
        await queryRunner.query(`ALTER TABLE "note" ADD IF NOT EXISTS "noteEditHistory" character varying array`)
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "note" DROP COLUMN IF EXISTS "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "note" DROP IF EXISTS "updatedAtHistory"`);
        await queryRunner.query(`ALTER TABLE "note" DROP IF EXISTS "noteEditHistory"`)
    }

}
