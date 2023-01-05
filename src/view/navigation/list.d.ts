import { DisclaimerScreen } from '~/view/screens/Disclaimer';
import { AuthScreen } from '~/view/screens/Auth';
declare namespace ReactNavigation {
  interface RootParamList {
    Home: {
      StationScreen: undefined;
      DetailsScreen: undefined;
    };
    Auth: {
      AuthScreen: undefined;
      DisclaimerScreen: {token: string}
    };
  }
}
