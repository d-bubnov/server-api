import _ from 'lodash';
import { IRequestedVariable, IKeyValuePairVariables } from '../interfaces';

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
