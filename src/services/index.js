const API = "https://api.terawork.com/service-categories/sellers-services/computer-software-development";
export async function getDevelopers () {
    try {
        const res = await fetch(API);
        const data = await res.json();
        console.log(data)
        // eslint-disable-next-line no-throw-literal
        throw {data, success: true};
    } catch (e) {
        return {error: e.success ? false : true, data: e.data?.data }
    }
}