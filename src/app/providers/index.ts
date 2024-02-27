import compose from "compose-function";
import { withRouter } from "./provider.router";
import { withStore } from "./provider.redux";

export const withProviders = compose(withRouter, withStore);
