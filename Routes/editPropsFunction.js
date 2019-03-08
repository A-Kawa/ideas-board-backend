import ideasModel from "../MongoDB/ideasModel";

export default function editPorpsFunction(ideas, reqBody) {
  ideas.title = reqBody.title;
  ideas.description = reqBody.description;
  ideas.category = reqBody.category;

  return ideas;
}
