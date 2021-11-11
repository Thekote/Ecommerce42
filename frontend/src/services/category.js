import http from "../http-common.js";

class CategoryDataService {
    getAll() {
        return http.get("/categories");
    };

    get(id) {
        return http.get(`/categories/${ id }`);
    };

    create(data) {
        return http.post("/categories", data);
    };

    update(id, data) {
        return http.put(`/categories/${ id }`, data);
    };


}

export default new CategoryDataService();