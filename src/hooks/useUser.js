import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";
import { userService } from "@/services/user.service";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const useUser = () => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();
    const { user } = useAuth();

    const fetchUser = async () => {
            try {
                const token = localStorage.getItem("jwt") || user?.accessToken;
                setLoading(true);
                const response = await userService.getUser(token || user?.accessToken);
                const data = response.data;

                if (data.length === 0 || data === undefined || data === null) {
                    console.log("No user data found");
                    router.push("/login"); // Redirect to login page if no user data is found
                    return;
                }
                console.log("Fetched User data:", data); // Log the user data
                localStorage.setItem("UserData", JSON.stringify(data)); // Store user data in local storage
                localStorage.setItem("jwt", token || user?.accessToken); // Store JWT token in local storage
                setUsers(data);
                return data; // Return the fetched user data
            } catch (error) {
                console.log("Error fetching user data:", error.response?.data?.message || error.message);
                router.push("/login"); // Redirect to login page if there's an error
                setError(error);
            } finally {
                setLoading(false);
            }
        }

    const checkAdmin = async () => {
        try {
            const token = localStorage.getItem("jwt") || user?.accessToken;
            setLoading(true);
            const response = await userService.getUser(token || user?.accessToken);
            const data = response.data;

            if (data.length === 0 || data === undefined || data === null) {
                console.log("No user data found");
            return;
            } else if (data.user.Role === "admin") {
                router.push("/admin/dashboard"); // Redirect to admin page if user is an admin
            }
            console.log("Fetched User data:", data); // Log the user data
            localStorage.setItem("UserData", JSON.stringify(data)); // Store user data in local storage
            localStorage.setItem("jwt", token || user?.accessToken); // Store JWT token in local storage
            setUsers(data);
            return data; // Return the fetched user data
        } catch (error) {
            console.log("Error fetching user data:", error.response?.data?.message || error.message);
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    const updateUser = async (formData) => {
        setLoading(true);
        setError(null);
        try {
            const token = localStorage.getItem("jwt") || user?.accessToken;
            localStorage.removeItem('UserData'); // Remove old user data from local storage
            const response = await userService.updateUser(token, formData);
            const data = response.data;
            setUsers(data);

            toast.success(response.message );
            console.log("Updated User data:", data); // Log the updated user data
            localStorage.setItem("UserData", JSON.stringify(data)); // Store updated user data in local storage
            return data; // Return the updated user data
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to update user data");
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    const updateImage = async (image) => {
        setLoading(true);
        setError(null);
        try {
            localStorage.removeItem('UserData'); // Remove old user data from local storage
            const response = await userService.updateImage(image);
            const data = response.data;
            setUsers(data);
            console.log("Updated User image:", data); // Log the updated user image
            localStorage.setItem("UserData", JSON.stringify(data)); // Store updated user image in local storage
            toast.success(response.message || "Image updated successfully");
            return data; // Return the updated user image
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to update user image");
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    const fetchAdmin = async () => {
        try {
            const token = localStorage.getItem("jwt") || user?.accessToken;
            setLoading(true);
            const response = await userService.getUser(token || user?.accessToken);
            const data = response.data;

            if (data.length === 0 || data === undefined || data === null) {
                console.log("No user data found");
                router.push("/login"); // Redirect to login page if no user data is found
                return;
            }
            setError(null); // Clear any previous errors
            return data; // Return the fetched user data
        } catch (error) {
            console.log("Error fetching user data:", error.response?.data?.message || error.message);
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    const updatePassword = async (formData) => {
        setLoading(true);
        setError(null);
        try {
            const token = localStorage.getItem("jwt") || user?.accessToken;
            const response = await userService.updatePassword(token, formData);
            const data = response.data;
            setUsers(data);
            toast.success(response.message || "Password updated successfully");
            console.log("Updated User password:", data); // Log the updated user password
            return data; // Return the updated user password
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to update password");
            console.log("Error updating password:", error.response?.data?.message || error.message);
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    const becomeAdmin = async () => {
        setLoading(true);
        setError(null);
        try {
            const token = localStorage.getItem("jwt") || user?.accessToken;
            const response = await userService.becomeAdmin(token);
            const data = response.data;
            setUsers(data);
            toast.success(response.message || "You are now an admin");
            console.log("Updated User password:", data); // Log the updated user password
            return data; // Return the updated user password
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to become admin");
            console.log("Error updating password:", error.response?.data?.message || error.message);
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    const becomeUser = async () => {
        setLoading(true);
        setError(null);
        try {
            const token = localStorage.getItem("jwt") || user?.accessToken;
            const response = await userService.becomeUser(token);
            const data = response.data;
            setUsers(data);
            toast.success(response.message || "You are now a user");
            console.log("Updated User password:", data); // Log the updated user password
            return data; // Return the updated user password
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to become user");
            console.log("Error updating password:", error.response?.data?.message || error.message);
            setError(error);
        } finally {
            setLoading(false);
        }
    }


    return {fetchUser, checkAdmin, updateUser, updateImage, users, loading, error, fetchAdmin, updatePassword, becomeAdmin, becomeUser};
}
