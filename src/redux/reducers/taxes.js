import {
  ADD_SUBMISSION,
  IS_LOADING,
  SET_ERROR,
  SET_TAXES,
  SET_TAX_FORM_FIELDS,
  UPDATE_FILTERS,
} from "../actions/taxes";

const initialState = {
  taxes: [],
  loading: false,
  error: null,
  taxFormFields: null,
  taxSubmissions: {},
  filters: {
    year: "",
    name: "",
    surname: "",
    age: "",
  },
};

const taxReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TAXES:
      return {
        ...state,
        taxes: action.payload,
        loading: false,
        error: null,
      };
    case SET_TAX_FORM_FIELDS:
      return {
        ...state,
        taxFormFields: action.payload,
        loading: false,
        error: null,
      };
    case IS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ADD_SUBMISSION:
      const { taxId, submission } = action.payload;

      return {
        ...state,
        taxSubmissions: {
          ...state.taxSubmissions,
          [taxId]: [...(state.taxSubmissions[taxId] || []), submission],
        },
      };

    case UPDATE_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default taxReducer;
