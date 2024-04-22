import axios from 'axios';
import { constructUserApiUrl } from "@/utils/api-utils";

export function fetchUsersApi(searchTerms, currentPage, perPage) {
    const url = constructUserApiUrl(searchTerms, currentPage, perPage);
    return axios.get(url).then(response => response.data);
}
