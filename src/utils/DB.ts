//import clientDB from "@db/clientDB";
//import {Test} from "@db/models/test";
import clientDB from "../db/clientDB"; // ts-node doesn't like the above
import {Test} from "../db/models/test";

export const importData = async (text: string) => {
  const test = clientDB.getCollection<Test>(Test);

  await test.insertOrReplaceOne({
    id: 1,
    text
  });
}

export const exportData = async () => {
  const test = clientDB.getCollection<Test>(Test);

  return await test.findOne({filter: {id: 1}});
}
