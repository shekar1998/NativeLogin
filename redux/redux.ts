import {createStore, combineReducers} from 'redux';
import {
  SelectedCategoryReducer,
  SelectedItemReducer,
  SetInputFieldsReducer,
  SelectedAddressReducer,
  SelectedChoiceReducer,
  SetCardInputsReducer,
  SetCardInputsChoosenReducer,
  AllCategoryReducer,
  AllProductsReducer,
} from './reducer';
import {
  setCurrentUserReducer,
  UpdatedInitialStateReducer,
  updateAfterUpdateReducer,
} from './loginRducer';

const reducer = combineReducers({
  Category: SelectedCategoryReducer,
  Item: SelectedItemReducer,
  Input: SetInputFieldsReducer,
  Address: SelectedAddressReducer,
  Choice: SelectedChoiceReducer,
  CardInput: SetCardInputsReducer,
  CardInputChoosen: SetCardInputsChoosenReducer,
  AllCategory: AllCategoryReducer,
  AllProducts: AllProductsReducer,
  LoggedInInfo: setCurrentUserReducer,
  UpdatedValue: UpdatedInitialStateReducer,
  UpdateCheck: updateAfterUpdateReducer,
});

const store = createStore(reducer);

export default store;
