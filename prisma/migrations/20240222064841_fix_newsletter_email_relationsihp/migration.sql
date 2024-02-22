/*
  Warnings:

  - Added the required column `emailId` to the `Email` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Email" ADD COLUMN     "emailId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Email" ADD CONSTRAINT "Email_emailId_fkey" FOREIGN KEY ("emailId") REFERENCES "Newsletter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
