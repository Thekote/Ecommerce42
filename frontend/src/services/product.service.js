import http from "../http-common.js";

class ProductDataService {
    getAll() {
        return http.get("/products");
    };

    get(id) {
        return http.get(`/products/${ id }`);
    };

    create(data) {
        return http.post("/products", data);
    };

    update(id, data) {
        return http.put(`/products/${ id }`, data);
    };


}

export default new ProductDataService();