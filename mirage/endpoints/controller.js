import Ember from 'ember';

import {
  Response,
} from 'ember-cli-mirage';

const {
  String: { pluralize },
} = Ember;

class MirageResponseController {
  constructor(modelName) {
    this.modelName = pluralize(modelName);
  }

  getRequest(schema) {
    return schema[this.modelName].all();
  }

  getByIdRequest(schema, request) {
    const id = request.params.id;
    return schema[this.modelName].find(id);
  }

  postRequest(schema, request) {
    const attrs = JSON.parse(request.requestBody).post;

    return schema[this.modelName].create(attrs);
  }

  deleteRequest(schema, request) {
    const id = request.params.id;

    schema[this.modelName].find(id).destroy();

    return new Response(204);
  }

  putRequest(schema, request) {
    const id = request.params.id;
    const attrs = this.normalizedRequestAttrs();

    return schema[this.modelName].find(id).update(attrs);
  }

}


export default MirageResponseController;
