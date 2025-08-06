import { toast } from "react-toastify";

const { productService } = require("@/services/product.service");

export const useProduct = () => {
    
    const getProducts = async () => {
        try {
            const products = await productService.getProducts();
            return products;
        } catch (error) {
            console.error("Error fetching products:", error);
            throw error; // Re-throw the error for further handling
        }
    }

    const getProductsById = async () => {
        const token = localStorage.getItem("token");
        try {
            const products = await productService.getProductsById(token);
            if (!products || products.length === 0) {
                toast.info("No products found for this user.");
                return [];
            }
            return products;
        } catch (error) {
            console.log("Error fetching products by ID:", error);
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
            toast.success("Product created successfully!");
            return product;
        } catch (error) {
            console.error("Error creating product:", error);
            throw error; // Re-throw the error for further handling
        }
    }

    const updateProduct = async (token, id, formData) => {
        try {
            const product = await productService.updateProduct(token, id, formData);
            toast.success("Product updated successfully!");
            return product;
        } catch (error) {
            toast.error("Error updating product: " + error.response?.data?.message || "Please try again.");
            console.log("Error updating product:", error);
        }
    }

    const deleteProduct = async (token, id) => {
        try {
            const response = await productService.deleteProduct(token, id);
            toast.success("Product deleted successfully!");
            return response;
        } catch (error) {
            console.error("Error deleting product:", error);
            throw error; // Re-throw the error for further handling
        }
    }

    return {
        getProducts,
        getProductsById,
        getProductById,
        createProduct,
        updateProduct,
        deleteProduct
    };
}
