/*
  Warnings:

  - The primary key for the `Content` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `content_id` on the `Content` table. All the data in the column will be lost.
  - Added the required column `id` to the `Content` table without a default value. This is not possible if the table is not empty.
  - Added the required column `post_id` to the `Content` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Content` DROP FOREIGN KEY `Content_content_id_fkey`;

-- AlterTable
ALTER TABLE `Content` DROP PRIMARY KEY,
    DROP COLUMN `content_id`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `post_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `Content` ADD CONSTRAINT `Content_post_id_fkey` FOREIGN KEY (`post_id`) REFERENCES `Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
