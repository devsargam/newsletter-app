/*
  Warnings:

  - A unique constraint covering the columns `[email,subscribedToId]` on the table `EmailSubscriber` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "EmailSubscriber" ADD COLUMN     "isVerified" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "EmailSubscriber_email_subscribedToId_key" ON "EmailSubscriber"("email", "subscribedToId");
