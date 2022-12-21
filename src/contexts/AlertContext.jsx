import { createContext, useState, useEffect } from "react"

const AlertContext = createContext()

function AlertProvider({ children }) {

    const [alertText, setAlertText] = useState('')
    const [alertSeverity, setAlertSeverity] = useState('success')
    const [alertOpen, setAlertOpen] = useState(false)

    const handleAlert = (text, severity) => {
        setAlertText(text)
        setAlertSeverity(severity)
        setAlertOpen(true)
    }

    useEffect(() => {
        if (alertOpen) {
            setTimeout(() => {
                setAlertOpen(false)
            }, 2000)
        }
    }, [alertOpen])

    return (
        <AlertContext.Provider value={{ alertText, alertSeverity, alertOpen, handleAlert }}>
            {children}
        </AlertContext.Provider>
    )
}

export { AlertContext, AlertProvider }