import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";
import { userService } from "@/services/user.service";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const useUser = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();
    const { user } = useAuth();

    // useEffect(() => {
        const fetchUser = async (token) => {
            setLoading(true);
            try {
                const response = await userService.getUser(token);
                const data = response.data.user;

                if (data.length === 0 || data === undefined || data === null) {
                    console.log("No user data found");
                    router.push("/login"); // Redirect to login page if no user data is found
                    return;
                }
                setUsers(data);
                console.log("Fetched User data:", data); // Log the user data
                localStorage.setItem("UserData", JSON.stringify(data)); // Store user data in local storage
            } catch (error) {
                console.error("Error fetching user data:", error);
                router.push("/login"); // Redirect to login page if there's an error
            } finally {
                setLoading(false);
            }
        }
        // if (user?.accessToken) {
        //     fetchUser();
        // }
    // }, [user]);

    const updateUser = async (token, formData) => {
        setLoading(true);
        setError(null);
        try {
            localStorage.removeItem('UserData'); // Remove old user data from local storage
            const response = await userService.updateUser(token, formData);
            const data = response.data.user;
            setUsers(data);

            toast.success(response.message );
            console.log("Updated User data:", data); // Log the updated user data
            localStorage.setItem("UserData", JSON.stringify(data)); // Store updated user data in local storage

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
            const data = response.data.user;
            setUsers(data);
            console.log("Updated User image:", data); // Log the updated user image
            localStorage.setItem("UserData", JSON.stringify(data)); // Store updated user image in local storage
            toast.success(response.message || "Image updated successfully");
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to update user image");
            setError(error);
        } finally {
            setLoading(false);
        }
    }


    return { users, loading, error, fetchUser, updateUser, updateImage };
}