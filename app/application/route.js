import Ember from 'ember';

const {
  Route,
  get,
  inject: { service },
} = Ember;

const AppliationRoute = Route.extend({
  session: service(),
  store: service(),

  beforeModel() {
    const adapter = get(this, 'store').adapterFor('application');
    const url = adapter.buildURL('user') + '/me';

    return adapter.ajax(url).then(response => {
      get(this, 'store').pushPayload(response);

      const currentUser = get(this, 'store').peekRecord('user', response.data.id);
      get(this, 'session').setCurrentUser(currentUser);
    });

  }
});

export default AppliationRoute;
