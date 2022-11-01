/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Admin` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `Admin_password_key` ON `Admin`;

-- CreateIndex
CREATE UNIQUE INDEX `Admin_name_key` ON `Admin`(`name`);
