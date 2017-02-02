import articleApp from './articles/article.module.js';
import { routes } from './admin.routing.js'

var adminApp = angular.module("adminApp", ["ngRoute", articleApp.name])
    .config(["$routeProvider", "$locationProvider", routes]);

module.exports = adminApp