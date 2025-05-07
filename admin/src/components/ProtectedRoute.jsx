import { useNavigate } from "react-router"

export default function ProtectedRoute() {
    const navigate = useNavigate()
    const swp = () => {
        navigate ('/')
    }
        return (
            <button onClick={swp} className="w-10 h-10">
                switch papge
            </button>
        )
}
