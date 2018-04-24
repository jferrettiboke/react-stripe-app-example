import { Field, FormSpy } from "react-final-form";
import Dropzone from "react-dropzone";

export default class Document extends React.Component {
  constructor(props) {
    super(props);
    this.state = { files: [], error: "" };
  }

  render() {
    const { name } = this.props;

    return (
      <FormSpy
        render={({ change, blur }) => (
          <fieldset>
            <legend className="mb-2">Document</legend>
            <Field name={`${name}.verification.document`}>
              {fieldProps => (
                <Dropzone
                  multiple={false}
                  accept="image/jpeg,image/png"
                  onDrop={(acceptedFiles, rejectedFiles) => {
                    if (rejectedFiles.length) {
                      this.setState((prevState, props) => ({
                        error: "Only PNG files and JPG are allowed"
                      }));
                    }

                    if (acceptedFiles.length) {
                      this.setState((prevState, props) => ({
                        error: "",
                        files: acceptedFiles
                      }));
                      change(`${name}.verification.document`, acceptedFiles);
                      blur(`${name}.verification.document`);
                    }
                  }}
                />
              )}
            </Field>
            <div>
              <div style={{ color: "red" }}>{this.state.error}</div>
              {this.state.files.map((file, key) => (
                <div key={key}>
                  <img width="50" src={file.preview} alt="..." />
                </div>
              ))}
            </div>
          </fieldset>
        )}
      />
    );
  }
}
