import { Routing } from "./navigation";
import { withProviders } from "./providers";

const App = (): JSX.Element => {
  return <Routing />;
};

export default withProviders(App);