import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('view-shopping-cart');
  this.route('product', {path: '/product/:product_id'});
  this.route('admin');
});

export default Router;
