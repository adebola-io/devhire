const DEVELOPERS_API =
  "https://api.terawork.com/service-categories/sellers-services/computer-software-development";
const CURRENCY_API = "https://api.terawork.com/resources";

/**
 * Get the developers from the API.
 * @returns {RESULT}
 */
export async function getDevelopers() {
  try {
    const res = await fetch(DEVELOPERS_API);
    const data = await res.json();
    // eslint-disable-next-line no-throw-literal
    throw { data, success: true };
  } catch (e) {
    return {
      error: e.success ? false : true,
      data: e.data?.data.service_search_results.hits,
    };
  }
}

export async function getFlags() {
  try {
    const res = await fetch(CURRENCY_API);
    const data = await res.json();
    // eslint-disable-next-line no-throw-literal
    throw { data, success: true };
  } catch (e) {
    return {
      error: e.success ? false : true,
      data: e.data?.data.currencies,
    };
  }
}

/**
 * Convert naira to a different value.
 * @param {string} initial_currency
 * @returns {Promise<{error: boolean, data?: number}>}
 */
export async function getRates(initial_currency) {
  try {
    const res = await fetch(CURRENCY_API);
    let data = await res.json();
    data = data?.data.net_conversions.flat(1);
    // eslint-disable-next-line no-throw-literal
    throw { data, success: true };
  } catch (e) {
    return {
      error: e.success ? false : true,
      data: parseFloat(
        e.data.find((c) => c.label === `NGN --> ${initial_currency}`).net_rate
      ),
    };
  }
}
