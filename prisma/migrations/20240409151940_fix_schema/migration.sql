-- DropForeignKey
ALTER TABLE "EmailSubscriber" DROP CONSTRAINT "EmailSubscriber_emailId_fkey";

-- AddForeignKey
ALTER TABLE "EmailSubscriber" ADD CONSTRAINT "EmailSubscriber_emailId_fkey" FOREIGN KEY ("emailId") REFERENCES "Newsletter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
