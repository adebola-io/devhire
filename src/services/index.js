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
      data: e.data?.data.service_search_results.hits
    };
  }
}

export async function getFlags () {
  try {
    const res = await fetch(CURRENCY_API)
    const data = await res.json();
    // eslint-disable-next-line no-throw-literal
    throw { data, success: true };
  } catch (e) {
    return { 
      error: e.success ? false : true, 
      data: e.data?.data.currencies
    };
  }
}