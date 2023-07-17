export const FETCH_TAXES = "FETCH_TAXES";
export const SET_TAXES = "SET_TAXES";
export const IS_LOADING = "IS_LOADING";
export const SET_ERROR = "SET_ERROR";
export const FETCH_TAX_FORM_FIELDS = "FETCH_TAX_FORM_FIELDS";
export const SET_TAX_FORM_FIELDS = "SET_TAX_FORM_FIELDS";
export const SUBMIT_TAX_FORM = "SUBMIT_TAX_FORM";
export const ADD_SUBMISSION = "ADD_SUBMISSION";
export const UPDATE_FILTERS = "UPDATE_FILTERS";

export const fetchTaxes = () => ({
  type: FETCH_TAXES,
});

export const setTaxes = (taxes) => ({
  type: SET_TAXES,
  payload: taxes,
});

export const isLoading = (loading) => ({
  type: IS_LOADING,
  payload: loading,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const fetchFormFields = (taxId) => ({
  type: FETCH_TAX_FORM_FIELDS,
  payload: taxId,
});

export const setTaxFormFields = (fields) => ({
  type: SET_TAX_FORM_FIELDS,
  payload: fields,
});

export const submitTaxForm = (taxId, year, formValues) => ({
  type: SUBMIT_TAX_FORM,
  payload: { taxId, year, formValues },
});

export const addSubmission = (taxId, submission) => ({
  type: ADD_SUBMISSION,
  payload: { taxId, submission },
});

export const updateFilters = (filters) => ({
  type: UPDATE_FILTERS,
  payload: filters,
});
