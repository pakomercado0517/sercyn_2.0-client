import {
  GET_ALL_BOATS,
  GET_ALL_DESTINATIONS,
  GET_DESTINATION_BY_ID,
  GET_BY_BEST_RATING,
  GET_BOAT_BY_DESTINATION,
  GET_BOAT_BY_ASCENDING_NAME,
  GET_BOAT_BY_DESCENDING_NAME,
  GET_BOAT_BY_ID,
  RESET_FILTERS,
  SEARCHBAR_ON_SELECT,
  GET_PRICE_BY_MORE_EXPENSIVE,
  GET_PRICE_BY_MORE_CHEAP,
  GET_PAGING,
  NEW_CLIENT,
  GET_CLIENT_LOGGED,
  CLIENT_LOGOUT,
  CLIENT_DATA,
  UPDATE_CLIENT_DATA,
  NEW_TRANSACTION,
  UPDATE_TRANSACTION,
  PAYMENT_DATA,
  NAVIGATION_URL,
  NEW_RATING,
  NEW_USER,
  LOGIN_USER,
  SERVICE_ORDER,
  PAYMETN_COLLECTION_BY_ID,
  NEW_PAYMENT,
  REMOVE_PAYMENT_DATA,
  CLEAR_CLIENTLOGGED_FROM_STORE,
  UPDATE_CLIENT_PHOTO,
} from "../actions";

const initialState = {
  users: [],
  boats: [],
  destinations: [],
  destinationById: [],
  bestRating: [],
  itemsFiltered: [],
  boatById: [],
  page: 0,
  newClient: [],
  clientLogged: [],
  clientData: [],
  transaction: [],
  paymentData: [],
  navigation_url: "",
  rating: [],
  newUser: [],
  userLogged: [],
  serviceOrder: [],
  paymentCollection: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_BOATS:
      return {
        ...state,
        boats: payload,
      };
    case GET_ALL_DESTINATIONS:
      return {
        ...state,
        destinations: payload,
      };
    case GET_DESTINATION_BY_ID:
      return {
        ...state,
        destinationById: payload,
      };
    case GET_BY_BEST_RATING:
      return {
        ...state,
        bestRating: payload,
      };
    case GET_BOAT_BY_DESTINATION:
      return {
        ...state,
        itemsFiltered: payload,
      };
    case GET_BOAT_BY_ASCENDING_NAME:
      return {
        ...state,
        itemsFiltered: payload,
      };
    case GET_BOAT_BY_DESCENDING_NAME:
      return {
        ...state,
        itemsFiltered: payload,
      };
    case GET_BOAT_BY_ID:
      return {
        ...state,
        boatById: payload,
      };
    case RESET_FILTERS:
      return {
        ...state,
        itemsFiltered: payload,
      };
    case SEARCHBAR_ON_SELECT:
      return {
        ...state,
        itemsFiltered: payload,
      };
    case GET_PRICE_BY_MORE_EXPENSIVE:
      return {
        ...state,
        itemsFiltered: payload,
      };
    case GET_PRICE_BY_MORE_CHEAP:
      return {
        ...state,
        itemsFiltered: payload,
      };
    case GET_PAGING:
      return {
        ...state,
        page: payload,
      };
    case NEW_CLIENT:
      return {
        ...state,
        newClient: payload,
      };
    case GET_CLIENT_LOGGED:
      return {
        ...state,
        clientLogged: payload,
      };
    case CLIENT_LOGOUT:
      return {
        ...state,
        clientLogged: payload ? payload : [],
      };
    case CLIENT_DATA:
      return {
        ...state,
        clientData: payload,
      };
    case UPDATE_CLIENT_DATA:
      return {
        ...state,
        clientData: payload,
      };
    case NEW_TRANSACTION:
      return {
        ...state,
        transaction: payload,
      };
    case UPDATE_TRANSACTION:
      return {
        ...state,
        transaction: payload,
      };
    case PAYMENT_DATA:
      return {
        ...state,
        paymentData: payload,
      };
    case NAVIGATION_URL:
      return {
        ...state,
        navigation_url: payload,
      };
    case NEW_RATING:
      return {
        ...state,
        rating: payload,
      };
    case NEW_USER:
      return {
        ...state,
        newUser: payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        userLogged: payload,
      };
    case SERVICE_ORDER:
      return {
        ...state,
        serviceOrder: payload,
      };
    case PAYMETN_COLLECTION_BY_ID:
      return {
        ...state,
        paymentCollection: payload,
      };
    case NEW_PAYMENT:
      return {
        ...state,
        paymentCollection: payload,
      };
    case REMOVE_PAYMENT_DATA:
      return {
        ...state,
        paymentData: payload,
      };
    case CLEAR_CLIENTLOGGED_FROM_STORE:
      return {
        ...state,
        clientLogged: initialState.clientLogged,
      };
    case UPDATE_CLIENT_PHOTO:
      return {
        ...state,
        clientData: payload,
      };
    default:
      return state;
  }
};
export default rootReducer;
