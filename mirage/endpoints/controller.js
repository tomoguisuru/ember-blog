import Ember from 'ember';

import {
  Response,
} from 'ember-cli-mirage';

const {
  String: { pluralize, singularize },
  Logger: { log },
  assign,
} = Ember;

class MirageResponseController {
  constructor(modelName) {
    this.modelName = pluralize(modelName);
  }

  getRequest(schema) {
    return schema[this.modelName].all();
  }

  getByIdRequest(schema, request) {
    log(request);
    const id = request.params.id;
    return schema[this.modelName].find(id);
  }

  postRequest(schema, request) {
    const attrs = JSON.parse(request.requestBody);
    log(attrs);

    const { type, attributes, relationships } = attrs.data;

    if (relationships) {
      const keys = Object.keys(relationships);
      const rels  = {};

      keys.forEach(k => {
        // Only handles `belongsTo` at the moment
        rels[k] = schema[pluralize(k)].find(relationships[k].data.id);
      });

      return schema[this.modelName].create(singularize(type), assign({}, attributes, rels));
    }

    return schema[this.modelName].create(singularize(type), attributes);
  }

  deleteRequest(schema, request) {
    log(request);
    const id = request.params.id;

    schema[this.modelName].find(id).destroy();

    return new Response(204);
  }

  patchRequest(schema, request) {
    log(request);
    const id = request.params.id;
    const attrs = this.normalizedRequestAttrs();

    return schema[this.modelName].find(id).update(attrs);
  }

}


export default MirageResponseController;
