import { Field } from "react-final-form";

import { SelectField } from "../forms";

export default ({ name }) => (
  <React.Fragment>
    <div className="mb-2">Date of birth</div>
    <div className="flex">
      <div className="w-1/3">
        <Field
          name={`${name}.dob.day`}
          label="Day"
          component={SelectField}
          parse={value => value && parseInt(value)}
        >
          <option />
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="...">...</option>
        </Field>
      </div>
      <div className="w-1/3 mx-4">
        <Field
          name={`${name}.dob.month`}
          label="Month"
          component={SelectField}
          parse={value => value && parseInt(value)}
        >
          <option />
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </Field>
      </div>
      <div className="w-1/3">
        <Field
          name={`${name}.dob.year`}
          label="Year"
          component={SelectField}
          parse={value => value && parseInt(value)}
        >
          <option />
          <option value="...">...</option>
          <option value="1980">1980</option>
          <option value="1981">1981</option>
          <option value="1982">1982</option>
          <option value="...">...</option>
        </Field>
      </div>
    </div>
  </React.Fragment>
);
