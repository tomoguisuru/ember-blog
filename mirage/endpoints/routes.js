import MirageResponseController from './controller';

function MirageRoutes(endpoint) {
  const controller = new MirageResponseController(endpoint);

  this.get(`/${endpoint}`, (schema, request) => controller.getRequest(schema, request));
  this.get(`/${endpoint}/:id`, (schema, request) => controller.getByIdRequest(schema, request));
  this.post(`/${endpoint}`, (schema, request) => controller.postRequest(schema, request));
  this.del(`/${endpoint}/:id`, (schema, request) => controller.deleteRequest(schema, request));
  this.put(`/${endpoint}/:id`, (schema, request) => controller.putRequest(schema, request));
}

export default MirageRoutes;
