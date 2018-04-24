import Link from "next/link";
import { Form, Field, FormSpy } from "react-final-form";
import arrayMutators from "final-form-arrays";

import Show from "./Show";
import FirstName from "./FirstName";
import LastName from "./LastName";
import DateOfBirth from "./DateOfBirth";
import Address from "./Address";
import Document from "./Document";
import AdditionalOwners from "./AdditionalOwners";
import { Section, InputField, SelectField } from "../forms";
import Button from "../Button";

export default ({
  initialValues,
  onSubmit,
  onCountryUpdated,
  onTypeUpdated
}) => (
  <Form
    initialValues={initialValues}
    onSubmit={onSubmit}
    mutators={{
      ...arrayMutators
    }}
    // validate={values => {
    //   const errors = {
    //     legal_entity: {}
    //   };
    //
    //   // TODO: add validation
    //   if (!values.legal_entity.business_name) {
    //     errors.legal_entity.business_name = "Required";
    //   }
    //
    //   return errors;
    // }}
    render={({ handleSubmit, pristine, invalid, values, submitting }) => (
      <form onSubmit={handleSubmit}>
        <FormSpy
          onChange={formState => {
            if (initialValues.country !== formState.values.country) {
              onCountryUpdated(formState.values.country);
            }

            if (
              initialValues.legal_entity.type !==
              formState.values.legal_entity.type
            ) {
              onTypeUpdated(formState.values.legal_entity.type);
            }
          }}
        />

        <Section title="Business">
          <div>
            <Field name="country" label="Country" component={SelectField}>
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
            <div className="-mt-2 text-grey-dark text-sm leading-tight">
              The country in which the account holder resides, or in which the
              business is legally established. This should be an ISO 3166-1
              alpha-2 country code. For example, if you are in the United States
              and the business for which you're creating an account is legally
              represented in Canada, you would use CA as the country for the
              account being created.{" "}
              <a
                href="https://stripe.com/docs/api#create_account-country"
                className="text-grey-darker"
                target="_blank"
              >
                https://stripe.com/docs/api#create_account-country
              </a>
            </div>
          </div>

          <Field name="legal_entity.type" label="Type" component={SelectField}>
            <option value="individual">Individual</option>
            <option value="company">Company</option>
          </Field>

          <Show when="legal_entity.business_name">
            <Field
              name="legal_entity.business_name"
              label="Business name"
              component={InputField}
            />
          </Show>

          <Show when="legal_entity.business_tax_id">
            <Field
              name="legal_entity.business_tax_id"
              label="Business tax ID"
              component={InputField}
            />
          </Show>

          <Show when="legal_entity.phone_number">
            <Field
              name="legal_entity.phone_number"
              label="Phone number"
              component={InputField}
            />
          </Show>
        </Section>

        <Show when="legal_entity.address">
          <Address name="legal_entity.address" />
        </Show>

        <Section title="Representative">
          <Show when="legal_entity.first_name">
            <FirstName name="legal_entity" />
          </Show>

          <Show when="legal_entity.last_name">
            <LastName name="legal_entity" />
          </Show>

          <Show when="legal_entity.dob">
            <DateOfBirth name="legal_entity" />
          </Show>

          <Show when="legal_entity.ssn_last_4">
            <Field
              name="legal_entity.ssn_last_4"
              label="SSN (last 4)"
              component={InputField}
            />
          </Show>

          <Show when="legal_entity.personal_id_number">
            <Field
              name="legal_entity.personal_id_number"
              label="Government-issued ID number"
              component={InputField}
            />
          </Show>

          <Show when="legal_entity.verification.document">
            <Document name="legal_entity" />
          </Show>
        </Section>

        <Show when="legal_entity.personal_address">
          <Address name="legal_entity.personal_address" />
        </Show>

        <Show when="legal_entity.additional_owners">
          <AdditionalOwners name="legal_entity.additional_owners" />
        </Show>

        <Button
          theme="primary"
          type="submit"
          disabled={submitting || pristine || invalid}
        >
          {submitting ? "Setting up new account..." : "Set up account"}
        </Button>

        <p className="my-4 text-xs text-grey-darker text-center leading-normal">
          By clicking, you agree to{" "}
          <Link href="#">
            <a className="text-black">our terms</a>
          </Link>{" "}
          and the{" "}
          <Link href="/connect-account/legal">
            <a className="text-black">Stripe Connected Account Agreement</a>
          </Link>.
        </p>

        <pre className="mt-8 p-4 text-white bg-grey-dark">
          {JSON.stringify(values, 0, 2)}
        </pre>
      </form>
    )}
  />
);
