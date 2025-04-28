import { isRuleException } from './_exceptions';

/**
 * Formats a message that is displayed when a rule does not conform to the
 * expected format.
 * @param name The name of the rule in question.
 * @param reason The reason why the rule is invalid as written.
 * @returns A message identifying the problem.
 */
const reportInvalidRule = ( name: string, reason: string ) => `Error ${name}: ${reason}`;

/**
 * While the severity can be expressed as a number - with 0, 1, and 2 correlating
 * with off, warn, and error - the string values more clearly express how the rule
 * will be treated and should be utilized.
 * @param severity The level of severity applied to the rule.
 * @param name The name of the rule in question.
 * @returns Wether or not the provided severity value is valid.
 */
const isSeverityValid = ( severity: string, name: string ) => {
  const isValid = [
    'error', 'warn', 'off',
  ].includes( severity );

  if ( !isValid ) {
    return reportInvalidRule( name, `The severity '${severity}' is not a valid severity status.` );
  }

  return true;
};

/**
 * Check whether or not a given rule uses a valid format.
 * @param name The name of the rule in question.
 * @param value The configuration applied to the given rule.
 * @returns 'true' if the rule uses a valid format, otherwise an error message.
 */
export const confirmRuleFormatIsValid = ( name: string, value: unknown ) => {
  // Handle the simple string configurations case.
  if ( typeof value === 'string' ) {
    return isSeverityValid( value, name );
  }

  // Reject any rule that is not a string or array.
  if ( !Array.isArray( value ) ) {
    return reportInvalidRule( name, `The rule value is of type ${typeof value}. It should be a string or array.` );
  }

  // Ensure that a rule configured with an array expresses the severity as a string.
  let severity = value[0] as unknown;

  if ( typeof severity !== 'string' ) {
    return reportInvalidRule( name, 'The first element in the rule configuration should be the severity represented as a string' );
  }

  const validSeverity = isSeverityValid( severity, name );

  // Ensure that a rule configured with an array uses a valid value for the severity string.
  if ( validSeverity !== true ) {
    return validSeverity;
  }

  // Handle unusual cases.
  const { isSpecialCase, isStringOpt, isThreePart, expectedLength } = isRuleException( name );

  // We don't have test cases for the special cases, assume they are okay.
  if ( isSpecialCase ) {
    return true;
  }

  // Ensure that a rule configured with an array contains both a severity and a configuration.
  if ( value.length !== expectedLength ) {
    return reportInvalidRule( name, `Rules configurations should contain exactly ${expectedLength} items in an array, this rule contains ${value.length}` );
  }

  let strOption;
  let options;

  if ( isThreePart ) {
    [
      severity, strOption, options,
    ] = value as unknown[];
  } else {
    [severity, options] = value as unknown[];
  }

  if ( isThreePart && typeof strOption !== 'string' ) {
    return reportInvalidRule( name, 'The second element in the rule configuration should be the principal option represented as a string' );
  }

  if ( isStringOpt && typeof options !== 'string' ) {
    return reportInvalidRule( name, 'The second element in the rule configuration should be a string.' );
  }

  if ( !isStringOpt && Object.prototype.toString.call( options ) !== '[object Object]' ) {
    return reportInvalidRule( name, `The ${isThreePart ? 'third' : 'second'} element in the rule configuration should be an object of optional settings.` );
  }

  return true;
};
