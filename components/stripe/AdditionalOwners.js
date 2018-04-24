import { Field, FormSpy } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";

import FirstName from "./FirstName";
import LastName from "./LastName";
import DateOfBirth from "./DateOfBirth";
import Address from "./Address";
import Document from "./Document";
import { Section } from "../forms";
import Button from "../Button";

export default ({ name }) => (
  <FormSpy
    render={({ mutators: { push, pop } }) => (
      <Section title="Additional owners">
        <FieldArray name={name}>
          {({ fields }) =>
            fields.map((name, index) => (
              <fieldset key={name}>
                <legend className="mb-4">Owner #{index + 1}</legend>
                <div>
                  <FirstName name={name} />
                  <LastName name={name} />
                  <DateOfBirth name={name} />
                  <Document name={name} />
                  <Address name={`${name}.address`} />
                  <span
                    onClick={() => fields.remove(index)}
                    style={{ cursor: "pointer" }}
                  >
                    ❌
                  </span>
                </div>
              </fieldset>
            ))
          }
        </FieldArray>
        <div>
          <Button
            className="my-2"
            type="button"
            onClick={() => push("legal_entity.additional_owners", undefined)}
          >
            Add owner
          </Button>

          <Button
            className="my-2"
            type="button"
            onClick={() => pop("legal_entity.additional_owners")}
          >
            Remove owner
          </Button>
        </div>
      </Section>
    )}
  />
);
