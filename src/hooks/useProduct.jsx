const { productService } = require("@/services/product.service");

export const useProduct = () => {
    
    const getProducts = async (token) => {
        try {
            const products = await productService.getProducts(token);
            return products;
        } catch (error) {
            console.error("Error fetching products:", error);
            throw error; // Re-throw the error for further handling
        }
    }

    const getProductById = async (id) => {
        try {
            const product = await productService.getProductById(id);
            return product;
        } catch (error) {
            console.error("Error fetching product by ID:", error);
            throw error; // Re-throw the error for further handling
        }
    }

    const createProduct = async (token, formData) => {
        try {
            const product = await productService.createProduct(token, formData);
            return product;
        } catch (error) {
            console.error("Error creating product:", error);
            throw error; // Re-throw the error for further handling
        }
    }

    const updataProduct = async (token, id, formData) => {
        try {
            const product = await productService.updateProduct(token, id, formData);
            return product;
        } catch (error) {
            console.error("Error updating product:", error);
            throw error; // Re-throw the error for further handling
        }
    }

    const deleteProduct = async (token, id) => {
        try {
            const response = await productService.deleteProduct(token, id);
            return response;
        } catch (error) {
            console.error("Error deleting product:", error);
            throw error; // Re-throw the error for further handling
        }
    }

    return {
        getProducts,
        getProductById,
        createProduct,
        updataProduct,
        deleteProduct
    };
}
