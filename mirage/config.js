import MirageRoutes from './endpoints/routes';

export default function() {
  this.urlPrefix = 'http://localhost:4200';
  this.namespace = '/api/v1';

  MirageRoutes.apply(this, ['posts']);
  MirageRoutes.apply(this, ['users']);
  MirageRoutes.apply(this, ['comments']);
}
