import { API_BASE_URL } from "@/configs";

export function constructUserApiUrl(searchTerms, currentPage, perPage) {
    const queryParams = searchTerms.map(term => {
        return Number.isInteger(Number(term)) ? `id=${term}` : `username=${term}`;
    }).join('&');

    return `${API_BASE_URL}?${queryParams}&_page=${currentPage}&_limit=${perPage}`;
}
