import _ from "lodash";

export const generateResult = () => {
  let result = [];
  while (result.length !== 8) {
    let random = _.random(1, 19);
    if (!result.includes(random)) result.push(random);
  }
  return result;
};
