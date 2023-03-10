import axios from "axios";
const { REACT_APP_BACKEND } = process.env;

const constants = {
  localhost: REACT_APP_BACKEND,
};

export const GET_ALL_BOATS = "GET_ALL_BOATS";
export const GET_ALL_DESTINATIONS = "GET_ALL_DESTINATIONS";
export const GET_DESTINATION_BY_ID = "GET_DESTINATION_BY_ID";
export const GET_BY_BEST_RATING = "GET_BY_BEST_RATING";
export const GET_BOAT_BY_DESTINATION = "GET_BOAT_BY_DESTINATION";
export const GET_BOAT_BY_ASCENDING_NAME = "GET_BOAT_BY_ASCENDING_NAME";
export const GET_BOAT_BY_DESCENDING_NAME = "GET_BOAT_BY_DESCENDING_NAME";
export const GET_BOAT_BY_ID = "GET_BOAT_BY_ID";
export const RESET_FILTERS = "RESET_FILTERS";
export const SEARCHBAR_ON_SELECT = "SEARCHBAR_ON_SELECT";
export const GET_PRICE_BY_MORE_EXPENSIVE = "GET_PRICE_BY_MORE_EXPENSIVE";
export const GET_PRICE_BY_MORE_CHEAP = "GET_PRICE_BY_MORE_CHEAP";
export const GET_PAGING = "GET_PAGING";
export const NEW_CLIENT = "NEW_CLIENT";
export const CLIENT_LOGIN = "CLIENT_LOGIN";
export const CLIENT_LOGOUT = "CLIENT_LOGOUT";
export const GET_CLIENT_LOGGED = "GET_CLIENT_LOGGED";
export const CLIENT_DATA = "CLIENT_DATA";
export const NEW_TRANSACTION = "NEW_TRNASACTION";
export const PAYMENT_DATA = "PAYMENT_DATA";
export const UPDATE_PAYMENT_DATA = "UPDATE_PAYMENT_DATA";
export const UPDATE_STATUS_PAYMENT = "UPDATE_STATUS_PAYMENT";
export const NAVIGATION_URL = "NAVIGATION_URL";
export const NEW_RATING = "NEW_RATING";
export const NEW_USER = "NEW_USER";
export const LOGIN_USER = "LOGIN_USER";

export const getAllBoats = () => async (dispatch) => {
  const allBoats = await axios.get(`${constants.localhost}/boat`);
  try {
    dispatch({
      type: GET_ALL_BOATS,
      payload: allBoats.data,
    });
  } catch (error) {
    console.log(error.reponse);
  }
};

