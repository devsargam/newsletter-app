/*
  Warnings:

  - You are about to drop the column `emailId` on the `EmailSubscriber` table. All the data in the column will be lost.
  - Added the required column `subscribedToId` to the `EmailSubscriber` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "EmailSubscriber" DROP CONSTRAINT "EmailSubscriber_emailId_fkey";

-- AlterTable
ALTER TABLE "EmailSubscriber" DROP COLUMN "emailId",
ADD COLUMN     "subscribedToId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "EmailSubscriber" ADD CONSTRAINT "EmailSubscriber_subscribedToId_fkey" FOREIGN KEY ("subscribedToId") REFERENCES "Newsletter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
