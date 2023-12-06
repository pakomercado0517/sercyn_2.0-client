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
  CLIENT_LOGIN,
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
  CLIENT_GOOGLE_SIGNUP,
  FETCH_FUNCTION,
  GET_CONVERSATIONS,
  GET_CONVERSATION_MESSAGES,
  NEW_MESSAGE,
  GET_MESSAGES_UNREADED,
  CURRENT_FILTER_ITEM,
  FILTER_BY_NAME,
  FILTER_BY_PRICE,
  FILTER_BY_DESTINATION,
  ERROR_MESSAGE,
  GET_TRANSACTION_BY_ID,
  GET_GLOBAL_RATING_FROM_BOAT,
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
  fetchFunction: null,
  conversations: [],
  messages: [],
  newMessage: [],
  errorMessage: [],
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
        clientData: [],
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
    case CLIENT_GOOGLE_SIGNUP:
      return {
        ...state,
        newUser: payload,
      };
    case FETCH_FUNCTION:
      return {
        ...state,
        fetchFunction: payload,
      };
    case GET_CONVERSATIONS:
      return {
        ...state,
        conversations: payload,
      };
    case GET_CONVERSATION_MESSAGES:
      return {
        ...state,
        messages: payload,
      };
    case NEW_MESSAGE:
      return {
        ...state,
        newMessage: payload,
      };
    case GET_MESSAGES_UNREADED:
      return {
        ...state,
        messages: payload,
      };
    case CURRENT_FILTER_ITEM:
      return { ...state, itemsFiltered: payload };
    case FILTER_BY_NAME:
      const filter = [...state.itemsFiltered];
      const stateFilter =
        payload === "asc"
          ? filter.sort((a, b) => {
              if (a.name > b.name) return 1;
              if (a.name < b.name) return -1;
              return 0;
            })
          : filter.sort((a, b) => {
              if (a.name > b.name) return -1;
              if (a.name < b.name) return 1;
              return 0;
            });
      return {
        ...state,
        itemsFiltered: stateFilter,
      };
    case FILTER_BY_PRICE:
      const Pricefilter = [...state.itemsFiltered];
      const stateFilterPrice =
        payload === "asc"
          ? Pricefilter.sort((a, b) => {
              if (a.price > b.price) return 1;
              if (a.price < b.price) return -1;
              return 0;
            })
          : Pricefilter.sort((a, b) => {
              if (a.price > b.price) return -1;
              if (a.price < b.price) return 1;
              return 0;
            });
      return { ...state, itemsFiltered: stateFilterPrice };
    case FILTER_BY_DESTINATION:
      const destinationFilter = [...state.itemsFiltered];
      const stateFilterDestination = destinationFilter.filter(
        (boat) => boat.destination.name === payload
      );
      return { ...state, itemsFiltered: stateFilterDestination };
    case ERROR_MESSAGE:
      return { ...state, errorMessage: payload };
    case CLIENT_LOGIN:
      return { ...state, clientLogged: payload };
    case GET_TRANSACTION_BY_ID:
      return { ...state, transaction: payload };
    case GET_GLOBAL_RATING_FROM_BOAT:
      return { ...state, rating: payload };
    default:
      return state;
  }
};
export default rootReducer;
