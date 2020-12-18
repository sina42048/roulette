const privateRoutes = {
  'GET /users': 'UserController.getAll',
  'POST /reset-password': 'UserController.resetPassword',
  'POST /charge-account': 'UserController.chargeAccount',
  'POST /user-all-bets': 'BetController.getUserBets',
  'Post /support': 'UserController.support',
};

module.exports = privateRoutes;
