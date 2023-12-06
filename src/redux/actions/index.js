import axios from "axios";
const { VITE_APP_BACKEND } = import.meta.env;

const constants = {
  localhost: VITE_APP_BACKEND,
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
export const UPDATE_CLIENT_DATA = "UPDATE_CLIENT_DATA";
export const NEW_TRANSACTION = "NEW_TRANSACTION";
export const UPDATE_TRANSACTION = "UPDATE_TRANSACTION";
export const PAYMENT_DATA = "PAYMENT_DATA";
export const UPDATE_PAYMENT_DATA = "UPDATE_PAYMENT_DATA";
export const UPDATE_STATUS_PAYMENT = "UPDATE_STATUS_PAYMENT";
export const NAVIGATION_URL = "NAVIGATION_URL";
export const NEW_RATING = "NEW_RATING";
export const NEW_USER = "NEW_USER";
export const LOGIN_USER = "LOGIN_USER";
export const ERROR_MESSAGE = "ERROR_MESSAGE";
export const SERVICE_ORDER = "SERVICE_ORDER";
export const NEW_PAYMENT = "NEW_PAYMENT";
export const PAYMETN_COLLECTION_BY_ID = "PAYMETN_COLLECTION_BY_ID";
export const REMOVE_PAYMENT_COLLECTION = "REMOVE_PAYMENT_COLLECTION";
export const REMOVE_PAYMENT_DATA = "REMOVE_PAYMENT_DATA";
export const CLEAR_CLIENTLOGGED_FROM_STORE = "CLEAR_CLIENTLOGGED_FROM_STORE";
export const CLIENT_GOOGLE_SIGNUP = "CLIENT_GOOGLE_SIGNUP";
export const CLIENT_GOOGLE_LOGIN = "CLIENT_GOOGLE_LOGIN";
export const UPDATE_CLIENT_PHOTO = "UPDATE_CLIENT_PHOTO";
export const RESET_PASSWORD = "RESET_PASSWORD";
export const UPDATE_PASSWORD = "UPDATE_PASSWORD";
export const FETCH_FUNCTION = "FETCH_FUNCTION";
export const GET_CONVERSATIONS = "GET_CONVERSATIONS";
export const GET_CONVERSATION_MESSAGES = "GET_CONVERSATION_MESSAGES";
export const NEW_MESSAGE = "NEW_MESSAGE";
export const GET_MESSAGES_UNREADED = "GET_MESSAGES_UNREADED";
export const CURRENT_FILTER_ITEM = "CURRENT_FILTER_ITEM";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER_BY_PRICE = "FILTER_BY_PRICE";
export const FILTER_BY_DESTINATION = "FILTER_BY_DESTINATION";
export const GET_TRANSACTION_BY_ID = "GET_TRANSACTION_BY_ID";
export const GET_GLOBAL_RATING_FROM_BOAT = "GET_GLOBAL_RATING_FROM_BOAT";

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

export const resetFilter = (data) => (dispatch) => {
  try {
    dispatch({
      type: RESET_FILTERS,
      payload: data,
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

export const loginClient = (data) => async (dispatch) => {
  try {
    const client = await axios.post(
      `${constants.localhost}/sign_method/client/login`,
      data
    );
    window.localStorage.setItem("clientLogged", JSON.stringify(client.data));
    dispatch({
      type: CLIENT_LOGIN,
      payload: client.data,
    });
  } catch (error) {
    dispatch({
      type: CLIENT_LOGIN,
      payload: error.response.data,
    });
    console.log("error.response", error.response);
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

export const getClientData = (id, token) => async (dispatch) => {
  try {
    const clientData = await axios.get(`${constants.localhost}/client/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({
      type: CLIENT_DATA,
      payload: clientData.data,
    });
  } catch (error) {
    dispatch({
      type: CLIENT_DATA,
      payload: error.response.data,
    });
    console.log(error.response);
  }
};

export const updateClientData = (id, data) => async (dispatch) => {
  const client = await axios.put(
    `${constants.localhost}/client/update/${id}`,
    data
  );
  try {
    dispatch({
      type: UPDATE_CLIENT_DATA,
      payload: client.data,
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
    dispatch({
      type: NEW_TRANSACTION,
      payload: newTransaction.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const updateTransaction = (data) => async (dispatch) => {
  try {
    const transaction = await axios.put(
      `${constants.localhost}/transaction/update/${data.id}`,
      data
    );
    dispatch({
      type: UPDATE_TRANSACTION,
      payload: transaction.data,
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

export const newRating = (rating) => async (dispatch) => {
  try {
    const new_rating = await axios.post(
      `${constants.localhost}/rating/${rating.boatId}`,
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

export const service_order = (data) => (dispatch) => {
  console.log("orden creada con exito...");
  dispatch({
    type: SERVICE_ORDER,
    payload: data,
  });
};

export const newPayment = (newPayment) => async (dispatch) => {
  try {
    const payment = await axios.post(
      `${constants.localhost}/payments_collection/addCollection`,
      newPayment
    );
    dispatch({
      type: NEW_PAYMENT,
      payload: payment.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};
export const paymentCollectionById = (preferenceId) => async (dispatch) => {
  const collection = await axios.get(
    `${constants.localhost}/payments_collection/getCollection/${preferenceId}`
  );
  try {
    dispatch({
      type: PAYMETN_COLLECTION_BY_ID,
      payload: collection.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};
export const removePaymentCollection = (id) => async (dispatch) => {
  try {
    const collection = await axios.delete(
      `${constants.localhost}/payments_collection/delete/collection/${id}`
    );
    dispatch({
      type: REMOVE_PAYMENT_COLLECTION,
      payload: collection.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};
export const removePaymentData = () => (dispatch) => {
  dispatch({
    type: REMOVE_PAYMENT_DATA,
    payload: "",
  });
};

export const clearClientLoggedFromStore = () => (dispatch) => {
  dispatch({
    type: CLEAR_CLIENTLOGGED_FROM_STORE,
  });
};

export const clientGoogleSignup = (data) => async (dispatch) => {
  const client = await axios.post(
    `${constants.localhost}/sign_method/client/signup/google`,
    data
  );
  try {
    dispatch({
      type: CLIENT_GOOGLE_SIGNUP,
      payload: client.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const clientGoogleLogin = (data) => async (dispatch) => {
  const client = await axios.post(
    `${constants.localhost}/sign_method/client/login/google`,
    data
  );
  try {
    window.localStorage.setItem("clientLogged", JSON.stringify(client.data));
    // dispatch({
    //   type: CLIENT_GOOGLE_LOGIN,
    //   payload: client.data,
    // });
  } catch (error) {
    console.log(error.response);
  }
};

export const updateClientPhoto = (id, photo) => async (dispatch) => {
  const updatePhoto = await axios.put(
    `${constants.localhost}/client/update/photo/${id}`,
    photo
  );
  try {
    dispatch({
      type: UPDATE_CLIENT_PHOTO,
      payload: updatePhoto.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};
export const resetPassword = (email) => async (dispatch) => {
  const reset = await axios.post(
    `${constants.localhost}/client/recoveryPassword`,
    email
  );
  try {
    dispatch({
      type: RESET_PASSWORD,
      payload: reset.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const updatePassword = (client) => async (dispatch) => {
  const changePass = axios.put(
    `${constants.localhost}/client/update/password`,
    client
  );
  try {
    dispatch({
      type: UPDATE_PASSWORD,
      payload: changePass.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const setFetchFunction = (fn) => (dispatch) => {
  dispatch({
    type: FETCH_FUNCTION,
    payload: fn,
  });
};

export const getConversations = (id) => async (dispatch) => {
  try {
    const conversations = await axios.get(
      `${constants.localhost}/conversation/client/${id}`
    );
    dispatch({
      type: GET_CONVERSATIONS,
      payload: conversations.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const getConversationMessages = (id) => async (dispatch) => {
  try {
    const messages = await axios.get(`${constants.localhost}/message/${id}`);
    dispatch({
      type: GET_CONVERSATION_MESSAGES,
      payload: messages.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const newMessage = (message) => async (dispatch) => {
  try {
    const new_message = await axios.post(
      `${constants.localhost}/message/new`,
      message
    );
    dispatch({
      type: NEW_MESSAGE,
      payload: new_message.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const messagesUnreaded = (id) => async (dispatch) => {
  try {
    const messages = await axios.get(
      `${constants.localhost}/message/unreaded/${id}`
    );
    dispatch({
      type: GET_MESSAGES_UNREADED,
      payload: messages.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const currentFilterItem = (item) => (dispatch) => {
  dispatch({
    type: CURRENT_FILTER_ITEM,
    payload: item,
  });
};

export const filterByName = (type) => (dispatch) => {
  dispatch({
    type: FILTER_BY_NAME,
    payload: type,
  });
};

export const filterByPrice = (type) => (dispatch) => {
  dispatch({
    type: FILTER_BY_PRICE,
    payload: type,
  });
};

export const filterByDestination = (destination) => (dispatch) => {
  dispatch({
    type: FILTER_BY_DESTINATION,
    payload: destination,
  });
};

export const getTransactionById = (id) => async (dispatch) => {
  try {
    const transaction = await axios.get(
      `${constants.localhost}/transaction/${id}`
    );
    dispatch({
      type: GET_TRANSACTION_BY_ID,
      payload: transaction.data,
    });
  } catch (error) {
    console.log("error.response", error.response);
  }
};

export const getGlobalRatingFromBoat = (id) => async (dispatch) => {
  try {
    const rating = await axios.get(
      `${constants.localhost}/rating/getStars/${id}`
    );
    dispatch({
      type: GET_GLOBAL_RATING_FROM_BOAT,
      payload: rating.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};
