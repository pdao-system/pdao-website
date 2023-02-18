import type { GatsbyNode } from "gatsby"
import info from "./src/data/info.json";
import { writeFileSync } from "fs";
import { logger } from "./src/lib/utils"

export const sourceNodes: GatsbyNode["onPreBuild"] = async () => {

    info.lastUpdate = Date.now();
    writeFileSync("./src/data/info.json", JSON.stringify(info, null, "    "));
    logger("Update Build Info");
}