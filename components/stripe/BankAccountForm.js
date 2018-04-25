import { Form, Field } from "react-final-form";

import { Section, InputField, SelectField } from "../forms";
import Button from "../Button";

// Edit this line with your Stripe Public Key (test)
const STRIPE_PUBLIC_KEY = "pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

const onSubmit = async values => {
  const stripe = Stripe(STRIPE_PUBLIC_KEY);
  const { token, error } = await stripe.createToken("bank_account", {
    country: values.country,
    currency: values.currency,
    routing_number: values.routing_number,
    account_number: values.account_number,
    account_holder_name: values.account_holder_name,
    account_holder_type: values.account_holder_type
  });

  if (token) {
    // Send the token to your server and link it with the Stripe connected account
    // https://stripe.com/docs/api#account_create_bank_account
    console.log(token);
  } else {
    // TODO: validate each fields and form
    console.error(error);
  }
};

export default ({ initialValues }) => (
  <Form
    initialValues={initialValues}
    onSubmit={onSubmit}
    render={({ handleSubmit, pristine, invalid, values, submitting }) => (
      <form onSubmit={handleSubmit}>
        <Section title="Bank account">
          <Field name="country" label="Country" component={SelectField}>
            <option />
            <option value="AT">AT</option>
            <option value="AU">AU</option>
            <option value="BE">BE</option>
            <option value="CA">CA</option>
            <option value="CH">CH</option>
            <option value="DE">DE</option>
            <option value="DK">DK</option>
            <option value="ES">ES</option>
            <option value="FI">FI</option>
            <option value="FR">FR</option>
            <option value="GB">GB</option>
            <option value="HK">HK</option>
            <option value="IE">IE</option>
            <option value="IT">IT</option>
            <option value="JP">JP</option>
            <option value="LU">LU</option>
            <option value="NL">NL</option>
            <option value="NO">NO</option>
            <option value="NZ">NZ</option>
            <option value="PT">PT</option>
            <option value="SE">SE</option>
            <option value="SG">SG</option>
            <option value="US">US</option>
          </Field>

          <Field name="currency" label="Currency" component={SelectField}>
            <option />
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
          </Field>

          <Field
            name="routing_number"
            label="Routing number"
            component={InputField}
          />

          <Field
            name="account_number"
            label="Account number"
            component={InputField}
          />

          <Field
            name="account_holder_name"
            label="Account holder name"
            component={InputField}
          />

          <Field
            name="account_holder_type"
            label="Account holder type"
            component={InputField}
          />

          <Button
            theme="primary"
            type="submit"
            disabled={submitting || pristine || invalid}
          >
            {submitting ? "Adding bank account..." : "Add bank account"}
          </Button>

          <pre className="mt-8 p-4 text-white bg-grey-dark">
            {JSON.stringify(values, 0, 2)}
          </pre>
        </Section>
      </form>
    )}
  />
);
