import {
  SELECTED_CATEGORY,
  SELECTED_ITEM,
  SET_INPUT_FIELD,
  SET_SELECTED_FIELD,
  SET_SELECTED_CHOICE,
  SET_SELECTED_CREDIT_CARD_INPUT,
  SET_SELECTED_CREDIT_CARD_INPUT_CHOOSEN,
  ALL_CATEGORY,
  ALL_PRODUCTS,
} from './actionTypes';

const AllCategoryInitialState = {
  AllCategory: [],
};

const SelectedCategoryInitialState = {
  Category: [
    {
      _id: {
        $oid: '617f88804767637770e8b6fa',
      },
      name: 'Computer',
      icon: '',
    },
  ],
};

const SelectedItemInitialState: any = {
  Item: [],
};
const SetInputFieldsInitialState: any = {
  Input: [],
};
const SelectedAddressInitialState: any = {
  Address: [],
};
const SelectedChoiceInitialState: any = {
  Choice: [],
};
const SelectedCardInputInitialState: any = {
  CardInput: [],
};
const SelectedCardInputChoosenInitialState: any = {
  CardInputChoosen: [],
};
const AllProductsInitialState: any = {
  AllProducts: [],
};

export const AllProductsReducer = (
  state = AllProductsInitialState,
  action: any,
) => {
  switch (action.type) {
    case ALL_PRODUCTS:
      return {...state, AllProducts: action.payload};
    default:
      return state;
  }
};

export const AllCategoryReducer = (
  state = AllCategoryInitialState,
  action: any,
) => {
  switch (action.type) {
    case ALL_CATEGORY:
      return {...state, AllCategory: action.payload};
    default:
      return state;
  }
};

export const SelectedCategoryReducer = (
  state = SelectedCategoryInitialState,
  action: any,
) => {
  switch (action.type) {
    case SELECTED_CATEGORY:
      return {...state, Category: action.payload};
    default:
      return state;
  }
};

export const SelectedItemReducer = (
  state = SelectedItemInitialState,
  action: any,
) => {
  switch (action.type) {
    case SELECTED_ITEM:
      const payload: any = action.payload;
      return {
        ...state,
        Item: state.Item.concat(payload),
      };
    default:
      return state;
  }
};

export const SetInputFieldsReducer = (
  state = SetInputFieldsInitialState,
  action: any,
) => {
  switch (action.type) {
    case SET_INPUT_FIELD:
      const payload: any = action.payload;
      return {
        ...state,
        Input: state.Input.concat(payload),
      };

    default:
      return state;
  }
};

export const SelectedAddressReducer = (
  state = SelectedAddressInitialState,
  action: any,
) => {
  switch (action.type) {
    case SET_SELECTED_FIELD:
      return {...state, Address: action.payload};
    default:
      return state;
  }
};

export const SelectedChoiceReducer = (
  state = SelectedChoiceInitialState,
  action: any,
) => {
  switch (action.type) {
    case SET_SELECTED_CHOICE:
      return {...state, Choice: action.payload};
    default:
      return state;
  }
};

export const SetCardInputsReducer = (
  state = SelectedCardInputInitialState,
  action: any,
) => {
  switch (action.type) {
    case SET_SELECTED_CREDIT_CARD_INPUT:
      const payload: any = action.payload;

      return {
        ...state,
        CardInput: state.CardInput.concat(payload),
      };

    default:
      return state;
  }
};

export const SetCardInputsChoosenReducer = (
  state = SelectedCardInputChoosenInitialState,
  action: any,
) => {
  switch (action.type) {
    case SET_SELECTED_CREDIT_CARD_INPUT_CHOOSEN:
      const payload: any = action.payload;

      return {...state, CardInputChoosen: action.payload};

    default:
      return state;
  }
};
