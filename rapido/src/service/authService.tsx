import { useUserStore } from "@/store/userStore"
import { useCaptainStore } from "@/store/captionStore"
import { tokenStorage } from "@/store/storage"
import { resetAndNavigate } from "@/utils/Helpers"
import { Alert } from "react-native"
import axios from "axios"
import { BASE_URL } from "./config"

export const signin = async(payload: {
    role: 'customer' | "captain",
    phone:string    
})=> {
    const { setUser } = useUserStore.getState()
    const { setUser: setCaptainUser } = useCaptainStore.getState();
    try {
        const res = await axios.post(`${BASE_URL}/auth/signin`);
        if (res.data.user.role === 'customer') {
            setUser(res.data.user)
        } else {
            setCaptainUser(res.data.user)
        }
        tokenStorage.set("access_token", res.data.access_token);
        tokenStorage.set("refresh_token", res.data.refresh_token);

        if (res.data.user.role === 'customer') {
            resetAndNavigate('/customer/home')
            return
        }
        else {
            resetAndNavigate("/captain/home")
        }
    } catch (error: any) {
        Alert.alert("Oh! Dang there was an error");
        console.log("Error: ", error?.response?.data?.msg || "Error signin");
    }
}

export const logout = async () => {
    const { clearData } = useUserStore.getState()
    const { clearCaptainData } = useCaptainStore.getState()
    tokenStorage.clearAll()
    clearCaptainData()
    clearData()
    resetAndNavigate('/role')
}