export const getAllDestinations = () => async (dispatch) => {
  const allDestinations = await axios.get(`${constants.localhost}/destination`);
  try {
    dispatch({
      type: GET_ALL_DESTINATIONS,
      payload: allDestinations.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const getDestinationById = (id) => async (dispatch) => {
  const destination = await axios.get(
    `${constants.localhost}/destination/${id}`
  );
  try {
    dispatch({
      type: GET_DESTINATION_BY_ID,
      payload: destination.data,
    });
  } catch (error) {
    console.log("destisnation error:", error.response);
  }
};

export const getBYBestRating = () => async (dispatch) => {
  const allBestRating = await axios.get(
    `${constants.localhost}/rating/bestRating`
  );
  try {
    dispatch({
      type: GET_BY_BEST_RATING,
      payload: allBestRating.data,
    });
  } catch (error) {
    console.log("error", error.response);
  }
};

export const getBoatByDestination = (name) => async (dispatch) => {
  const boatsDestination = await axios.get(
    `${constants.localhost}/boat/destinations?name=${name}`
  );
  try {
    dispatch({
      type: GET_BOAT_BY_DESTINATION,
      payload: boatsDestination.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const getBoatsByAscName = () => async (dispatch) => {
  const ascendingName = await axios.get(
    `${constants.localhost}/boat/ascendingName`
  );
  try {
    dispatch({
      type: GET_BOAT_BY_ASCENDING_NAME,
      payload: ascendingName.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const getBoatByDescName = () => async (dispatch) => {
  const descendingName = await axios.get(
    `${constants.localhost}/boat/descendingName`
  );
  try {
    dispatch({
      type: GET_BOAT_BY_DESCENDING_NAME,
      payload: descendingName.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const getBoatById = (id) => async (dispatch) => {
  const boatId = await axios.get(`${constants.localhost}/boat/${id}`);
  try {
    dispatch({
      type: GET_BOAT_BY_ID,
      payload: boatId.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const resetFilter = () => (dispatch) => {
  try {
    dispatch({
      type: RESET_FILTERS,
      payload: [],
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const searchBarOnSelect = (item) => (dispatch) => {
  try {
    dispatch({
      type: SEARCHBAR_ON_SELECT,
      payload: item,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const getPriceByMoreExpensive = (name) => async (dispatch) => {
  let priceResult;
  try {
    if (name) {
      priceResult = await axios.get(
        `${constants.localhost}/price/getMoreExpensive?name=${name}`
      );
    } else {
      priceResult = await axios.get(
        `${constants.localhost}/price/getMoreExpensive`
      );
    }
    dispatch({
      type: GET_PRICE_BY_MORE_EXPENSIVE,
      payload: priceResult.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};
export const getPriceByMoreCheap = (name) => async (dispatch) => {
  let priceResult;
  try {
    if (name) {
      priceResult = await axios.get(
        `${constants.localhost}/price/getMoreCheap?name=${name}`
      );
    } else {
      priceResult = await axios.get(
        `${constants.localhost}/price/getMoreCheap`
      );
    }
    dispatch({
      type: GET_PRICE_BY_MORE_CHEAP,
      payload: priceResult.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const getPaging = (page) => (dispatch) => {
  try {
    dispatch({
      type: GET_PAGING,
      payload: page,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const newClient = (data) => async (dispatch) => {
  const client = await axios.post(
    `${constants.localhost}/sign_method/client/signup`,
    data
  );
  try {
    dispatch({
      type: NEW_CLIENT,
      payload: client.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const loginClient = (data) => async () => {
  const client = await axios.post(
    `${constants.localhost}/sign_method/client/login`,
    data
  );
  try {
    window.localStorage.setItem("clientLogged", JSON.stringify(client.data));
    // dispatch({
    //   type: LOGIN_CLIENT,
    //   payload: client.data,
    // });
  } catch (error) {
    console.log(error.response);
  }
};

export const clientLogout = () => (dispatch) => {
  try {
    window.localStorage.removeItem("clientLogged");
    dispatch({
      type: CLIENT_LOGOUT,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const getClientLogged = (client) => (dispatch) => {
  try {
    dispatch({
      type: GET_CLIENT_LOGGED,
      payload: client,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const getClientData = (id) => async (dispatch) => {
  try {
    const clientData = await axios.get(`${constants.localhost}/client/${id}`);
    dispatch({
      type: CLIENT_DATA,
      payload: clientData.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const newTransaction = (data, id) => async (dispatch) => {
  try {
    const newTransaction = await axios.post(
      `${constants.localhost}/transaction/${id}`,
      data
    );
    console.log("response: ", newTransaction.data);
    dispatch({
      type: NEW_TRANSACTION,
      payload: newTransaction.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const getPaymentData = (preference, token) => async (dispatch) => {
  try {
    const paymentData = await axios.post(
      `${constants.localhost}/payment/checkout`,
      preference,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({
      type: PAYMENT_DATA,
      payload: paymentData.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const updatePaymentData = (collection) => async (dispatch) => {
  try {
    console.log("collection", collection);
    await axios.put(
      `${constants.localhost}/payments_collection/update/collection`,
      collection
    );
    dispatch({
      type: UPDATE_PAYMENT_DATA,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const updateStatusPayment = (newStatus) => async (dispatch) => {
  try {
    console.log("newStatus", newStatus);
    await axios.put(
      `${constants.localhost}/payments_collection/update/collection/status`,
      newStatus
    );
    dispatch({
      type: UPDATE_STATUS_PAYMENT,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const navigationUrl = (url) => async (dispatch) => {
  dispatch({
    type: NAVIGATION_URL,
    payload: url,
  });
};

export const newRating = (id, rating) => async (dispatch) => {
  try {
    const new_rating = await axios.post(
      `${constants.localhost}/rating/${id}`,
      rating
    );
    dispatch({
      type: NEW_RATING,
      payload: new_rating.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const newUser = (data) => async (dispatch) => {
  const createUser = await axios.post(
    `${constants.localhost}/user/signup`,
    data
  );
  try {
    dispatch({
      type: NEW_USER,
      payload: createUser.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const loginUser = (data) => async (dispatch) => {
  const user = await axios.post(`${constants.localhost}/user/login`, data);
  try {
    window.localStorage.setItem("clientLogged", JSON.stringify(user.data));
  } catch (error) {
    console.log(error.response);
  }
};
