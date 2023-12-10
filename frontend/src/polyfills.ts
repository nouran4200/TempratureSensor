/***************************************************************************************************
 * BROWSER POLYFILLS
 */

/** IE9, IE10, IE11, and Chrome < 45 required for NgClass support on SVG elements */
import 'classlist.js';

/** IE10 and IE11 requires the following for NgClass support on SVG elements */
import 'web-animations-js';

/**
 * Evergreen browsers require these.
 */
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';

/**
 * Zone JS is required by Angular itself.
 */
import 'zone.js/dist/zone';  // Included with Angular CLI.

/***************************************************************************************************
 * APPLICATION IMPORTS
 */

/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
import 'intl';

/**
 * Need to import at least one locale-data with intl.
 */
import 'intl/locale-data/jsonp/en';

/**
 * TypeScript does not allow dynamic imports of the core-js library.
 * For instance, the following code will fail:
 * import 'core-js/es6/promise';
 * import 'core-js/es6/array';
 * To solve this problem, you need to add these imports statically.
 * This is why all of these polyfills are imported with a "import()" statement.
 */

// If you need to support Internet Explorer, add the following polyfill.
// import 'core-js/es6/promise';

// Add other polyfills as needed for your application.
