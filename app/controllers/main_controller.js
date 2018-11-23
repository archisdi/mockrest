const { apiResponse } = require('../utils/helpers');

exports.crawl = async (req, res, next) => {
    setTimeout(() => apiResponse(res, 'sucess', 204), 3000);
};

exports.scrap = async (req, res, next) => {
    setTimeout(() => apiResponse(res, 'sucess', 200), 3000);
};
module.exports = exports;
