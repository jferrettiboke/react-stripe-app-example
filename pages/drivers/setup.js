import dot from "dot-object";
import find from "lodash/find";

import Layout from "../../components/Layout";
import LegalEntityForm from "../../components/stripe/LegalEntityForm";
import countriesSpecs from "../../utils/countriesSpecs";

// Edit this line with your Stripe Public Key (test)
const STRIPE_PUBLIC_KEY = "pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

export default class Setup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: { legal_entity: {} }
    };
  }

  fetchCountrySpecs({ country, type }) {
    // Fetch country specs using Stripe API
    // `countriesSpecs` is a JS object (don't use this in live apps)
    const countrySpecs = find(countriesSpecs, { id: country });
    const minimumFields = countrySpecs.verification_fields[type].minimum;

    let obj = {};
    minimumFields.map(field => {
      obj[field] = null;
    });
    obj = dot.object(obj);

    this.setState(state => ({
      country,
      fields: {
        legal_entity: { ...obj.legal_entity, type }
      }
    }));
  }

  componentDidMount() {
    this.fetchCountrySpecs({ country: "US", type: "individual" });
  }

  render() {
    return (
      <Layout>
        <div className="bg-white rounded-lg border p-8">
          <h1>Setup your account</h1>
          <LegalEntityForm
            initialValues={{
              country: this.state.country,
              ...this.state.fields
            }}
            onCountryUpdated={country => {
              this.fetchCountrySpecs({
                country,
                type: this.state.fields.legal_entity.type
              });
            }}
            onTypeUpdated={type => {
              this.fetchCountrySpecs({ country: this.state.country, type });
            }}
            onSubmit={async values => {
              const stripe = Stripe(STRIPE_PUBLIC_KEY);

              // Generate a Stripe token with all the account information
              const result = await stripe.createToken("account", {
                legal_entity: values.legal_entity,
                tos_shown_and_accepted: true
              });

              // Send the token to your server and create the account
              console.log(result);
            }}
          />
        </div>
      </Layout>
    );
  }
}
