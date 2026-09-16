import * as excel from "xlsx";
import fs from "fs";

// define test data with data type
interface TestRecord {
  environment: string;
  url: string;
  username: string;
  password: string;
}

// create method to read excel file
export function readExcelFile(filePath: string) {
  // read the excel file as binary string
  const file = fs.readFileSync(filePath);
  // parse into workbook
  const workbook = excel.read(file);
  // get first sheet
  const sheet = workbook.Sheets(workbook.SheetNames[0]);
  // convert sheet into json
  const rawData: any[] = excel.utils.sheet_to_json({ header: 1 });
  // convert raw data into TestRecord
  const records: TestRecord[] = rawData.slice(1).map((column: any) => ({
    environment: column[0],
    url: column[1],
    username: column[2],
    password: column[3],
  }));
  return records;
}
