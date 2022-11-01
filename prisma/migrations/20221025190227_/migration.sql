/*
  Warnings:

  - You are about to alter the column `writing` on the `Content` table. The data in that column could be lost. The data in that column will be cast from `LongBlob` to `VarChar(191)`.
  - You are about to alter the column `code` on the `Content` table. The data in that column could be lost. The data in that column will be cast from `LongBlob` to `VarChar(191)`.
  - You are about to alter the column `important` on the `Content` table. The data in that column could be lost. The data in that column will be cast from `LongBlob` to `VarChar(191)`.
  - You are about to alter the column `description` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `LongBlob` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `Content` MODIFY `writing` VARCHAR(191) NULL,
    MODIFY `code` VARCHAR(191) NULL,
    MODIFY `important` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Post` MODIFY `description` VARCHAR(191) NOT NULL;
