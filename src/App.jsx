import { lazy, Suspense, Fragment } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//////////////////////////////////////////// styles
import theme from "./styles/theme.jsx";
import { ThemeProvider } from "@material-ui/core/styles";

//////////////////////////////////////////// Route
import { Route, Switch } from "react-router-dom";

//////////////////////////////////////////// Layouts
import Header from "./layouts/header.layouts";
import Footer from "./layouts/footer.layouts";

//////////////////////////////////////////// COMPONENTS
import Spinner from "./components/spinner.component";

//////////////////////////////////////////// PAGES

const HomePage = lazy(() => import("./pages/home.page"));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Header />
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/portfolio"
              component={() => <div>portfolio</div>}
            />
            <Route
              exact
              path="/technology"
              component={() => <div>technology</div>}
            />
            <Route exact path="/about" component={() => <div>about</div>} />
            <Route exact path="/contact" component={() => <div>contact</div>} />
          </Suspense>
        </Switch>
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
};

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
