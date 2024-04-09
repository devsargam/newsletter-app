/*
  Warnings:

  - You are about to drop the `Email` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Analytics" DROP CONSTRAINT "Analytics_emailId_fkey";

-- DropForeignKey
ALTER TABLE "Email" DROP CONSTRAINT "Email_emailId_fkey";

-- DropTable
DROP TABLE "Email";
