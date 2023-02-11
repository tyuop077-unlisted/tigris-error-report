//import {exportData, importData} from "@utils/DB";
import {exportData, importData} from "./utils/DB"; // ts-node doesn't like the above

const str = "Привет мир"; // Hello world

const init = async () => {
  await importData("Привет мир");

  const data = await exportData();

  console.log(data);

  if (data!.text !== str) {
    console.error(`"${data!.text}" was expected to be "${str}"`)
  } else {
    console.log("Equal")
  }
}

init()
