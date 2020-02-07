import _ from 'lodash';

// Define type of input parameters
interface IRequestedVariable {
  name: string;
  default?: string;
}

// Define type of output parameters
interface IKeyValuePairVariables {
  [key: string]: string
}

/**
 * Read and get environment variables
 *
 * @param variables - array - the array of environment variables
 * @param variables[].name string (required) - the name of environment variable
 * @param variables[].default string (optional) - the default value if environment variable is not set
 *
 * @returns object with properties
 * Where:
 *  - property name - the name of environment variable
 *  - property value - the value of environment variable
 *
 * For note:
 * The method returns property names in camel case format.
 * For example: "SERVER_PORT" => serverPort
 */
const getEnvs = (variables: IRequestedVariable[]) => {
  const result: IKeyValuePairVariables = {};

  _.forEach(
    variables,
    (variable: IRequestedVariable) => {
      const variableValue = process.env[variable.name] || variable.default;
      if (variableValue === void 0) {
        // Throw an error if variable value does not set
        throw new Error(`Please check that variable has been set: ${variable.name}`);
      }

      const variableName: string = _.camelCase(variable.name);
      result[variableName] = variableValue;
    },
  );

  return result;
};

export { getEnvs };
