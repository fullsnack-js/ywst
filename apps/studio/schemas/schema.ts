import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import { mapDocToSchema } from "../lib/mapToSchema";

import * as documents from "./documents";
import * as objects from "./objects";

export default createSchema({
  name: "default",
  types: schemaTypes
    .concat(mapDocToSchema(objects))
    .concat(mapDocToSchema(documents)),
});
