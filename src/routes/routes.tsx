import { Navigate, Route, Routes } from "react-router-dom"
import { CentralBusLayout } from "../components/layout/CentralBusLayout"
import { FranquiciasLayout } from "../components/layout/FranquiciasLayout"
import { HomeScreen } from "../screens/HomeScreen"

export const AppRouter = () => {
    return (
        <Routes>
            <Route element={<CentralBusLayout/>}>
                <Route index element={<HomeScreen/>}/>
            </Route>

            <Route path="franquicias" element={<FranquiciasLayout/>}>

            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}
