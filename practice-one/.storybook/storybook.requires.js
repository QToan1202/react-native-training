/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from "@storybook/react-native";

global.STORIES = [
  {
    titlePrefix: "",
    directory: "./app/components",
    files: "**/*.stories.?(ts|tsx|js|jsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:app[\\\\/]components(?:[\\\\/](?!\\.)(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/]|[\\\\/]|$)(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$",
  },
  {
    titlePrefix: "",
    directory: "./app/navigation",
    files: "**/*.stories.?(ts|tsx|js|jsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:app[\\\\/]navigation(?:[\\\\/](?!\\.)(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/]|[\\\\/]|$)(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$",
  },
  {
    titlePrefix: "",
    directory: "./app/screens",
    files: "**/*.stories.?(ts|tsx|js|jsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:app[\\\\/]screens(?:[\\\\/](?!\\.)(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/]|[\\\\/]|$)(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$",
  },
];

import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-actions/register";
import "@storybook/addon-ondevice-backgrounds/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require("react-native").LogBox.ignoreLogs([
      "`clearDecorators` is deprecated and will be removed in Storybook 7.0",
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return {
    "./app/components/Address/Address.stories.tsx": require("../app/components/Address/Address.stories.tsx"),
    "./app/components/Avatar/Avatar.stories.tsx": require("../app/components/Avatar/Avatar.stories.tsx"),
    "./app/components/Bar/Bar.stories.tsx": require("../app/components/Bar/Bar.stories.tsx"),
    "./app/components/Button/Button.stories.tsx": require("../app/components/Button/Button.stories.tsx"),
    "./app/components/CartItem/CartItem.stories.tsx": require("../app/components/CartItem/CartItem.stories.tsx"),
    "./app/components/Heading/Heading.stories.tsx": require("../app/components/Heading/Heading.stories.tsx"),
    "./app/components/IconButton/IconButton.stories.tsx": require("../app/components/IconButton/IconButton.stories.tsx"),
    "./app/components/Input/Input.stories.tsx": require("../app/components/Input/Input.stories.tsx"),
    "./app/components/MenuCard/MenuCard.stories.tsx": require("../app/components/MenuCard/MenuCard.stories.tsx"),
    "./app/components/Paragraph/Paragraph.stories.tsx": require("../app/components/Paragraph/Paragraph.stories.tsx"),
    "./app/components/PaymentCard/PaymentCard.stories.tsx": require("../app/components/PaymentCard/PaymentCard.stories.tsx"),
    "./app/components/PaymentCard/Placeholder.stories.tsx": require("../app/components/PaymentCard/Placeholder.stories.tsx"),
    "./app/components/Picker/Picker.stories.tsx": require("../app/components/Picker/Picker.stories.tsx"),
    "./app/components/Price/Price.stories.tsx": require("../app/components/Price/Price.stories.tsx"),
    "./app/components/ProductCard/ProductCard.stories.tsx": require("../app/components/ProductCard/ProductCard.stories.tsx"),
    "./app/components/Radio/Radio.stories.tsx": require("../app/components/Radio/Radio.stories.tsx"),
    "./app/components/Search/Search.stories.tsx": require("../app/components/Search/Search.stories.tsx"),
    "./app/components/SliderItem/SliderItem.stories.tsx": require("../app/components/SliderItem/SliderItem.stories.tsx"),
    "./app/components/StoreCard/StoreCard.stories.tsx": require("../app/components/StoreCard/StoreCard.stories.tsx"),
    "./app/components/TrackerItem/TrackerItem.stories.tsx": require("../app/components/TrackerItem/TrackerItem.stories.tsx"),
    "./app/components/WrapList/WrapList.stories.tsx": require("../app/components/WrapList/WrapList.stories.tsx"),
    "./app/navigation/Stack/PrivateStack.stories.tsx": require("../app/navigation/Stack/PrivateStack.stories.tsx"),
    "./app/navigation/Stack/PublicStack.stories.tsx": require("../app/navigation/Stack/PublicStack.stories.tsx"),
    "./app/navigation/Tab/Tab.stories.tsx": require("../app/navigation/Tab/Tab.stories.tsx"),
    "./app/screens/Browse/Browse.stories.tsx": require("../app/screens/Browse/Browse.stories.tsx"),
    "./app/screens/CategoryDetail/CategoryDetail.stories.tsx": require("../app/screens/CategoryDetail/CategoryDetail.stories.tsx"),
    "./app/screens/Checkout/AddAddress/AddAddress.stories.tsx": require("../app/screens/Checkout/AddAddress/AddAddress.stories.tsx"),
    "./app/screens/Checkout/AddCard/AddCard.stories.tsx": require("../app/screens/Checkout/AddCard/AddCard.stories.tsx"),
    "./app/screens/Checkout/Cart/Cart.stories.tsx": require("../app/screens/Checkout/Cart/Cart.stories.tsx"),
    "./app/screens/Checkout/OrderDetail/OrderDetail.stories.tsx": require("../app/screens/Checkout/OrderDetail/OrderDetail.stories.tsx"),
    "./app/screens/Checkout/Payment/Payment.stories.tsx": require("../app/screens/Checkout/Payment/Payment.stories.tsx"),
    "./app/screens/Dashboard/Dashboard.stories.tsx": require("../app/screens/Dashboard/Dashboard.stories.tsx"),
    "./app/screens/Login/Login.stories.tsx": require("../app/screens/Login/Login.stories.tsx"),
    "./app/screens/Onboarding/Onboarding.stories.tsx": require("../app/screens/Onboarding/Onboarding.stories.tsx"),
    "./app/screens/ProductDetail/ProductDetail.stories.tsx": require("../app/screens/ProductDetail/ProductDetail.stories.tsx"),
    "./app/screens/SignUp/SignUp.stories.tsx": require("../app/screens/SignUp/SignUp.stories.tsx"),
  };
};

configure(getStories, module, false);
