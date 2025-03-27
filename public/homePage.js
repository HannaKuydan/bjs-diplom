const logoutButton = new LogoutButton();
const ratesBoard = new RatesBoard();
const favoritesWidget = new FavoritesWidget();

logoutButton.action = () =>
  ApiConnector.logout((response) => {
    if (response.success) {
      location.reload;
    }
  });

ApiConnector.current((response) => {
  if (response.success) {
    ProfileWidget.showProfile(response.data);
  }
});

function getStocks() {
  ApiConnector.getStocks((response) => {
    if (response.success) {
      ratesBoard.clearTable();
      ratesBoard.fillTable(response.data);
    } else {
      favoritesWidget.setMessage(response, "Что-то не так");
    }
  });
}
getStocks();
setInterval(getStocks, 60000);
