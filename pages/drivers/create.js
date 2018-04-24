import Router from "next/router";
import { Form, Field } from "react-final-form";

import Layout from "../../components/Layout";
import { InputField, TextAreaField } from "../../components/forms";
import Button from "../../components/Button";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
  Router.push("/drivers/setup");
};

export default () => (
  <Layout>
    <div className="bg-white rounded-lg border p-8">
      <Form
        onSubmit={onSubmit}
        //validate={validate}
        render={({ handleSubmit, pristine, invalid, values }) => (
          <form onSubmit={handleSubmit}>
            <h1>Become a Driver</h1>

            <Field name="firstName" component={InputField} label="First Name" />
            <Field name="lastName" component={InputField} label="Last Name" />
            <Field name="bio" component={TextAreaField} label="Bio" />

            <Button type="submit" disabled={pristine || invalid}>
              Become a Driver
            </Button>

            <pre className="mt-8 p-4 text-white bg-grey-dark">
              {JSON.stringify(values, 0, 2)}
            </pre>
          </form>
        )}
      />
    </div>
  </Layout>
);
