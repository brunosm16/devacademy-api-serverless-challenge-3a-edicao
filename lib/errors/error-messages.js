/* eslint-disable class-methods-use-this */
const { NotFoundError } = require('./errors');

module.export = class ErrorMessages {
	notFoundResource() {
		throw new NotFoundError('resource not found');
	}
};