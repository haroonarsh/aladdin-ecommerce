import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";
import { userService } from "@/services/user.service";
import { useRouter } from "next/navigation";

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
                    setError("No user data found");
                    router.push("/login"); // Redirect to login page if no user data is found
                    return;
                }
                setUsers(data);
                console.log("Fetched User data:", data); // Log the user data
                localStorage.setItem("UserData", JSON.stringify(data)); // Store user data in local storage
            } catch (error) {
                setError(error.message || "Failed to fetch user data");
                router.push("/login"); // Redirect to login page if there's an error
            } finally {
                setLoading(false);
            }
        }
        // if (user?.accessToken) {
        //     fetchUser();
        // }
    // }, [user]);


    return { users, loading, error, fetchUser };
}